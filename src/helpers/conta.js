import { setCookie, getCookie, removeCookie } from './storage';

const expires = new Date();
expires.setFullYear(expires.getFullYear() + 1);

const options = { expires };

export const COOKIE_CONTA = 'acc';
export const COOKIE_TOKEN = 'tk';
export const COOKIE_REFRESH_TOKEN = 'rtk';

export const setConta = (conta) => setCookie(COOKIE_CONTA, conta, options);
export const getConta = () => getCookie(COOKIE_TOKEN);
export const removeConta = () => removeCookie(COOKIE_TOKEN);

export const setToken = (token) => setCookie(COOKIE_TOKEN, token, options);
export const getToken = () => getCookie(COOKIE_TOKEN);
export const removeToken = () => removeCookie(COOKIE_TOKEN);

export const setRefreshToken = (refreshToken) => setCookie(COOKIE_REFRESH_TOKEN, refreshToken, options);
export const getRefreshToken = () => getCookie(COOKIE_REFRESH_TOKEN);
export const removeRefreshToken = () => removeCookie(COOKIE_REFRESH_TOKEN);