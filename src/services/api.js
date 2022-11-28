import axios from 'axios';

export const post = (body) => {  
    return axios.post('http://localhost:5000/init', body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

