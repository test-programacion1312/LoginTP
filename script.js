import { auth } from "./scriptfirebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        window.location.href = "sape.html"
        // Esto te redirije a la pagina en blanco asi al toke roque
      })
      .catch((error) => {
        alert("Error de acceso: " + error.message);
      });
  });
}
