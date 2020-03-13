import {fromJS} from 'immutable'

const defaultState=fromJS({
  topicList:[],
  contentList:[],
  contentPage:0,
  RecommendImg:[],
  WritterList:[],
  WritterPage:0,
  TotalPage:1,
  ready:false,
  showScroll:false
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

    case 'add_content_list':
      return state.merge({
         contentList : state.get('contentList').concat(action.list),
         contentPage: action.nextpage
      })

    case 'toggle_show':
      return state.set('showScroll',true)
    case 'toggle_off':
      return state.set('showScroll',false)


    default :
      return state;
  }
}
