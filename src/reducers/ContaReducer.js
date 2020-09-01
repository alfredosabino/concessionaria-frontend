import { LOGIN, CADASTRO, LOGOUT, INIT_CONTA, REFRESH_TOKEN } from '../actions/ContaActions';
import { setConta, setToken, setRefreshToken, removeConta, removeToken, removeRefreshToken, getConta } from '../helpers/conta';

const intialState = {
    conta: null
};

export default function (state = intialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN:
        case CADASTRO:
            const response = payload ? payload.data : null;
            const conta = response ? response.data : null;
            const metadata = response ? response.metadata : null;

            const token = metadata ? metadata.token : null;
            const refreshToken = metadata ? metadata.refreshToken : null;

            if (conta) setConta(conta);
            if (token) setToken(token);
            if (refreshToken) setRefreshToken(refreshToken)

            return { ...state, conta };
        case LOGOUT: {
            removeConta();
            removeToken();
            removeRefreshToken();
            return { ...state, conta: null };
        }
        case INIT_CONTA: {
            const conta = getConta();
            return { ...state, conta };
        }
        case REFRESH_TOKEN: {
            const response = payload ? payload.data : null;
            const metadata = response ? response.metadata : null;
            const token = metadata ? metadata.token : null;
            if (token) setToken(token);
            return state;
        }
        default:
            return state;
    };
};