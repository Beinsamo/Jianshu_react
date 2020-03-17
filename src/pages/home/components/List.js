import React, {PureComponent} from 'react';
import {
    ListItem, ListInfo, LoadMore
} from '../styled';
import {connect} from 'react-redux';
import {getMoreList} from '../store/action_creators'
import {Link} from 'react-router-dom'

class List extends PureComponent{
  render(){
    const {list, getMoreList,page}=this.props;
    return(
    <div>
    {list.map((item)=>{
      return(
        <Link key={item.get('id')} to={'/detail/'+item.get('id')}>
        <ListItem >
          <img className='pic' src={item.get('imgUrl')} alt=''/>
          <ListInfo>
            <h3 className='title'>{item.get('title')}</h3>
            <p className='dsc'>{item.get('shortCon')}</p>
          </ListInfo>
        </ListItem>
        </Link>
      )
    })
  }
    <LoadMore onClick={()=>getMoreList(page)}>More</LoadMore>
    </div>
  )
  }
}

const mapState=(state)=>{
  return{
    list : state.get('home').get('contentList'),
    page: state.getIn(['home','contentPage'])
  }
}

const mapDispatch=(dispatch)=>({
  getMoreList(page){
    dispatch(getMoreList(page))
  }
})

export default connect(mapState,mapDispatch)(List);
