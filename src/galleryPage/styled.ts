import styled from "styled-components";

interface ImgProps{
    imgURL : string;

}
interface ButtonProps{
    active : boolean;
}
export const EntirePageContainer = styled.div`
    width :  100%;
    height : 1000px;
    background-image : url("https://www.britishartshow.co.uk/wp-content/uploads/2020/01/wall-art-2852231_960_720.jpg");
    background-size : cover;
    background-repeat : no-repeat;
`

export const PageContainer = styled.div`
    padding-top : 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width :  100%;
    
}
`
export const ImgContainer= styled.div<ImgProps>`
    width : 100%;
    height : 100%;
    background-image : ${(props)=>(`url(${props.imgURL});`)}
    background-size : cover;
    background-repeat : no-repeat;
    border : black solid;
`
export const SingleObjContainer = styled.div`
    position : relative;
    width : 400px;
    height : 400px;
    padding : 20px;
    padding-bottom : 25px;
    margin : 20px;
    background-color :  white;
`
export const RemoveButton = styled.button<ButtonProps>`
    position : absolute;
    top :  0px;
    right : 0px;
    z-index : 10;
    width : 30px;
    height : 30px;
    border-radius : 50%;
    opacity : 0;
    ${ (props)=>( props.active && 
        `opacity : 1;
        background-color : antiqueWhite;`)
    }
`
export const TextContainer = styled.div`
    text-align : justify;
    background-color : white;
    
`