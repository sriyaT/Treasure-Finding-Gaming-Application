import {createStore, combineReducers} from 'redux';
import playerReducer from '../Player/reducer';
import mapReducer from '../map/reducer';

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer
})

const store= createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;