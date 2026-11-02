import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth();

// Función para ejecutar cuando el usuario haga clic en "Recuperar"
const recuperarContraseña = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("¡Correo de restablecimiento enviado! Revisa tu bandeja de entrada.");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    // Manejo de errores comunes
    if (errorCode === 'auth/user-not-found') {
      alert("Este correo electrónico no está registrado.");
    } else if (errorCode === 'auth/invalid-email') {
      alert("El formato del correo electrónico no es válido.");
    } else {
      alert(`Error: ${errorMessage}`);
    }
  }
};