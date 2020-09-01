import { apiPost, apiGet, apiPut, apiDelete } from '../helpers/api';

export const CANVAS_CREATE = 'CANVAS_CREATE';
export const CANVAS_LIST = 'CANVAS_LIST';
export const CANVAS_GET = 'CANVAS_GET';
export const CANVAS_UPDATE = 'CANVAS_UPDATE';
export const CANVAS_TO_REMOVE = 'CANVAS_TO_REMOVE';
export const CANVAS_REMOVE = 'CANVAS_REMOVE';

export const canvaCreate = (data) => {
    const payload = apiPost('/canvas', data);
    return { type: CANVAS_CREATE, payload };
};

export const canvaUpdate = (id, data) => {
    const payload = apiPut(`/canvas/${id}`, { ...data });
    return { type: CANVAS_UPDATE, payload };
};

export const canvaGet = (id) => {
    const payload = apiGet(`/canvas/${id}`);
    return { type: CANVAS_GET, payload };
};

export const canvaList = (data) => {
    const payload = apiGet('/canvas');
    return { type: CANVAS_LIST, payload };
};

export const setCanvaToRemove = (canva) => {
    return { type: CANVAS_TO_REMOVE, payload: canva };
};

export const canvaRemove = (canva) => {
    const payload = apiDelete(`/canvas/${canva.id}`);
    return { type: CANVAS_REMOVE, payload };
};