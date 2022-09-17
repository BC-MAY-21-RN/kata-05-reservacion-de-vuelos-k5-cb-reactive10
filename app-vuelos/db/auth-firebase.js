import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile
} from "firebase/auth"

import {collection, doc,setDoc,getFirestore, Timestamp} from "firebase/firestore"
import {app} from "./firebase-config"



// firebase

const auth = getAuth(app);
const db =  getFirestore(app)

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



