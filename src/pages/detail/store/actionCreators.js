import {actionTypes} from './index';

export const getDetail=(list)=>({
  type: actionTypes.GET_DETAIL,
  title: list.title,
  content: list.content
})
