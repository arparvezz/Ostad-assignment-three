<script setup>
import { reactive } from 'vue';
import blogs from '../Data/BlogData';

// limited caracter to 150 words
function truncateWords(str,count){
    return `${str.split('').slice(0,count).join('')}...`
}

</script>

<template>
  <div class="container mx-auto">
    <h2 class="my-2 text-2xl">Blogs</h2>
    <hr>
    <div class="my-2 grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-3">
        <div class="p-3 bg-slate-50 rounded" v-for="(singleBlog, index) in blogs" :key="index">
            <h2 class="text-xl">{{ singleBlog.title }}</h2>
            <p class="text-slate-400" v-text="truncateWords(singleBlog.body,150)"></p>
            <button class="my-2 px-3 py-1 rounded-md bg-slate-800 text-white">See More</button>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>
