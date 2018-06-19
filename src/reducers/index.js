import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form:formReducer // Used for Redux Form
});

export default rootReducer;
