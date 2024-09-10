// lib/api.js
import axios from 'axios';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const fetchStrapiData = async (endpoint) => {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/${endpoint}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching data');
  }
};
