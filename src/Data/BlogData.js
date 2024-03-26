import { reactive } from "vue";

const blogs = reactive([]);

function getData(){
    fetch('https://dummyjson.com/posts')
    .then(rawData => rawData.json())
    .then(data => {
        data.posts.forEach(element => {
            blogs.push(element)
        });
        // console.log(data)
    })
    .catch(err => console.log(err))
}

getData();

export default blogs;

