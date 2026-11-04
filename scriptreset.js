import { auth } from "./scriptfirebase.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("¡Correo de restablecimiento enviado! Revisa tu bandeja de entrada.");
        window.location.href = "index.html";
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          alert("Este correo electrónico no está registrado.");
        } else if (error.code === 'auth/invalid-email') {
          alert("El formato del correo electrónico no es válido.");
        } else {
          alert(`Error: ${error.message}`);
        }
      });
  });
}