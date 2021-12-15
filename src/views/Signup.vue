<template>
  <div class="signup">
    <h1>Sign Up to start your Buckit List</h1>
    <form v-on:submit.prevent="submit()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>First Name:</label>
        <input type="text" v-model="newUserParams.first_name">
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" v-model="newUserParams.last_name">
      </div>
      <div>
        <label>Email:</label>
        <input type="text" v-model="newUserParams.email">
      </div>
      <div>
        <label>Password:</label>
        <input type="text" v-model="newUserParams.password">
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="text" v-model="newUserParams.password_confirmation">
      </div>
      <div>
        <input type="submit" value="Submit">
      </div>
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

  export default {
    data: function () {
      return {
        newUserParams: {
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          password_confirmation: ""
        },
        errors: []
      };
    },
    created: function () {},
    methods: {
      submit: function () {
        axios.post("/users", this.newUserParams).then((response) => {
          console.log(response.data);
          this.$router.push("/home");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
      }
    },
  };
</script>
