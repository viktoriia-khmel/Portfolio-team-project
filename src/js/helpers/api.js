import axios from 'axios';

export const axiosInst = axios.create({
  baseURL: 'https://portfolio-js.b.goit.study/api/',
});