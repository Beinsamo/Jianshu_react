import {actionTypes} from './index';
import {fromJS} from 'immutable';
import axios from 'axios';

const changeList=(data)=>({
  type: actionTypes.CHANGE_LIST,
  data : fromJS(data),
  totalPage: Math.ceil(data.length/5)//这里list也是immutable所以要将返回的list变为fromjs
})

export const input_focus= () => ({
  type: actionTypes.INPUT_FOCUS
})

export const input_blur= () => ({
  type: actionTypes.INPUT_BLUR
})

export const get_list= () => {
  return (dispatch)=> {
    axios.get('/api/headerList.json').then((res)=>{
        const data=res.data;
        dispatch(changeList(data.data));
    });
  }
}

export const mouse_enter=()=>({
  type : actionTypes.MOUSE_ENTER
})

export const mouse_leave=()=>({
  type : actionTypes.MOUSE_LEAVE
})

export const handle_switch=(page,totalPage)=>({
  type: actionTypes.HANDLE_SWITCH,
  page: page,
  totalPage: totalPage
})


//thunk使用后便能在action里派发函数
