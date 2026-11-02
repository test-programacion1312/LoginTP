function iniciarSesion(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Sesión iniciada:", user);
    })
    .catch((error) => {
      console.error("Error de acceso:", error.code, error.message);
    });
}