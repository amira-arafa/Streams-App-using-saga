import {reducer as formReducer} from 'redux-form';
import streamReducer from './streamReducer';
import {combineReducers} from 'redux'
export default combineReducers({
    anyThing : () => { return null } ,
    form:formReducer,
    streams:streamReducer
})