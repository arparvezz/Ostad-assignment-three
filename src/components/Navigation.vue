<script setup>
import { ref } from 'vue';
import router from '../router/router';
</script>

<template>
  <div class="container mx-auto flex justify-between items-center py-4 border-b">
    
      <router-link to="/">
      <img src="/src/assets/vue.svg" class="logo" alt="Vue logo" />
    </router-link>
    <nav class="space-x-4">
      <router-link class="px-3 py-1 rounded bg-slate-100 hover:bg-slate-200" to="/">Home</router-link>
      <router-link class="px-3 py-1 rounded bg-slate-100 hover:bg-slate-200" to="/add-new-blog">Add New Blog</router-link>
      <router-link class="px-3 py-1 rounded bg-slate-100 hover:bg-slate-200" to="/edit-delete-blog">Edit/Delete Blog</router-link>
    </nav>
  </div>
</template>

<style scoped>

</style>
