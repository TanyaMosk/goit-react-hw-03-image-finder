import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '38122432-d1b8f090b8220c22915483b4c';

export async function fetchImages(query, page) {
  const url = `${BASE_URL}?key=${KEY}&q=${query}&page=${page}`;
  
  const response = await axios.get(url, {
    params: {
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
 
  return response.data;
}

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const KEY = '38122432-d1b8f090b8220c22915483b4c';

// export async function fetchImages(query, page) {
//   const response = await axios.get(`/key=38122432-d1b8f090b8220c22915483b4c&q=${query}&page=${page}`);
//   return response.data;
// }