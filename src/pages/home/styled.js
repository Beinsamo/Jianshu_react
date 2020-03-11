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
  width:278px;
  border:1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height:300px;
  text-align:center;
`
