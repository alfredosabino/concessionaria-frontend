import { CARROS_CREATE, CARROS_UPDATE, CARROS_GET, CARROS_LIST, CARROS_TO_REMOVE, CARROS_REMOVE, CARROS_CLEAR } from '../actions/CarroActions';

const initialState = {
    carro: null,
    carros: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CARROS_CREATE: {
            const response = payload ? payload.data : null;
            const carro = response ? response.data : null;
            return { ...state, carro };
        }
        case CARROS_UPDATE: {
            const response = payload ? payload.data : null;
            const carro = response ? response.data : null;
            return { ...state, carro };
        }
        case CARROS_GET: {
            const response = payload ? payload.data : null;
            const carro = response ? response.data : null;
            return { ...state, carro };
        }
        case CARROS_LIST: {
            const response = payload ? payload.data : null;
            const carros = response ? response.data : null;
            return { ...state, carros };
        }
        case CARROS_TO_REMOVE: {
            return { ...state, carroToRemove: payload };
        }
        case CARROS_REMOVE: {
            const carros = state.carros.filter(carro => carro.id !== state.carroToRemove.id)
            return { ...state, carroRemove: null, carros };
        }
        case CARROS_CLEAR: {
            return { ...state, carro: null }
        }
        default: {
            return state;
        }
    }
};