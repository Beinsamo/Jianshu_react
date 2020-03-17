import React, {PureComponent} from 'react';
import {
  RecommendWrapper, RecommendItem
} from '../styled';
import {connect} from 'react-redux';

class Recommend extends PureComponent{

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
