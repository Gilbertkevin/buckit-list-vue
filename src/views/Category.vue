<template>
  <div class="Category">
    <h3> {{ category.category_title }} </h3>
    <div v-for="item in category.items">
      <p><b><i>{{ item.item_title }}</i></b></p>
      <p v-for="note in item.notes"> {{ note.description }}</p>
      <img v-for="image in item.images" v-bind:src="image.url">
      <br />
    </div>
    <div>
      <hr>
      <h3>Add an Item</h3>
      <form v-on:submit.prevent="submit()">
        <label>Title:</label>
        <input type="text" v-model="newItem.item_title"/>
        <label>Notes:</label>
        <input type="text" v-model="newNote.description"/>
        <label>Image URL:</label>
        <input type="text" v-model="newImage.url"/>
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
        category: {},
        newItem: {},
        newNote: {},
        newImage: {},
        errors: [],
        items: []
      };
    },
    created: function () {
      this.categoriesIndex();
    },
    methods: {
      categoriesIndex: function () {
        console.log('getting category items...')
        axios.get(`/categories/${this.$route.params.id}`).then(response => {
          console.log(response.data);
          this.category = response.data;
        })
      },
      submit: function () {
        var params = {category_id: this.category.id, note: this.newNote.description, image: this.newImage.url, title: this.newItem.item_title}
        axios.post("/items", params).then((response) => {
          console.log(response.data);
          // this.$router.push(`/category/${this.$route.params.id}`)
        window.location.reload()
        });
        // var params = {category_id: this.category.id};
        // axios.post("/notes", this.newNote, {params}).then((response) => {
        //   console.log(response.data);
        //   this.$router.push(`/categories/${this.$route.params.id}`)
        // });
        // var params = {category_id: this.category.id};
        // axios.post("/images", this.newImage, {params}).then((response) => {
        //   console.log(response.data);
        //   this.$router.push(`/categories/${this.$route.params.id}`)
        // })
        // .catch((error) => {
        //   this.errors = error.response.data.errors;
        // });
      },
    },
  };
</script>

