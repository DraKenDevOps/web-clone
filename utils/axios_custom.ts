import axios, { AxiosResponse, AxiosError } from 'axios';
import { localKeys } from './local_keys';

const config = useRuntimeConfig();

const service = axios.create({
    baseURL: config.public.BASE_API_URL,
});

service.interceptors.request.use(config => {
    const token = localStorage.getItem(localKeys.TOKEN);
    config.headers[localKeys.HEADER] = `Bearer ${token}`;
    return config;
});

service.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => Promise.reject(error)
);

export default service;
