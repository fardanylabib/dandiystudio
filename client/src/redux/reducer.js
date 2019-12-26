import * as Actions from '../Constants';

const initialState = {
    isAuthenticating:false,
    user: null,
}

function reducer(state = initialState , action){
    switch (action.type) {
        case Actions.AUTHENTICATING:
            return{
                ...state,
                isAuthenticating: action.isAuthenticating
            }
        case Actions.AUTHENTICATED:
            return{
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;