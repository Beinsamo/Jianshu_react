import {fromJS} from 'immutable'

const defaultState=fromJS({
  topicList:[],
  contentList:[],
  RecommendImg:[],
  WritterList:[
  ],
  WritterPage:0,
  TotalPage:1,
  ready:false
})

export default (state=defaultState, action)=>{
  switch(action.type){

    case 'change_home_data':
     return state.merge({
        topicList:fromJS(action.topicList),
        contentList:fromJS(action.contentList),
        RecommendImg:fromJS(action.RecommendImg),
        WritterList: fromJS(action.WritterList),
        TotalPage: fromJS(action.totalPage),
        ready: fromJS(true)
      })

    case 'list_switch':
      if (action.page===action.totalPage-1){
        const page=0;
        return state.set("WritterPage",page);
      }
       else{
         const page=action.page+1;
         return state.set("WritterPage",page);
     }


    default :
      return state;
  }
}
