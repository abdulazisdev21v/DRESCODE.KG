import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4aQxo-3fSh6UGvZqPG_XWVUo-_UA2ZFU",
  authDomain: "shop-dc2e4.firebaseapp.com",
  projectId: "shop-dc2e4",
  storageBucket: "shop-dc2e4.appspot.com",
  messagingSenderId: "288124583807",
  appId: "1:288124583807:web:e16415f68fe4869569e44a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
