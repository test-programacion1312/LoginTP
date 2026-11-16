import { auth, db } from "./scriptfirebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); 
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      // 1. Iniciar sesión en Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Consultar el documento del usuario en Firestore usando su UID
      const userDocRef = doc(db, "usuarios", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const rol = userData.rol; // "admin" o "usuario"

        alert("¡Sesión iniciada con éxito!");

        // 3. Redirigir según su rol
        if (rol === "admin") {
          window.location.href = "admin.html"; // Tu panel de administración
        } else {
          window.location.href = "sape.html"; // Tu página de usuario común
        }

      } else {
        alert("El usuario se autenticó, pero no se encontró su perfil en la base de datos.");
      }

    } catch (error) {
      console.error("Error de acceso:", error);
      alert("Error de acceso: " + error.message);
    }
  });
}
