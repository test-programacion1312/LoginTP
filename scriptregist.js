import '.Firebase/scriptfirebase.js';

function registrarUsuario(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Usuario registrado:", user);
    })
    .catch((error) => {
      console.error("Error al registrar:", error.code, error.message);
    });
}