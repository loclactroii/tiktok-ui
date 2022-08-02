import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, params = {}) => {
    const res = await instance.get(path, params);

    return res.data;
};
export default instance;
