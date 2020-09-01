import { CANVAS_CREATE, CANVAS_LIST, CANVAS_GET, CANVAS_UPDATE, CANVAS_TO_REMOVE, CANVAS_REMOVE } from '../actions/CanvaActions';

const initialState = {
    canva: null,
    canvas: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CANVAS_CREATE: {
            const response = payload ? payload.data : null;
            const canva = response ? response.data : null;
            return { ...state, canva };
        }
        case CANVAS_UPDATE: {
            const response = payload ? payload.data : null;
            const canva = response ? response.data : null;
            return { ...state, canva };
        }
        case CANVAS_GET: {
            const response = payload ? payload.data : null;
            const canva = response ? response.data : null;
            return { ...state, canva };
        }
        case CANVAS_LIST: {
            const response = payload ? payload.data : null;
            const canva = response ? response.data : null;
            return { ...state, canva };
        }
        case CANVAS_TO_REMOVE: {
            return { ...state, canvaToRemove: payload };
        }
        case CANVAS_REMOVE: {
            const canvas = state.canvas.filter(canva => canva.id !== state.canvaToRemove.id)
            return { ...state, canvaRemove: null, canvas }
        }
        default: {
            return state;
        }
    };
};