import axios from 'axios';

export const get = (url: string, config?: any) => axios.get(url, config);