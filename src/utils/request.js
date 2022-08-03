import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, params = {}) => {
    const res = await instance.get(path, params);

    return res.data;
};
export default instance;
