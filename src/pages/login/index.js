import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {
  LoginWrapper, LoginBox,Input,Button
} from './styled'
import {actionCreators} from './store'

class Login extends Component{
  render(){
    const {logincon}=this.props
    if(!logincon){
      return(
        <LoginWrapper>
           <LoginBox>
            <Input placeholder='account' ref={(input)=>{this.account=input}}/>
            <Input placeholder='password' type='password' ref={(input)=>{this.password=input}}/>
            <Button onClick={() => {this.props.login(this.account,this.password)}}>Login</Button>
           </LoginBox>
        </LoginWrapper>
    )
    }
    else{
      return <Redirect to='/'/>
    }
  }

}

const mapState=(state)=>({
  logincon : state.getIn(['login','login'])
})

const mapDispatch=(dispatch)=>({
  login(accountele,passwordele){
    dispatch(actionCreators.login(accountele.value,passwordele.value))

  }
})

export default connect(null,mapDispatch)(Login);
