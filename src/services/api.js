import axios from 'axios';

export const post = (body) => {  
    return axios.post('http://localhost:5000/api', body);
  };

  export async function createUser(data) {
    const response = await fetch(`http://localhost:5000/api`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
      console.log("CLIENT Req", data)
    return await response.json();
}