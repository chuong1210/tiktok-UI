import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL;

const Request = axios.create({
    //baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    baseURL: baseUrl,
});

export const get = async (path, option = []) => {
    const response = await Request.get(path, option);
    return response.data;
};
export default Request;
