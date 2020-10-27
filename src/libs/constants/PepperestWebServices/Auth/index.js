export default {
    LOGIN : '/EscrowBackend/api/login',
    REGISTER : '/EscrowBackend/api/register',
    SOCIAL : '/EscrowBackend/api/login/social',
    REFRESH_TOKEN : '/EscrowBackend/api/refreshToken',
    LOGOUT :  '/EscrowBackend/api/logout',
}

export const ErrorMessages = {
    invalid_credentials : "The credentials you have provided is invalid",
    default : "We are unable to authenticate you"
}

export const SOCIAL_PROVIDERS = {
    google : {
        client_id : '1085614773661-e36tjkli9oen6laocn1hra8anuedhn0f',
        redirectURL : 'https://pepperest-live.herokuapp.com/login',
        baseURL : 'https://accounts.google.com/o/oauth2/v2/auth',
    },
    facebook : {
        client_id : '2253727468182840',
        // redirectURL : 'http://localhost:3001/login',
        redirectURL : 'https://pepperest-live.herokuapp.com/login',
        baseURL : 'https://www.facebook.com/v7.0/dialog/oauth',
    }
}

export const SOCIAL_STORE_PROVIDERS = {
    facebook : {
        merchant_id : '2253727468182840',
        // redirectURL : 'http://localhost:3001/products/instagram',
        redirectURL : 'https://pepperest-live.herokuapp.com/products/instagram',
        baseURL : 'https://www.facebook.com/v7.0/dialog/oauth',
    }
}





// code=AQAefXKygT-ArvxnDpZa8_hNN9tkQrRHBMg6ErYpjZl_PXvtqOiKYEff6984JsaBsUu29ZDyTOp4Ge-Hupwf38ESgnSDn4M1U15ERQW8vHRayaidrjxYqfStkuim3-MrwYcVMtLJNzFf5hxoZqIozlcsf5HUXiTcoi-n8xc6lYzTRdV8v3yb5MBkn8hsf9IiUTXUvspdAotxOk4Ld5H87yAtMUr8WzOc-WGsIsmi1WHO3-nd0Bo3HZNNR-DsEOrMXSCD8OrZH0cS9q08QBI5Tk0QakHSe5dWSeFQg8_cmFg7FwIVTGwPdTc6Uq98OljPmtCUzRXlX36rlrOM6N5fJKp1&state=%7B"provider"%3A"facebook"%7D#_=_

// 1.	This endpoint fetches a users pages from facebook or instagram using the code sent to the callback url
// {"name":"Product","item":[
// {"name":"https://pepperest.com/EscrowBackend/api/product/social/getInfo
// "request":{"method":"GET",
// "header":[{"key":"Authorization","value":"Bearer token","type":"text"},{"key":"customerID","value":"241","type":"text"}],
// "body":{"mode":"raw","raw":"{\n  \"merchantID\" : 241,\n   \"provider\" : \"instagram\",\n   \"code\" : \"hdhdh63636\"\n}",
// "options":{"raw":{"language":"json"}}},"url":"https://pepperest.com/EscrowBackend/api/product/social/getInfo","description":"This endpoint fetches a users pages from facebook or instagram using the code sent to the callback url."},"response":[]},

// http://localhost:3001/login?code=AQAGaH0WRRqrwgm7PdGIN46WP0ZGzn34hEwlCpk7-HLpzp26ntnxW2Bgfm4Xx6S0HBGYIV_RUl9Ubpf_4bmCzh0m1QNZf6cNMf1Cs-W59ryU8NB6_JbFw-Xb4gxFdda1N6lPc4fEAcl7pU8VxvJWWhVwROcsLuBP775L4Bi51zJ3BiLjv6QekwJSpx9r1EUtaon1Ty3TiQOFv4MtHQ14gnXTEGrIrrTCWfjHA9kZvp5fnaHCQJcyhEgrSGjcB-Anl1f3D98XEpZLheKFC9Aso1zGlEvisVvW2QKmMag7Z4O4JmRfA_3PwyQy6cLVYnnhai0&state=%7B%22provider%22%3A%22facebook%22%7D#_=_
