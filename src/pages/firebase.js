import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPEBns4ssGLWVSTwI0LQZnOpebKxQEieU",
    authDomain: "upload-d246a.firebaseapp.com",
    projectId: "upload-d246a",
    storageBucket: "upload-d246a.appspot.com",
    messagingSenderId: "828805211046",
    appId: "1:828805211046:web:fb0586ef2a73494d95a567",
    measurementId: "G-QVM4LY80QF"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
