// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCl8IK-w3c2IHV4qgK_BgacnZ0PJ9wMSvc",
    authDomain: "genius-car-service-6a56b.firebaseapp.com",
    projectId: "genius-car-service-6a56b",
    storageBucket: "genius-car-service-6a56b.appspot.com",
    messagingSenderId: "916415983988",
    appId: "1:916415983988:web:f4eb7ec67f399dae9d3c21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;