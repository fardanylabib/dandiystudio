import * as Constants from '../Constants';

export function handleSignIn(email, passw){
    return{
        type: Constants.SIGN_IN,
        email,
        passw
    }
}

export function handleSignOut(){
    return{
        type: Constants.SIGN_OUT,
    }
}

export function authentication(isAuthenticating){
    return{
        type: Constants.AUTHENTICATING,
        isAuthenticating
    }
}