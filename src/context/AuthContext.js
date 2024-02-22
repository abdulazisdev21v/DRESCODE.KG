import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useContext } from "react";
import { auth } from "../firabase";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);
const AuthContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error.message);
    }
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const values = {
    register,
    signInWithGoogle,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
