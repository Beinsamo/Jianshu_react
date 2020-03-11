import React, {Component} from 'react';
import {
    ListItem, ListInfo
} from '../styled';
import {connect} from 'react-redux';

class List extends Component{
  render(){
    const {list}=this.props;
    return(
    <div>
    {list.map((item)=>{
      return(
        <ListItem key={list.get('id')}>
          <img className='pic' src={item.get('imgUrl')} alt=''/>
          <ListInfo>
            <h3 className='title'>{item.get('title')}</h3>
            <p className='dsc'>{item.get('shortCon')}</p>
          </ListInfo>
        </ListItem>
      )
    })
  }
    </div>
  )
  }
}

const mapState=(state)=>{
  return{
    list : state.get('home').get('contentList')
  }
}

export default connect(mapState,null)(List);
