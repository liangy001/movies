import { combineReducers } from 'redux';
import sliderReducer from '../component/home/slider/reducer';

export default combineReducers({
    slider: sliderReducer
})