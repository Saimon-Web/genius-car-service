
import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }

    // const handleSignUpEmail = (email, password, confirmpassword) => {



    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             const user = result.user;
    //             setUser(user);
    //             console.log(user)
    //             setError('');
    //             setSuccess('create your account')
    //         })
    //         .catch(error => {
    //             setError(error.message)
    //         })

    // }

    //state change log in and sign out
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])




    return { user, signInWithGoogle, handleSignOut, error, success };
}
export default useFirebase;