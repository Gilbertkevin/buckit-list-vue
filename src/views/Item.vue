<template>
  <div class="Item">
    <!-- <h1>{{ category.category_title }}</h1> -->

    <div v-for="item in items">
      <h3> {{ item.item_title }} </h3>
      
      <br />
    </div>
    <div>
      <h3>Add an Item</h3>
      <form v-on:submit.prevent="submit()">
        <input type="text" v-model="newItem.item_title"/>
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
        items: [],
        newItem: {},
        errors: [],
      };
    },
    created: function () {
      this.itemsIndex();
    },
    methods: {
      itemsIndex: function () {
        console.log('getting items...')
        axios.get(`/items`).then(response => {
          console.log(response.data);
          this.items = response.data;
        })
      },
      submit: function () {
        axios.post("/items", this.newItem).then((response) => {
          console.log(response.data);
          this.$router.push(`/items/${this.newItem.id}`)
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
      },
    },
  };
</script>