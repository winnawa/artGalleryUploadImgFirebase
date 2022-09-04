import React, { useRef, useState } from "react"
import { FC } from "react";
import {Button, } from 'react-bootstrap'
import styles from './Upload.module.css'
import axios from "axios";
import nextId from "react-id-generator";
import ObjDisplay from "../type/ObjDisplay";
import Header from "../component/Header/Header";

const Upload: FC<{}> = (props)=>{

    
    const [name, updateName] = useState("");
    const [description, desUpdate] = useState("");
    const [upload,uploadUpdate] = useState(false);
    const [imgURL, imgURLUpdate] = useState("");
    const [infoRequest, updateInfoRequest] = useState(false);


    const ref = useRef<HTMLInputElement>(null)
    let key = nextId(); 
    const reader= new FileReader();

    const sendPost = (obj : ObjDisplay)=>{
        console.log(obj);
        axios.post('https://project1-f50f8-default-rtdb.asia-southeast1.firebasedatabase.app/gallery.json' , 
        obj,{
            headers: {
                'Content-Type' : 'application/json',
                
            }
        }
        ).then((res)=>{
            console.log(res);
            uploadUpdate(false)    ;
            updateName("");
            desUpdate("");
        }
        )
        .catch((err)=>{console.log(err)})
    }

    const submitHandler = (e : React.FormEvent)=>{
        e.preventDefault();
        if (imgURL && description){
            window.prompt("SUBMIT SUCCESS",);
            //props.arDisplay.push(imgURL);
        
            e.persist();
            ref.current!.value = "";
            sendPost({
                url: imgURL,
                key,
                content: description
            });
            //console.log(imgURL);
        }
        else  {
            updateInfoRequest(true);
        }
    }
    
    reader.addEventListener("load",()=>{ imgURLUpdate(reader.result! as string);},false)

    const onChangeHandler= (event: React.ChangeEvent<HTMLInputElement>)=>{
        let file = event.target.files![0];
        imgURLUpdate( URL.createObjectURL(event.target.files![0]));  //?????????why cant ? but ! 
        
        reader.readAsDataURL(file);
        
        event.persist();
        uploadUpdate(true);
        //  event.target.files![0].name
    }


    const nameUpdate = (e: React.FormEvent<HTMLInputElement>)=>{
        updateName(e.currentTarget.value);
        updateInfoRequest(false);
    }

    const descriptionUpdate = (e: React.FormEvent<HTMLInputElement>)=>{
        desUpdate(e.currentTarget.value)
        updateInfoRequest(false);
    }

    return(
        
        <div className = {styles.container}>
            <Header></Header>
            <div style={{display : "flex", flexDirection :"column", alignItems:"center", position:"relative", top:"90px"}}>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Your Name: </label>
                        <input type="text" value={name} onChange={(e)=>{nameUpdate(e)}} onFocus={()=>{updateInfoRequest(false)}}></input> 
                        {infoRequest && <span style={{color : "red", fontWeight:"bold", position:"absolute"}}>Please Fill In The Blank!</span>}
                    </div>
                    <div>
                        <label>Description: </label>
                        <input type="textarea" value={description} onChange={(e)=>{descriptionUpdate(e)}} onFocus={()=>{updateInfoRequest(false)}}></input> 
                        {infoRequest && <span style={{color : "red", fontWeight:"bold", position:"absolute"}}>Please Fill In The Blank!</span>}
                    </div>
                    <div>
                        <label>Upload Image About Project: </label>
                        <input className="form-control" type="file" accept="image/*" id= "myimg" onChange={onChangeHandler} ref={ref} ></input>
                    </div>
           
                    <br></br>

                    <div style={{display : "flex"}}>
                        <Button type="submit" value="SUBMIT" >SUBMIT</Button>
                    
                        {upload && <div style={{marginLeft : "50px", width : '100px', height:"100px" ,backgroundImage:`url(${imgURL})` , backgroundSize:"cover"}}>
                        
                        </div>}
                    </div>

                </form>
            </div>
        </div>
    )

}

export default Upload       