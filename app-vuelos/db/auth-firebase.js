import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,signOut
} from "firebase/auth"

import {collection, doc,setDoc,getFirestore, Timestamp} from "firebase/firestore"
import {app} from "./firebase-config"



// firebase

export const auth = getAuth(app);
export const db =  getFirestore(app)

export function handleCreateAcount(email,password,name){

  createUserWithEmailAndPassword(auth,email,password)
  .then (result=>{
    console.log("Acount create")
    
    updateProfile(result.user,{
      displayName:name
  })
  setDoc(doc(db,"users",result.user.uid )
  ,{
     email: email,
        
  }
  )
      return{
          id:result.user.uid
      }
   
  })
  .catch(error=>{
    console.log(error)
  })
}

export function signInAcount(email,password,setLoginState){
    signInWithEmailAndPassword(auth,email,password)
    .then (result=>{
      console.log("loginnnnnnnnnnnnnnnnn")
      const user = result.user;
      console.log(user.email)
      navigation.navigate("HomePrueba")
    if (user.email){
        setLoginState(true)

    }
    return{
        email_user:user.email
       
    }
   
    })
   
    
    .catch(error=>{
      console.log(error)
    })
  }




export function Logout (){  
    console.log("adiossss gente")
    signOut(auth)}

