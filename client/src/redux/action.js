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
    console.log('authenticating')
    return{
        type: Constants.AUTHENTICATING,
        isAuthenticating
    }
}

export function authenticated(token, user){  
    console.log('authenticated')
    return{
        type: Constants.AUTHENTICATED,
        token, user
    }
}