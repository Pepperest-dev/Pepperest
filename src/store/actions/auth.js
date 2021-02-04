import PepperestAxios from '../../libs/utils/PepperestAxios'
import { Auth, AuthErrorMessages } from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';
import { setStateInLocalStorage, getStateFromLocalStorage, removeStateFromLocalStorage } from '../utility';
import { getUserProfile } from 'store/actions/userAccount';
import { productCheck } from './cart'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userInfo) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userInfo: userInfo
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const registerFail = (errors) => {
    errors = {
        accountType : errors.accountType && errors.accountType.join('<br />'),
        email : errors.email && errors.email.join('<br />'),
        name : errors.name && errors.name.join('<br />'),
        businessName : errors.businessName && errors.businessName.join('<br />'),
        password : errors.password && errors.password.join('<br />'),
    }
    return {
        type: actionTypes.REGISTER_FAIL,
        errors: errors
    };
};

export const logout = () => {
    const token = getStateFromLocalStorage('token');
    const userInfo = JSON.parse(getStateFromLocalStorage('userInfo'))
    removeStateFromLocalStorage('token');
    removeStateFromLocalStorage('expirationDate');
    removeStateFromLocalStorage('tokenType');
    removeStateFromLocalStorage('userInfo');
    if(token && userInfo) {
        const headers = {
            Authorization : token,
            customerID : userInfo.customerID
        };
        const payLoad = {
            token : token.replace("Bearer ", "")
        }
        PepperestAxios.post(Auth.LOGOUT, payLoad, {headers: headers})
    }
    return {
        type: actionTypes.LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(refreshToken());
        }, (expirationTime * 1000)-60000);
    };
};

export const refreshToken = () => {
    return dispatch => {
        let token = getStateFromLocalStorage('token');
        const userInfo = JSON.parse(getStateFromLocalStorage('userInfo'))
        const headers = {
            Authorization : token,
            customerID : userInfo.customerID
        };
        PepperestAxios.post(Auth.REFRESH_TOKEN, {}, {headers: headers})
        .then( response => {
            token = 'Bearer '+response.data.token.access_token;
            const expirationDate = new Date(new Date().getTime() + response.data.token.expires_in * 1000);
            setStateInLocalStorage('token', token)
            setStateInLocalStorage('expirationDate', expirationDate);
            dispatch(authSuccess(token, userInfo));
            dispatch(checkAuthTimeout(response.data.token.expires_in));
        })
        .catch( error => {
            dispatch(logout());
        });
    };
}

export const login = (email, password) => {
    return dispatch => {
        dispatch(autenticate({email, password}, Auth.LOGIN))
    };
};

export const register = (payLoad) => {
    return dispatch => {
        dispatch(autenticate(payLoad, Auth.REGISTER))
    };
}

export const socialLogin = (payLoad) => {
    return dispatch => {
        dispatch(autenticate(payLoad, Auth.SOCIAL))
    };
}

export const autenticate = (payLoad, endpoint) => {
    return dispatch => {
        PepperestAxios.post(endpoint, payLoad)
        .then( response => {
            const token = 'Bearer '+response.data.token.access_token;
            const expirationDate = new Date(new Date().getTime() + response.data.token.expires_in * 1000);
            setStateInLocalStorage('token', token)
            setStateInLocalStorage('expirationDate', expirationDate);
            setStateInLocalStorage('tokenType', response.data.token.token_type);
            setStateInLocalStorage('userInfo', JSON.stringify(response.data.userInfo));
            dispatch(authSuccess(token, response.data.userInfo));
            dispatch(getUserProfile(token, response.data.userInfo));
            dispatch(checkAuthTimeout(response.data.token.expires_in));
            dispatch(productCheck(token, response.data.userInfo))
        })
        .catch( error => {
            let errorMessage = null;
            if(endpoint === Auth.LOGIN || endpoint === Auth.SOCIAL){
                errorMessage = error.response ?
                (AuthErrorMessages[error.response.data.error] || AuthErrorMessages.default) :
                'Unable to connect to the server' //TODO handle this in global PepperestAxios
                dispatch(authFail(errorMessage));
            }else{
                errorMessage = error.response ? error.response.data.message :
                'Unable to connect to the server' //TODO handle this in global PepperestAxios
                dispatch(registerFail(errorMessage));
            }
        } );
    };
}

export const authCheckState = () => {
    return dispatch => {
        const token = getStateFromLocalStorage('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(getStateFromLocalStorage('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userInfo = JSON.parse(getStateFromLocalStorage('userInfo'));
                dispatch(authSuccess(token, userInfo));
                dispatch(getUserProfile(token, userInfo));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    };
};
