import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDD5KnIbGUvZyfPl0mlZcpx7JqoPwfRO3U",
  authDomain: "app-tienda-web-otw-a216c.firebaseapp.com",
  projectId: "app-tienda-web-otw-a216c",
  storageBucket: "app-tienda-web-otw-a216c.appspot.com",
  messagingSenderId: "962137105537",
  appId: "1:962137105537:web:457ae485ff6eb6dd005980"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)