// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaTbkApHsnSSfkd21g5q_kGPnkvqjzO48",
    authDomain: "rasel-tech-shop-bd.firebaseapp.com",
    projectId: "rasel-tech-shop-bd",
    storageBucket: "rasel-tech-shop-bd.appspot.com",
    messagingSenderId: "778815663390",
    appId: "1:778815663390:web:72bca03271e958a2efed0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;