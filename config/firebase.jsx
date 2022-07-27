import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBAA9yQT5KNmJaNo8nX4Jf44Lo0vh1Wn0g",
  authDomain: "blog-a535a.firebaseapp.com",
  databaseURL: "https://blog-a535a-default-rtdb.firebaseio.com",
  projectId: "blog-a535a",
  storageBucket: "blog-a535a.appspot.com",
  messagingSenderId: "1070538640257",
  appId: "1:1070538640257:web:6d6572e9f4e096c5497680",
  measurementId: "G-NP8ZWF465L"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);