<script setup>
import blogs from '../Data/BlogData';
import activePost from '../Data/ActivePost';

</script>
<template>
  <div class="container mx-auto">
    <h2>{{ blogs[activePost.activePostIndex].title }}</h2>
    <p>{{ blogs[activePost.activePostIndex].body }}</p>
  </div>
</template>
<style></style>
