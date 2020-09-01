import { apiPost, apiRefreshToken } from '../helpers/api';

export const LOGIN = 'LOGIN';
export const CADASTRO = 'CADASTRO';
export const LOGOUT = 'LOGOUT';
export const INIT_CONTA = 'INIT_CONTA';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const login = (data) => {
    const payload = apiPost('/auth/login', data);
    return { type: LOGIN, payload };
};

export const cadastro = (data) => {
    const payload = apiPost('/auth/cadastro', data);
    return { type: CADASTRO, payload };
};

export const logout = () => {
    return { type: LOGOUT, payload: {} };
};

export const initConta = () => {
    return { type: INIT_CONTA, payload: {} };
};

export const getFreshToken = () => {
    const payload = apiRefreshToken();
    return { type: REFRESH_TOKEN, payload };
};