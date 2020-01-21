/**
 * axios配置
 * */
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {Message} from "element-ui";
export interface ResponseData {
    code: number;
    data?: any;
    message: string;
}
// 创建 axios 实例
let service: AxiosInstance | any;
// if(process.env.NODE_ENV === 'dev'){}

service = axios.create({
    baseURL: 'http://localhost:3333/api',
    timeout: 50000
});

// 拦截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error: any) => {
        console.error('error',error);
        Promise.reject(error)
    }
);

service.interceptors.response.use(
    (res: AxiosResponse) => {
        if (res.status === 200) {
            const data: ResponseData = res.data;
            if (data.code) {
                return data.data
            } else {
                Message({
                    message: data.message,
                    type: "error"
                });
                return Promise.reject(new Error(res.data.message || 'error'));
            }
        }
    },
    (error: any) => Promise.reject(error)
);

export default service;