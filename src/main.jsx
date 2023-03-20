import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";

// Configuracion de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCaGVZxerp_-mkZMeNPAQ6x5emDbrUyBv4",
  authDomain: "ciasola-bd.firebaseapp.com",
  projectId: "ciasola-bd",
  storageBucket: "ciasola-bd.appspot.com",
  messagingSenderId: "939267867989",
  appId: "1:939267867989:web:f9872076efc364708f1bdc"
};


// Inicializo Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
