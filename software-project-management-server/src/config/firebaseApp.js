import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import config from "./environment.js";

// Initialize Firebase App and Firebase Storage
let firebaseApp;
let firebaseStorage;

try {
    if (!getApps().length) {
        firebaseApp = initializeApp(config.firebaseConfig);
        firebaseStorage = getStorage(firebaseApp);
        console.log("Firebase initialized successfully.");
    } else {
        firebaseApp = getApps()[0];
        firebaseStorage = getStorage(firebaseApp);
    }
} catch (error) {
    console.log("Error on firebase-initializeFirebaseApp - ", error.message);
    throw error;
}

export { firebaseApp, firebaseStorage };
