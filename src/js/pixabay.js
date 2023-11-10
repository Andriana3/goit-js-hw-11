import axios from 'axios';

const API_KEY = '40583789-cace4102586dd30c2e47506c9';
const BASE_URL = 'https://pixabay.com/api/';

const params = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    
});

export async function fetchPixabay(search, page, perPage) {
  return await axios.get(
    `${BASE_URL}?q=${search}&page=${page}&per_page=${perPage}`,
    { params }
  );
}