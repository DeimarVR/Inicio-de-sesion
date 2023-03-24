function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Aquí puedes agregar la lógica para validar las credenciales del usuario.
    // En este ejemplo, se asume que las credenciales son válidas si el correo electrónico 
    // Es "usuario@ejemplo" y la contraseña es "contraseña".
    if (email === "usuario@ejemplo" && password === "contraseña") {
      // Si las credenciales son válidas, redirigir al usuario a una página de bienvenida.
      window.location.href = "bienvenida.html";
    } else {
      // Si las credenciales no son válidas, mostrar un mensaje de error.
      alert("Correo electrónico o contraseña incorrectos. Por favor, inténtelo de nuevo.");
    }
  }