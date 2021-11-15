import { useEffect, useState } from 'react';

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import initializeFirebase from '../Firebase/Firebase.init';
import axios from 'axios';


initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false);
    console.log(admin);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleDirectsignin = (history, redirect_uri) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                setLoading(false)
                history.push(redirect_uri)
                addingUsertodatabase(result.user.displayName, result.user.email)
            })
            .catch(error => setError(error.message))
            .finally(result => {
                setLoading(false)
            }
            )
    };


    const signInWithEmail = (email, pass, name, history, redirect_uri) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                console.log(result);
                addingUsertodatabaseemail(name, email, "post")
                setUser(result.user);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                history.push(redirect_uri)


            }).catch(error => {
                setError(error.message);
            })
            .finally(setLoading(false))
    };
    const emailLogin = (email, pass, history, redirect_uri) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, pass)
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
    }, []);

    useEffect(() => {
        setLoading(true);

        axios.get(`https://limitless-springs-61236.herokuapp.com/users/adminCondition/${user.email}`).then(result => {
            setAdmin(result.data.admin)
            setLoading(false);

        })
    }, [user.email])

    const logOUt = () => {
        signOut(auth).then(() => {
            alert(`You kicked out seccessfully`)
        }).catch(error => {
            alert(`you didn't log out right now`)
        });

    }
    const addingUsertodatabaseemail = (name, email, method) => {
        axios.post('https://limitless-springs-61236.herokuapp.com/users', { name, email, }).then(result => {
            console.log(result.data);
        })
    }
    const addingUsertodatabase = (name, email) => {
        const settingdata = { name, email }
        axios.put('https://limitless-springs-61236.herokuapp.com/users', settingdata).then(result => {
            console.log(result.data);
        })
    }


    return ({
        user,
        loading,
        error,
        admin,
        googleDirectsignin,
        signInWithEmail,
        emailLogin,
        logOUt
    })
}
export default useFirebase;































