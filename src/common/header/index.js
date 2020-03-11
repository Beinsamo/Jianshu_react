import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {
  HeaderWrapper,Logo,Nav,NavItem,Pic,SearchWrapper,Navsearch,Addition,
  Button, SearchInfo, SearchInfoTitle,SearchInfoSwitch,SearchInfoItem
} from './style';
import Piclogo from './logo.png';
import {connect} from 'react-redux';
import {actionCreators} from './header_store'

class Header extends Component{
  render(){
    const{focused, handelInputFocus, handelInputBlur,list}=this.props;
  return(
      <HeaderWrapper>
       <Logo href='/'><Pic src={Piclogo} /></Logo>
       <Nav>
         <NavItem className='left active'>Homepage</NavItem>
         <NavItem className='left'>App download</NavItem>
         <NavItem className='right login'>login</NavItem>
         <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
         <SearchWrapper>
           <CSSTransition
            in={focused}
            timeout={200}
            classNames='slide'
           >
           <Navsearch
             onFocus={()=>handelInputFocus(list)}
             onBlur={handelInputBlur}
             className={focused ? 'focused' : ''}>
           </Navsearch>
            </CSSTransition>
         <i className={focused ? 'focused iconfont zoom' : "iconfont zoom"}>&#xe63c;</i>
         {this.returnSearchInfo()}
         </SearchWrapper>
       </Nav>
       <Addition>
          <Button className='writting'><i className='iconfont'>&#xe63d;</i> writing</Button>
          <Button className='reg'>register</Button>
       </Addition>
      </HeaderWrapper>
)}

returnSearchInfo(){
  const {focused,list, page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave, handleSwitch}=this.props;
  const newList=list.toJS();
  const pageList=[];
  for (var i = page*5; i < (page+1)*5; i++) {
    pageList.push(
    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
  )}
  if(focused || mouseIn){
    return(
      <SearchInfo
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>
        Hot Topics
           <SearchInfoSwitch onClick={ () => handleSwitch(page,totalPage,this.spinIcon)}>
           <i ref={(icon)=>(this.spinIcon=icon)} className='iconfont spin'>&#xe851;</i>Switch
           </SearchInfoSwitch>
        </SearchInfoTitle>
        <div>
          {pageList}
        </div>
      </SearchInfo>
    )
  }
  else{
    return null;
  }
}

}



const mapStateToProps=(state)=>{
  return{
  list: state.get('header').get('list'),
  focused : state.get('header').get('focused'),//=state.getIn(['header','focused'])
  page: state.getIn(['header','page']),
  totalPage: state.getIn(['header','totalPage']),
  mouseIn: state.getIn(['header','mouseIn'])
 }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    handelInputFocus(list){
      dispatch(actionCreators.input_focus());
      if (list.size===0){
         dispatch(actionCreators.get_list())};
    },
    handelInputBlur(){
      dispatch(actionCreators.input_blur());
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouse_enter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouse_leave());
    },
    handleSwitch(page,totalPage,spin){
      let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngle){
        originAngle=parseInt(originAngle,10);
      }
      else {
        originAngle=0;
      }
      spin.style.transform='rotate('+(originAngle+360)+'deg)';
      dispatch(actionCreators.handle_switch(page,totalPage));
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);
