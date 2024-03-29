import axios from 'axios';
import { getToken, getRefreshToken } from './conta';

export const getApiUrl = (path) => {
    return `http://localhost:3001${path}`;
};

export const getHeaders = () => {
    const token = getToken();
    if (!token) return {};
    return {
        Authorization: `Bearer ${token}`
    };
};

export const apiRefreshToken = () => {
    const url = getApiUrl('/auth/refresh');
    const refreshToken = getRefreshToken();
    const options = {
        headers: {
            Authorization: `Bearer ${refreshToken}`,
        },
    };
    return axios.post(url, {}, options);
};

export const apiPost = (path, data = {}) => {
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders(),
    };
    return axios.post(url, data, options);
};

export const apiPut = (path, data = {}) => {
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders()
    };
    return axios.put(url, data, options);
};

export const apiDelete = (path) => {
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders()
    };
    return axios.delete(url, options);
};

export const apiGet = (path) => {
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders()
    };
    return axios.get(url, options);
};