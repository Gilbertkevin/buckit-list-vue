<template>
  <div class="Buckit">
    <h1>{{ message }}</h1>

    <div v-for="category in categories">
      <h3> {{ category.category_title }} </h3>
      <button @click="$router.push(`/category/${category.id}`)">View List</button>
      <br />
    </div>
    <div>
      <hr>
      <h3>Add a Category</h3>
      <form v-on:submit.prevent="submit()">
        <input type="text" v-model="newCategory.category_title"/>
        <input type="submit" value="Submit" />
      </form>
      
    </div>
    
  </div>
</template>

<style></style>

<script>
import axios from "axios";
  export default {
    data: function () {
      return {
        message: "Your Buckit!",
        categories: [],
        newCategory: {},
        errors: [],
      };
    },
    created: function () {
      this.categoriesIndex();
    },
    methods: {
      categoriesIndex: function () {
        console.log('getting categories...')
        axios.get(`/categories`).then(response => {
          console.log(response.data);
          this.categories = response.data;
        })
      },
      submit: function () {
        axios.post("/categories", this.newCategory).then((response) => {
          console.log(response.data);
          this.$router.push("/categories")
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
      },
    },
  };
</script>