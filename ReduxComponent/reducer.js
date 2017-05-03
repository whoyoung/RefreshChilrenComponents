import * as actionTypes from './actionType';
const initState = {
     animating : false,
}

export default function reducer(state = initState,action) {
    switch (action.type) {
        case actionTypes.yh_reduxComponent_refresh :
            return {
                ...state,
                animating : !state.animating,
            };
        default :
            return state;
    }
}