<script setup>
import { reactive } from 'vue';
import blogs from '../Data/BlogData';
import activePost from '../Data/ActivePost';

// limited caracter to 150 words
function truncateWords(str,count){
  if(str.split('').length > 150){
    return `${str.split('').slice(0,count).join('')}...`
  }else{
    return `${str}`
  }
    
}
console.log(activePost.activePostIndex)
</script>

<template>
  <div class="container mx-auto">
    <h2 class="my-2 text-2xl">Blogs</h2>
    <hr>
    <div class="my-2 grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-3">
        <div class="p-3 bg-slate-50 rounded" v-for="(singleBlog, index) in blogs" :key="index">
            <h2 class="text-xl">{{ singleBlog.title }}</h2>
            <p class="text-slate-400" v-text="truncateWords(singleBlog.body,150)"></p>
            <router-link class="px-3 py-1 rounded bg-slate-300 hover:bg-slate-400" to="/single-blog" @click="activePost.activePostIndex = index">See More ...</router-link>
            
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>
