import * as actionTypes from './actions-types';

export const buildActions = (dispatch) => {
    return{
        increase: () => dispatch({ type: actionTypes.INCREASE }),
    };
};