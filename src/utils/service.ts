/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-05-26 16:42:22
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-05-26 17:36:08
 * @Description: 
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const service = axios.create({ // 联调 production
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 1500000,
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
}, err => {
    return Promise.reject(err);
});

service.interceptors.response.use((res: AxiosResponse) => {
    if (res.status !== 200) {
        return res as any;
    } else {
        if (res.data?.code === 200) {
            return res.data;
        }
        return res.data;
    }
}, err => {
    return Promise.reject(err);
});

export default service;