import headerReducer from '../common/header/header_store/reducer';
import componentReducer from '../pages/home/store/reducer';
import {combineReducers} from 'redux-immutable';


const reducer= combineReducers({
  header: headerReducer,
  home : componentReducer
})

export default reducer;
