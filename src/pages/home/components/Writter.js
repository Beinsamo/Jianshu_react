import React, {Component} from 'react';
import {
  WritterWrapper, WritterCode, RecommendWritter,WritterItem
} from '../styled';
import {connect} from 'react-redux';
import {listSwitch} from '../store/action_creators'

class Writter extends Component{
  render(){
    const {ready}=this.props;
    return(
    <WritterWrapper>
      <WritterCode>
        <img className='pic' src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Download index side qrcode" />
        <h4 className='text title'>download jianshu app</h4>
        <p className='text content'>Expiore everywhere</p>
      </WritterCode>
      <RecommendWritter>
        <span>Recommend Writter</span>
        <div className='switch' onClick={()=>this.props.listSwitch(this.props.writterpage,this.props.totalpage)}>
        <i className='iconfont spin'>&#xe851;</i>Switch
        </div>
        {ready === true ? this.writterList(): null}
      </RecommendWritter>

    </WritterWrapper>
  )
  }

  writterList(){
    const {writterlist,writterpage,totalpage}=this.props;
    const newList=writterlist.toJS();
    const writteritem=[];
    for(let i=writterpage*4; i<(writterpage+1)*4;i++){
      writteritem.push(
        <WritterItem>
         <img className='pic' src={newList[i].imgUrl}/>
         <div>
         <h4 className='title'>{newList[i].name}</h4>
         <span className='subscribe'>关注</span>
         </div>
         <p className='like'>写了{newList[i].letterNumber}字，{newList[i].like}喜欢</p>
        </WritterItem>
      )
  }
  return writteritem;
}
}

const mapState=(state)=>{
   return{
    writterlist : state.get('home').get('WritterList'),
    writterpage : state.get('home').get('WritterPage'),
    totalpage : state.get('home').get('TotalPage'),
    ready: state.get('home').get('ready')
  }
}

const mapDispatch=(dispatch)=>{
  return{
  listSwitch(page,totalpage){
     dispatch(listSwitch(page,totalpage))
  }
}}


export default connect(mapState,mapDispatch)(Writter);
