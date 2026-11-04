import '.Firebase/scriptfirebase.js';

function iniciarSesion(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Sesión iniciada:", user);
    })
    .catch((error) => {
      alert("Error de acceso:", error.code, error.message);
    });
}
