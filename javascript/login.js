const formulario = document.getElementById("formRegister");
const usuario = document.getElementById("userName");
const contraseña  = document.getElementById("pas");

const expresiones = {
      usuario: /^[a-zA-Z0-9\_\-]{4,20}$/,
      password: /^.{4,12}$/
    };
const loginUsuario = (e) => {
  e.preventDefault();

  const getLocal = localStorage.getItem("user");
  const validarUser = JSON.parse(getLocal);

if (validarUser === null) {
      Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'No hay usuarios registrados',
            width: '250px',
            position: 'top',
            color:'#FDFEFE',
            background:'#D35400'
          })
}else if (usuario.value === "" || contraseña.value === "" ) {
      Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'Campos vacios',
            width: '250px',
            position: 'top',
            color:'#FDFEFE',
            background:'#D35400'
          }) 
}else if ( expresiones.usuario.test(usuario.value) === false ||
           expresiones.password.test(contraseña.value) === false) {
      Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'Campos incorrecto',
            width: '250px',
            position: 'top',
            color:'#FDFEFE',
            background:'#D35400'
          })
}else if (!validarUser.find(user => user.usuarios === usuario.value)) {
      Swal.fire({
            icon: 'error',
            title: 'Alerta',
            text: 'Usuario no registrado',
            width: '250px',
            position: 'top',
            color:'#FDFEFE',
            background:'#D35400'
          }) 
      formRegister.reset();
}else if (validarUser.find(user => user.usuarios === usuario.value).contraseñas !== contraseña.value) {
      Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'Alguno de los datos es incorrecto',
            width: '250px',
            position: 'top',
            color:'#FDFEFE',
            background:'#D35400'
          })
          formRegister.reset();
}else if (validarUser.find(user => user.usuarios === "Administrador").contraseñas !== contraseña.value) {
      localStorage.setItem("userlog", JSON.stringify("user"))
      Swal.fire({
            icon: 'success',
            title: 'Alerta',
            text: 'Bienvenido',
            width: '250px',
            position: 'top',
            color:'#FDFEFE',
            background:'#D35400'
          })
      window.location.href="/index.html";
      }else{
      localStorage.setItem("userlog", JSON.stringify("user"))
      Swal.fire({
            icon: 'success',
            title: 'Alerta',
            text: 'Bienvenido',
            width: '250px',
            position: 'top',
            color:'#FDFEFE',
            background:'#D35400'
          })
      window.location.href="/administrador.html";
    }

}
    

formulario.addEventListener("submit", loginUsuario)