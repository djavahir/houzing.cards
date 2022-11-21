import styled from "styled-components";


const Container = styled.div`
 display:flex;
 flex-direction:column;
 max-width:380px;
 width:100%;
 position:relative;
 border: 1px solid #E6E9EC;
`;
const Wraper = styled.div`
position:relative;
`;
const Button = styled.div`
position: absolute;
:active{
    transform:scale(0.9)
} 
background: ${({ right }) => right ? '#0D263B' : '#0061DF'};
border-radius: 3px;
display:flex;
align-items:center; 
justify-content:center;
max-width: 71px;
width:100%;
height:100%;
max-height: 23px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 13px;
color: #FFFFFF;
margin-top:20px;
left: ${({ right }) => !right && "20px"};
right: ${({ right }) => right && "20px"};
`;
const Img = styled.img`
width:100%;
max-width:381px;
max-height:220px;
`;
const User = styled.img`
width:38px;
height:38px;
border-radius:50%;
border:3px solid white;
position: absolute; 
right:22px;
top:-19px
`;
const Title = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: ${({ desc }) => desc ? "400px" : "600"};
font-size: ${({ desc }) => desc ? "14" : "16"};
font-height: ${({ desc }) => desc ? "20px" : "24px"};
color: ${({ desc }) => desc ? "#696969" : "#0D263B"};
margin-top: ${({ desc }) => !desc && "20px"};
margin-bottom: ${({ desc }) => desc && "16px"};
margin-left:20px;
`;
const Content = styled.div`
margin:${({ wrap }) => !wrap && "0 20px"};
display:flex;
margin-bottom:16px;
flex-direction: ${({ wrap }) => wrap ? "row" : "column"};
justify-content: ${({ wrap }) => wrap ? "space-between" : "center"};
align-items: ${({ wrap }) => !wrap && "center"};
border-bottom: ${({ wrap }) => wrap && "1px solid #E6E9EC"};
`;
Content.Title = styled(Title)`
margin:0;
`
const Icon = styled.img`
max-width:17px;
width:100%;
max-height:17px;
height:100%;
`;
const Strelka = styled.img`
max-width:17px;
width:100%;
max-height:17px;
height:100%;
:active{
    transform:scale(0.9)
}
`;


const Price = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`;

Price.Container = styled.div`
display:flex;
flex-direction: ${({ wrap }) => wrap ? "row" : "column"};
`;
Price.Title = styled(Title)`
margin:0;
`;
const Heart = styled.img`
margin-left:20px;
:active{
    transform:scale(0.9)
}
`;

export { Container, Strelka, Heart, Price, Button, Icon, Img, User, Title, Content, Wraper };