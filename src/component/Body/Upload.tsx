import React, { useRef, useState } from "react"
import { FC } from "react";
import {Button} from 'react-bootstrap'

const Upload: FC<{arDisplay: string[]}> = (props)=>{

    // const [done,doneUpdate] = useState(false);
    const [count,countUpdate] = useState(0);
    const [imgURL, imgURLUpdate] = useState("")
    const ref = useRef<HTMLInputElement>(null)

    const submitHandler = (e : React.FormEvent)=>{
        e.preventDefault();
        countUpdate(count+1);
        console.log(props.arDisplay);
        console.log(count);
        window.prompt("SUBMIT SUCCESS",);
        props.arDisplay.push(imgURL);
        // doneUpdate(true);
        e.persist();
        console.log(props.arDisplay)
        ref.current!.value = "";
        console.log(props.arDisplay)
    }

    const onChangeHandler= (event: React.ChangeEvent<HTMLInputElement>)=>{
        imgURLUpdate( URL.createObjectURL(event.target.files![0]));  //?????????why cant ? but ! 
        event.persist();
        
        //  event.target.files![0].name
    }


    return(
        <form onSubmit={submitHandler}>
            <label>Your Name: </label><input type="text"></input>
            <br></br>
            <label>Description: </label><input type="textarea"></input>
            <br></br>
            <label>Upload Image About Project: </label>
            <input className="form-control" type="file" accept="image/*" id= "myimg" onChange={onChangeHandler} ref={ref} ></input> 
           
            <br></br>
            <input type="submit" value="SUBMIT" ></input>
            {/* <Button>UGLY</Button> */}
        </form>
        
    )

}

export default Upload       