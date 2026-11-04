import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGISQo6w0KpEHcwG0XzFXp5jZXY4dBkB0",
  authDomain: "testpag.firebaseapp.com",
  databaseURL: "https://testpag-default-rtdb.firebaseio.com",
  projectId: "testpag",
  storageBucket: "testpag.firebasestorage.app",
  messagingSenderId: "511076344914",
  appId: "1:511076344914:web:50794fc2c271921e72ab8b",
  measurementId: "G-FQQCBTWDL3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);