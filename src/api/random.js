import axios from 'axios';

const BASE_URL = 'https://randomuser.me/api/?results=0';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};