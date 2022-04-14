import firebase from "firebase/compat/app"
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAjHJj3odW1PbZiL_pMr22kYTVJVRYCkbo",
    authDomain: "project1-f50f8.firebaseapp.com",
    projectId: "project1-f50f8",
    storageBucket: "project1-f50f8.appspot.com",
    messagingSenderId: "533170968499",
    appId: "1:533170968499:web:402bb0cdf3a47d82c35dc6"
  };
  
  firebase.initializeApp(firebaseConfig)

  export const auth= firebase.auth();

  // const provider = new firebase.auth.GoogleAuthProvider();
  // provider.setCustomParameters({prompt: 'select_account'});

  
  
  // export const signInWithGoogle = () => {
   
  //   auth.signInWithPopup(provider)
  //   .then((results)=>{
  //     console.log(results.user?.email)
  //     return <Navigate to="/inside" replace={true}/>
  //      }
  //   )
  //   .catch((error)=>{console.log(error.code);}
  
  // );
  // }
  export default firebase;