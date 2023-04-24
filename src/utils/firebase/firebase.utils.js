import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo7JliOHB_-GIk1JTtUQc1dfnGp1NywWs",
  authDomain: "e-commerce-0-50bbb.firebaseapp.com",
  projectId: "e-commerce-0-50bbb",
  storageBucket: "e-commerce-0-50bbb.appspot.com",
  messagingSenderId: "579712339374",
  appId: "1:579712339374:web:9fd76fbde1287e7f240c3f",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWIthGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionInforamtion = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnaoshot = await getDoc(userDocRef);

  if (!userSnaoshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionInforamtion,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedUser = (callback) =>
  onAuthStateChanged(auth, callback);

// export const onAuthStateChangedListener = (callback) =>
//   onAuthStateChanged(auth, callback);
