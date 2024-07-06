import React from 'react'
import ReactDOM from 'react-dom/client'

import { initializeApp } from "firebase/app";

import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyB_jWUXN-ioMRr2XvrHOynT-hIM_YQ9IJE",
  authDomain: "proyectofinal-react-bertin.firebaseapp.com",
  projectId: "proyectofinal-react-bertin",
  storageBucket: "proyectofinal-react-bertin.appspot.com",
  messagingSenderId: "572323737970",
  appId: "1:572323737970:web:ef1f4c9ece256c10feedeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
