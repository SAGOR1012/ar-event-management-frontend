//

import axios from 'axios';

const UseAxiosPublic = () => {
  const axiosPublic = axios.create({
    // baseURL: import.meta.env.VITE_API_BASEURL,
    baseURL: 'http://localhost:5000',
  });
  return axiosPublic;
};

export default UseAxiosPublic;
