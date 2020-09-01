import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';

import carroReducer from './reducers/CarroReducer';
import contaReducer from './reducers/ContaReducer';

const reducers = combineReducers({
    conta: contaReducer,
    carro: carroReducer
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;