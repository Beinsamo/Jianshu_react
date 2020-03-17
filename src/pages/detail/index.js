import React, {Component} from 'react';
import{
  DetailWrapper,Header,Content
} from './styled'
import {connect} from 'react-redux';
import axios from 'axios';
import {actionCreators} from './store'

class Detail extends Component{
  render(){
    return(
    <DetailWrapper>
      <Header>
        {this.props.title}
      </Header>
      <Content dangerouslySetInnerHTML={{__html:this.props.content}}/>

    </DetailWrapper>
  )
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState=(state)=>({
  title: state.getIn(['detail','title']),
  content: state.getIn(['detail','content'])
})

const mapDispatch=(dispatch)=>({
  getDetail(id){
    axios.get('/api/detail.json').then((res)=>
    {
      const result=res.data.data;
      dispatch(actionCreators.getDetail(result[id]));
    }
  )
  }
})

export default connect(mapState,mapDispatch)(Detail);
