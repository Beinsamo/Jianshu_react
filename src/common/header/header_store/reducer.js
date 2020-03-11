import {actionTypes} from './index';
import {fromJS} from 'immutable';


const defaultState=fromJS({
  focused : false,
  mouseIn: false,
  list:[],
  page: 0,
  totalPage:1
})

export default (state=defaultState, action)=> {
  switch(action.type){
    case actionTypes.INPUT_FOCUS :
        return state.set('focused',true);

    case actionTypes.INPUT_BLUR :
        return state.set('focused',false);

    case actionTypes.CHANGE_LIST :
        return state.set('list',action.data).set('totalPage',action.totalPage);

    case actionTypes.MOUSE_ENTER:
        return state.set('mouseIn',true);

    case actionTypes.MOUSE_LEAVE:
        return state.set('mouseIn',false);

    case actionTypes.HANDLE_SWITCH:
        if (action.page===action.totalPage-1){
          const page=0;
          return state.set("page",page);
        }
         else{
           const page=action.page+1;
           return state.set("page",page);
         }

    default :
        return state;

}
}
