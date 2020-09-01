import { apiPost, apiGet, apiPut, apiDelete } from '../helpers/api';

export const CARROS_CREATE = 'CARROS_CREATE';
export const CARROS_GET = 'CARROS_GET';
export const CARROS_LIST = 'CARROS_LIST';
export const CARROS_UPDATE = 'CARROS_UPDATE';
export const CARROS_TO_REMOVE = 'CARROS_TO_REMOVE';
export const CARROS_REMOVE = 'CARROS_REMOVE';
export const CARROS_CLEAR = 'CARROS_CLEAR';

export const carroCreate = (data) => {
    const payload = apiPost('/carro', { ...data });
    return { type: CARROS_CREATE, payload };
};

export const carroUpdate = (id, data) => {
    const payload = apiPut(`/carro/${id}`, { ...data });
    return { type: CARROS_UPDATE, payload };
};

export const carroGet = (id) => {
    const payload = apiGet(`/carro/${id}`);
    return { type: CARROS_GET, payload };
};

export const carroList = (data) => {
    const payload = apiGet('/carro');
    return { type: CARROS_LIST, payload };
};

export const setCarroToRemove = (carro) => {
    return { type: CARROS_TO_REMOVE, payload: carro };
};

export const carroRemove = (carro) => {
    const payload = apiDelete(`/carro/${carro.id}`);
    return { type: CARROS_REMOVE, payload };
};

export const carroClear = () => {
    return { type: CARROS_CLEAR, payload: {} };
};