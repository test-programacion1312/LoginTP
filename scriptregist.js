import { auth } from "./scriptfirebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const pass2 = document.getElementById("cont2").value;

    if (password !== pass2) {
      alert("Las contraseñas no coinciden");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("¡Usuario registrado con éxito!");
        window.location.href = "index.html";
      })
      .catch((error) => {
        alert("Error al registrar: " + error.message);
      });

     async function saveUserProfile(userId, name, role) {
  try {
    // Saves a user document under the 'usuarios' collection
    await setDoc(doc(db, "usuarios", userId), {
      nombre: name,
      rol: role,
      creadoEn: new Date()
    });
    console.log("Perfil de usuario guardado con éxito!");
  } catch (error) {
    console.error("Error al guardar el perfil: ", error);
  }
}
  });
}
