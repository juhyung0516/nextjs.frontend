import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-api-url.com',
  // Add any other default settings like headers, timeouts, etc.
});

export default instance;
