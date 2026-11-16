import { auth, db } from "./scriptfirebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const pass2 = document.getElementById("cont2").value;

    // Validación de contraseñas
    if (password !== pass2) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      // 1. Crear el usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Guardar su perfil personalizado en Firestore usando su UID como ID del documento
      await setDoc(doc(db, "usuarios", user.uid), {
        email: email,
        rol: "usuario", // Puedes cambiarlo a "admin" si es el administrador principal
        creadoEn: new Date()
      });

      alert("¡Usuario registrado con éxito!");
      window.location.href = "index.html";

    } catch (error) {
      console.error("Error en el registro:", error);
      alert("Error al registrar: " + error.message);
    }
  });
}
