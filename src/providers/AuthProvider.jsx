import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config"
import PropTypes from 'prop-types'


export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    
    const authInfo = {
        creatUser,
        loginUser,
        googleSignIn
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}


export default AuthProvider;