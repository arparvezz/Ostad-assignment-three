<script setup>
import blogs from '../Data/BlogData';

// Delete Post
function deletePost(ind){
    blogs.splice(ind,1)
}
</script> 

<template>
  <div class="container mx-auto my-2">
    <h2 class="text-xl">Edit/Delete Post</h2>
    <hr>
    <div class="bg-green-100 p-2 space-y-2 ">
        <div class="bg-white p-3 rounded" v-for="(singleBlog,index) in blogs" :key="index">
        <h2 class="my-2">{{ singleBlog.title }}</h2>
        <button class="mr-2 px-2 py-1 rounded bg-green-500 text-white text-sm">Edit</button>
        <button class="px-2 py-1 rounded bg-red-500 text-white text-sm" @click="deletePost(index)">Delete</button>
        </div>
    </div>
    <!-- <form @submit.prevent class="my-2 p-3 rounded-sm bg-blue-100">
        <div class="my-1">
            <label for="title">Add Title</label><br>
            <input type="text" name="title" id="title" class="p-2 border border-slate-100 outline-none w-full">
        </div>
        <div class="my-1">
            <label for="body">Add Post</label><br>
            <textarea name="body" id="body" cols="30" rows="6" class="p-2 border border-slate-100 outline-none w-full"></textarea>
        </div>
        <button class="px-3 py-1 rounded-md bg-green-800 text-white">Add New Post</button>
    </form> -->
  </div>
</template>

<style scoped>

</style>
