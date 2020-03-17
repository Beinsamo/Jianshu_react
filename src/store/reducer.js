import headerReducer from '../common/header/header_store/reducer';
import componentReducer from '../pages/home/store/reducer';
import detailReducer from '../pages/detail/store/reducer';
import {combineReducers} from 'redux-immutable';
import loginReducer from '../pages/login/store/reducer';

const reducer= combineReducers({
  header: headerReducer,
  home : componentReducer,
  detail: detailReducer,
  login: loginReducer
})

export default reducer;
