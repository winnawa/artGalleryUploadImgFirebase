import React from "react"
import styles from './Header.module.css'
import { auth } from "../../service/firebase"
import { useNavigate } from "react-router-dom"


const Header = ()=>{
    
    let navigate = useNavigate();

    const signOutHandler = ()=>{
        auth.signOut()
        .then(()=>{
            navigate('/login', {replace:true})
        })
        .catch((errors)=>{
            console.log(errors)
        })
    }
   


    const galClickHandler = ()=>{
        navigate('gallery');
    }
    const uploadClickHandler = ()=>{
        navigate('upload');
    }

    return(
        <div className={styles.headerContainer}>
            <div className= {styles.logo}></div>
            <div className = {styles.headerName}>VIRTUAL SHOW ROOM</div>
            <div className={styles.childContainer}>
                <div onClick={galClickHandler}>GALLERY</div>
                <div onClick={uploadClickHandler}>UPLOAD</div>
                <div>HELP</div>
                <div><button onClick={signOutHandler}>SIGN OUT</button></div>
            </div>

        </div>
    )

}

export default Header 