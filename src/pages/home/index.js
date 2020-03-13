import React, {Component} from 'react';
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writter from './components/Writter'
import {connect} from 'react-redux';
import {
  HomeWrapper,HomeRight,HomeLeft,BackTop
} from './styled.js';
import axios from 'axios';
import {getHomeData,toggleTopshow,toggleTopOff} from './store/action_creators';

class Home extends Component{

  handelScrollTop(){
    window.scrollTo(0,0);
  }

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
    {this.props.showScroll ? <BackTop onClick={this.handelScrollTop.bind(this)}>Top</BackTop> : null}
    </HomeWrapper>
  )
  }

  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvent();
    }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollToShow)
  }

  bindEvent(){
    window.addEventListener('scroll',this.props.changeScrollToShow)
  }

}

const mapState=(state)=>({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch=(dispatch)=>({
  changeHomeData(){
     dispatch(getHomeData())
   },
  changeScrollToShow(){
    if(document.documentElement.scrollTop>400){
      dispatch(toggleTopshow());
    }
    else{
      dispatch(toggleTopOff());
    }

  }
  })


export default connect(mapState,mapDispatch)(Home);
