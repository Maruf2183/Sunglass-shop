import { useEffect, useState } from 'react';

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword , onAuthStateChanged,updateProfile ,signOut } from "firebase/auth";
import initializeFirebase from '../Firebase/Firebase.init';


initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error,setError]=useState('')

       
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
     
    const googleDirectsignin = (history) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                setLoading(false)
            })
            .catch(error => setError(error.message))
            .finally(result => {
                setLoading(false)
            }
            )
    };


    const signInWithEmail = (email, pass,name,history,redirect_uri) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                setUser(result.user);
                updateProfile(auth.currentUser,{
                    displayName:name
                })
                history.push(redirect_uri)

                    
            }).catch(error => {
                setError(error.message);
            })
            .finally(setLoading(false))
    };
    const emailLogin = (email, pass,history,redirect_uri) => {
        setLoading(true)
        signInWithEmailAndPassword(auth,email, pass)
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri)
                console.log(result.user);
            }).catch(error => {
                setError(error.message)
            })
            .finally(setLoading(false));
    }
    // OVSERVING USER LOGING STATE
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false)
            return () => unsubcribe;
        })
    },[]);
    const logOUt = () => {
        signOut(auth).then(() => {
            alert(`You kicked out seccessfully`)
        }).catch(error => {
            alert(`you didn't log out right now`)
        });
      
  }
            
        
  return ({
      user,
      loading,
      error,
      googleDirectsignin,
      signInWithEmail,
      emailLogin,
      logOUt
  })
}
export default useFirebase;
      



    


























