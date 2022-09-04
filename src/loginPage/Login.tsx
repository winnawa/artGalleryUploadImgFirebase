import React, { useState } from "react"
import Logo from "../component/logInComponents/Logo"
import styles from "./Login.module.css"


//import { auth } from "../service/firebase"
//import firebase from "firebase/compat/app"
import 'firebase/compat/auth'


import { useNavigate } from "react-router-dom"
const Login = ()=>{
    
    // const [userAcc,updateUserAcc]= useState("")
    // const [userPass,updateUserPass]= useState("")
    const navigate = useNavigate();  


    const onClickHandler = async (props: React.FormEvent)=>{
        props.preventDefault();
    
    
    }

    // const onChangeAccHandler=(props: React.ChangeEvent<HTMLInputElement>)=>{
    //     let curVal= props.target.value;
    //     updateUserAcc(curVal);
    // }

    // const onChangePassHandler=(props: React.ChangeEvent<HTMLInputElement>)=>{
    //     let curVal= props.target.value;
    //     updateUserPass(curVal);
    // }

    // const provider = new firebase.auth.GoogleAuthProvider();
    // provider.setCustomParameters({prompt: 'select_account'});
    // const signInWithGoogle = () => {
        // auth.signInWithPopup(provider)
        // .then((results)=>{
        //     console.log(results.user?.email)
            // navigate('/inside', {replace:true})
        // })
        // .catch((error)=>{console.log(error.code);}
        // );
    // }


    return (
        <React.Fragment>
            <div className={styles.container} onSubmit={onClickHandler}>
                <Logo></Logo>
               
                <button onClick={()=>{navigate('/inside',{replace:true})}}>LET EXPLORE </button>
            </div>
            
        </React.Fragment>
    )

}
export default Login