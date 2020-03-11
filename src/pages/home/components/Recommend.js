import React, {Component} from 'react';
import {
  RecommendWrapper, RecommendItem
} from '../styled';
import {connect} from 'react-redux';

class Recommend extends Component{

  render(){
    const {imgurl} = this.props;
    return(
    <RecommendWrapper>
      {imgurl.map((item)=>{
        return(
        <RecommendItem imgUrl={item.get('url')} key={item.get('id')}></RecommendItem>
      )
      })
      }
    </RecommendWrapper>
  )
  }
}

const mapState=(state)=>({
  imgurl : state.get('home').get('RecommendImg')
})


export default connect(mapState,null)(Recommend);
