import React, {PureComponent} from 'react';
import {
  TopicWrapper, Topicitem
} from '../styled';
import {connect} from 'react-redux';


class Topic extends PureComponent{
  render(){
    const {list}=this.props;

    return(
    <TopicWrapper>
      {
        list.map((item)=>{
          return(
            <Topicitem key={item.get('id')}>
               <img className='topic-pic' src={item.get('imgUrl')} />
               {item.get('title')}
            </Topicitem>
          )
        })
      }

    </TopicWrapper>
  )
  }
}

const mapState=(state)=>({
    list : state.get('home').get('topicList')
})



export default connect(mapState, null)(Topic);
