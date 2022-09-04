import React from "react"
import styles from './Header.module.css'
import { auth } from "../../service/firebase"
import { useNavigate } from "react-router-dom"
import {Button} from 'react-bootstrap'


const Header = ()=>{
    
    let navigate = useNavigate();

    const signOutHandler = ()=>{
        auth.signOut()
        .then(()=>{
            navigate('/login', {replace:true})
        })
        .catch((errors : any)=>{
            console.log(errors)
        })
    }
   


    const galClickHandler = ()=>{
        navigate('/inside/gallery',{replace:true});
    }
    const uploadClickHandler = ()=>{
        navigate('/inside/upload',{replace:true});
    }

    return(
        <div className={styles.headerContainer}>
            <div className= {styles.logo}></div>
            <div className = {styles.headerName} >
                <div className={styles.headerText} onClick={()=>{navigate('/inside',{replace:true});}}>    VIRTUAL SHOW ROOM </div>
            </div>
            <div className={styles.childContainer}>
                <div onClick={galClickHandler}>GALLERY</div>
                <div onClick={uploadClickHandler}>UPLOAD</div>
                <div><a style={{textDecoration:"none", color:"white"}} href="#help">HELP</a></div>
                <div className={styles.last}><Button variant="danger" className={styles.button} onClick={signOutHandler}>SIGN OUT</Button></div>
            </div>

        </div>
    )

}

export default Header 