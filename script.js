import { auth } from "./scriptfirebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("¡Sesión iniciada con éxito!");
        // Aquí puedes redireccionar a otra página, ej: window.location.href = "inicio.html";
      })
      .catch((error) => {
        alert("Error de acceso: " + error.message);
      });
  });
}