import {
  CHANGE_HOME_DATA, LIST_SWITCH,ADD_CONTENT_LIST,TOGGLE_SHOW,TOGGLE_OFF
} from './action_types';
import axios from 'axios';
import {fromJS} from 'immutable'

export const changeHomeData = (result)=>({
  type: CHANGE_HOME_DATA,
  topicList : result.topicList,
  contentList : result.contentList,
  RecommendImg : result.RecommendImg,
  WritterList: result.WritterList,
  totalPage: 2
})

export const listSwitch=(page,totalpage)=>({
  type:LIST_SWITCH,
  page:page,
  totalPage: totalpage
})

export const addContentList=(list,nextpage)=>({
  type: ADD_CONTENT_LIST,
  list : fromJS(list),
  nextpage: nextpage
})

export const toggleTopshow=()=>({
  type: TOGGLE_SHOW,
  scroll: true
})

export const toggleTopOff=()=>({
  type: TOGGLE_OFF,
  scroll: false
})

export const getHomeData = ()=>{
  return (dispatch)=>{
    axios.get('/api/home.json').then((res)=>{
    const result=res.data.data;
    dispatch(changeHomeData(result))
  })
}
}

export const getMoreList=(page)=>{
  return (dispatch)=>{
    axios.get('/api/homeList.json').then((res)=>{
    const result=res.data.data;
    dispatch(addContentList(result,page+1));
  })
}
}
