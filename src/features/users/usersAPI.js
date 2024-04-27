import axios from 'axios'

const gelAsyncUsers = async () => {
  return axios('https://jsonplaceholder.typicode.com/users?_limit=5')
    .then(res => res.data.map(user => user.name))
    .then(data => data)
};
export default gelAsyncUsers;