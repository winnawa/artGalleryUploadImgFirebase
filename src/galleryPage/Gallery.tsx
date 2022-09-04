import React, { FC, useEffect, useState, useMemo } from "react";
import ObjDisplay from "../type/ObjDisplay";
import axios from "axios"
import { EntirePageContainer, ImgContainer, PageContainer, RemoveButton, SingleObjContainer, TextContainer } from "./styled";
import Header from "../component/Header/Header";

let arDisplay:ObjDisplay[] = [];

const Gallery:FC<{}> = ()=>{
    const [display, updateDisplay] = useState(false);
    const [currentOnFocus, updateCurrentOnFocus] = useState("");
    const [dataChange, updateDataChange] = useState(false);
    const getData= async()=>{
        let respond= await axios.get(
            'https://project1-f50f8-default-rtdb.asia-southeast1.firebasedatabase.app/gallery.json',
        )
        //console.log(respond.data);
        let temp = respond.data;
        arDisplay = Object.keys(temp).map((element) =>{ return {id : element,url: temp[element].url, key: temp[element].id, content: temp[element].content}  });
        //console.log(arDisplay)
        updateDisplay(true);
    }
    useEffect(()=>{getData();updateDataChange(false);},[dataChange]);

    const removeAnImage = async (element : ObjDisplay)=>{
        //arDisplay = arDisplay.filter((element)=>{if (element.url !== imgURL) return element})
        updateDisplay(false);
        await axios.delete(
            `https://project1-f50f8-default-rtdb.asia-southeast1.firebasedatabase.app/gallery/${element.id}.json`,
            element,
        ).then(()=>{
            //console.log("deleted");
            updateDataChange(true);
        })
        
            
    }

    // let displayArray = useMemo(  ()=>(arDisplay.map( (element,index)=>{
    //                                 return (
    //                                     <SingleObjContainer key={index} onMouseEnter={()=>{updateCurrentOnFocus(element.url)}} onMouseLeave={()=>{updateCurrentOnFocus("")}} >
    //                                     <RemoveButton active={(currentOnFocus === element.url)} onClick={()=>{console.log("click");removeAnImage(element)}}>X</RemoveButton>
    //                                     <ImgContainer imgURL={element.url}></ImgContainer>
    //                                     <TextContainer>{element.content}</TextContainer>
    //                                     </SingleObjContainer>
    //                                 )
    //                             }) ),[arDisplay,currentOnFocus])
    

    let displayArray = arDisplay.map( (element,index)=>{
        return (
            <SingleObjContainer key={index} onMouseEnter={()=>{updateCurrentOnFocus(element.url)}} onMouseLeave={()=>{updateCurrentOnFocus("")}} >
            <RemoveButton active={(currentOnFocus === element.url)} onClick={()=>{removeAnImage(element)}}>X</RemoveButton>
            <ImgContainer imgURL={element.url}></ImgContainer>
            <TextContainer>{element.content}</TextContainer>
            </SingleObjContainer>
        )})


    return (
        <React.Fragment>
            <EntirePageContainer>
        <Header></Header>
        <PageContainer>
            {!display && displayArray.length >0 &&"Loading..."}
            {!display && displayArray.length === 0 &&"No Img Added"} 
            {display  && displayArray}
        </PageContainer>
        </EntirePageContainer>
        </React.Fragment>
    );
}

export default Gallery;