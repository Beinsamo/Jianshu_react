import React, {Component} from 'react';
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writter from './components/Writter'
import {connect} from 'react-redux';
import {
  HomeWrapper,HomeRight,HomeLeft
} from './styled.js';
import axios from 'axios';

class Home extends Component{
  render(){
    return(
    <HomeWrapper>
      <HomeLeft>
      <img className='banner_img' src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
      <Topic />
      <List />
      </HomeLeft>
    <HomeRight>
      <Recommend />
      <Writter />
    </HomeRight>
    </HomeWrapper>
  )
  }

  componentDidMount(){
    axios.get('/api/home.json').then((res)=>{
      const result=res.data.data;
      const action={
        type: 'change_home_data',
        topicList : result.topicList,
        contentList : result.contentList,
        RecommendImg : result.RecommendImg,
        WritterList: result.WritterList,
        totalPage: 2
      }
     this.props.changeHomeData(action)
    })

  }
}

const mapDispatch=(dispatch)=>({
  changeHomeData(action){
    dispatch(action)
  }
})


export default connect(null,mapDispatch)(Home);
