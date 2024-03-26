<script setup>
import { ref } from 'vue';
import blogs from '../Data/BlogData';
let title = ref('')
let body = ref('')
function createNewBlog(){
    let contentObj = {
        title:title.value,
        body:body.value
    }
    blogs.push(contentObj)

    // clear the form
    title.value = ''
    body.value = ''
}
</script>

<template>
  <div class="container mx-auto my-2">
    <h2 class="text-xl">Create New Post</h2>
    <hr>
    <form @submit.prevent class="my-2 p-3 rounded-sm bg-blue-100">
        <div class="my-1">
            <label for="title">Add Title</label><br>
            <input type="text" name="title" id="title" class="p-2 border border-slate-100 outline-none w-full" v-model="title">
        </div>
        <div class="my-1">
            <label for="body">Add Post</label><br>
            <textarea name="body" id="body" cols="30" rows="6" class="p-2 border border-slate-100 outline-none w-full" v-model="body"></textarea>
        </div>
        <button class="px-3 py-1 rounded-md bg-green-800 text-white" @click="createNewBlog()">Add New Post</button>
    </form>
  </div>
</template>

<style scoped>

</style>
