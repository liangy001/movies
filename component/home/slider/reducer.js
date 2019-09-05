import {
    CHANGE_SLIDER_LEFT,
    CHANGE_SLIDER_RIGHT,
  } from './actionType';

const defaultState = {
    totPage:3,
    curPage:3
};

export default (state = defaultState, action) => {
    if (action.type === CHANGE_SLIDER_LEFT) {
        if(state.curPage === 1) {
            return state;
        }
        else {
            const newState = JSON.parse(JSON.stringify(state));
            newState.curPage = action.page;
            return newState;
        }
    }
    if (action.type === CHANGE_SLIDER_RIGHT) {
        if(state.curPage === state.totPage) {
            return state;
        }
        else {
            const newState = JSON.parse(JSON.stringify(state));
            newState.curPage = action.page;
            return newState;
       }
    }
    return state;
}