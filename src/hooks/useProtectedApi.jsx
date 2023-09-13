import { useEffect } from "react";
import http from "../config/http";

const useProtectedApi = () => {

    useEffect(() => {

        const reqInterceptor = http.interceptors.request.use(
            config => {
                config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
                return config;
            },
            error => {
                return Promise.reject(error)
            }
        )

        const resInterceptor = http.interceptors.response.use(
            res => {
                return Promise.resolve(res);
            },
            error => {
                return Promise.reject(error)
            }
        )

        return () => {
            http.interceptors.request.eject(reqInterceptor)
            http.interceptors.response.eject(resInterceptor)
        }
    }, [])

    return http;
}

export default useProtectedApi

