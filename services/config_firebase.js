// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Configuración de Firebase (debes reemplazar estos valores con los de tu proyecto)
const firebaseConfig = {
  apiKey: "AIzaSyABCDEFGHIJKLMNOPQRSTUVWXYZ12345678",
  authDomain: "semafororockemma.firebaseapp.com",
  databaseURL: "https://semafororockemma-default-rtdb.firebaseio.com",
  projectId: "semafororockemma",
  storageBucket: "semafororockemma.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdefghijklmnopqrstuv",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Exportar lo necesario
export { app, db };
