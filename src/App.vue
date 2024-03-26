<script setup>
import Navigation from './components/Navigation.vue';
import router from '../src/router/router'
// import Home from './components/Home.vue';
// import AddNewBlog from './components/AddNewBlog.vue';
// import EditDeleteBlog from './components/EditDeleteBlog.vue';
import Footer from './components/Footer.vue';
/**
 

Home Page: Display a list of blogs. Each blog entry should be limited to 150 characters. Provide a "See More" button for each entry that redirects to a separate page displaying the full content of the selected blog.

Add Blog Form: Implement a form similar to Facebook's for adding a new blog entry to the home page.
Update and Delete Functionality: Allow users to update and delete existing blog entries.
Requirements:


Utilize Pinia for state management.
Use vue-router for routing.

 */
</script>

<template>

<Navigation/>
  <!-- <Home/> -->
  <!-- <AddNewBlog/> -->
  <!-- <EditDeleteBlog/> -->
  <router-view/>
    <Footer/>
</template>

<style scoped>

</style>
