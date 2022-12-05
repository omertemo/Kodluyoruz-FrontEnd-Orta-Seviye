import axios from "axios";


const getUsers = async (Number) => {
  try {
    const user = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${Number}`,
      {
        headers: {
          'Accept-Encoding': 'application/json',
        }
      }
    );
    return user.data;

  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

const getPosts = async (Number) => {
  try {

    const post = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?id=${Number}`,
      {
        headers: {
          'Accept-Encoding': 'application/json',
        }
      }
    );
    return post.data;

  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

async function getData(userId) {
  try {
    const users = await getUsers(userId);
    const posts = await getPosts(userId);

    users.posts = posts;
    return users;

  } catch (e) {
    console.log(e);
  }
}


export default getData;