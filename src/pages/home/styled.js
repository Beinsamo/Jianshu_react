import styled from 'styled-components';

export const HomeWrapper=styled.div`
   overflow: hidden;
   width:960px;
   margin: 0 auto;


`
export const HomeLeft=styled.div`
   margin-left:15px;
   padding-top: 30px;
   width:625px;
   float: left;
   .banner_img{
     width:500px;
     height:270px;
   }
`

export const HomeRight=styled.div`
   width:280px;
   float: right;
`

export const TopicWrapper=styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
`
export const Topicitem=styled.div`
   float : left;
   height : 32px;
   line-height: 32px;
   margin-left: 18px;
   margin-bottom: 18px;
   padding-right:10px;
   background : #f7f7f7;
   font-size : 14px;
   color : #000;
   border : 1px solid #dcdcdc;
   border-radius: 4px;
   .topic-pic {
     float: left;
     margin-right:10px;
     height : 32px;
     width: 32px;
   }
`

export const ListItem=styled.div`
   overflow:hidden;
   padding: 20px 0;
   border-bottom: 1px solid #dcdcdc;
   .pic{
     width:125px;
     height:100px;
     display: block;
     float:right;
     border-radius:10px;
   }
`

export const ListInfo=styled.div`
   width:500px;
   float: right;
   .title{
     line-height : 27px;
     font-size: 18px;
     font-weight: bold;
   }
   .dsc{
     margin-top:10px;
     line-height: 24px;
     font-size:13px;
     color:#999;
   }
`

export const RecommendWrapper=styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem=styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props)=>props.imgUrl});
  background-size:contain;
`
export const WritterWrapper= styled.div`
  width:280px;
  overflow: visible;
`

export const WritterCode=styled.div`
  width : 280px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 60px;
  padding:10px;
  .pic{
    width:60px;
    height:60px;
    float:left;
  }
  .text{
    float: left;
    margin-left:20px;
    line-height:20px;
  }
  .title{
    font-size:15px;
    color:#333;
  }
  .content{
    font-size:13px;
    color:#999;
  }
`

export const RecommendWritter= styled.div`
  font-size:14px;
  color: #969696;
  margin-top:50px;
  margin-bottom: 15px;
  .switch{
    float:right;
  }
`

export const WritterItem=styled.div`
  height: 50px;
  width : 280px;
  margin-top:10px;
  .pic{
    float:left;
    width:48px;
    height:48px;
    border-radius:24px;
  }
  .title{
    display:inline-block;
    font-size:14px;
    padding-top:5px;
    margin-left:10px;
    line-height:25px;
  }
  .subscribe{
    font-size:13px;
    padding-top:10px;
    color:#42c02e;
    float:right;
  }
  .like{
    font-size:right;
    margin-top:2px;
    font-size:12px;
    color:#969696;
    margin-left:58px;
  }



`

export const LoadMore=styled.div`
  width:100%;
  height:40px;
  margin:30px 0;
  line-height:40px;
  background:#a5a5a5;
  text-align: center;
  border-radius:20px;
  color:#fff;
  cursor:pointer;
`

export const BackTop=styled.div`
  position:fixed;
  right:100px ;
  bottom:100px;
  width:60px;
  height:60px;
  line-height:60px;
  text-align:center;
  border: 1px solid #ccc;
  font-size:14px;
`
