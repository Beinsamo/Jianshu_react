import {fromJS} from 'immutable'

const defaultState=fromJS({
  topicList:[],
  contentList:[],
  RecommendImg:[]
})

export default (state=defaultState, action)=>{
  switch(action.type){

    case 'change_home_data':
     return state.merge({
        topicList:fromJS(action.topicList),
        contentList:fromJS(action.contentList),
        RecommendImg:fromJS(action.RecommendImg)
      })


    default :
      return state;
  }
}
