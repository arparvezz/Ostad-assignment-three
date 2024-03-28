import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AddNewBlog from "../components/AddNewBlog.vue";
import EditDeleteBlog from "../components/EditDeleteBlog.vue";
import SingleBlog from "../components/SingleBlog.vue";

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/single-blog',
        component: SingleBlog
    },
    {
        path: '/add-new-blog',
        component: AddNewBlog
    },
    {
        path: '/edit-delete-blog',
        component: EditDeleteBlog
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;