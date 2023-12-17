import axios from 'axios';

const Request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, option = []) => {
    const response = await Request.get(path, option);
    return response.data;
};
export default Request;
