import axios from "axios";
const getData = async(userId) => {
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userData = {...user.data, posts: posts.data }
    return userData;
}

export default getData;