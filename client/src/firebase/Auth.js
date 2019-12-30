import * as Constants from '../Constants';
const firebase = require('./FirebaseConfig');
const auth = firebase.auth();


export async function socialSignIn(type) {
    let provider = null;
    if(type === Constants.SIGN_IN_WITH_GOOGLE){
        provider = new firebase.auth.GoogleAuthProvider();
    }else if(type === Constants.SIGN_IN_WITH_FB){
        provider = new firebase.auth.FacebookAuthProvider();
    }
    return auth.signInWithPopup(provider).then((result)=>{
        console.log('success social login');
        const userData = {
                    token: result.credential.accessToken,
                    user: result.user
                }
        return userData;
    }).catch(function(error) {
        console.log('error social login');
        throw new Error(error);
    });
}

export async function googleSignIn(){
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider).then((result)=>{
        const token = result.credential.accessToken;
        const user = result.user;
        console.log(`${token} | ${user}`);
        return {'token': token, 'user': user}
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(`${errorCode} | ${errorMessage} | ${email} | ${credential}`);
    });
}

export async function fbSignIn(){
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(fbProvider).then((result)=>{
        const token = result.credential.accessToken;
        const user = result.user;
        console.log(`${token} | ${user}`);
        return {'token': token, 'user': user}
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(`${errorCode} | ${errorMessage} | ${email} | ${credential}`);
    });
}