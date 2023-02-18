const formulario = document.getElementById("formRegister");
const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const usuario = document.getElementById("userName");
const contraseña  = document.getElementById("pas");

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	password: /^.{4,12}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const registroUsuario = (e) => {
  e.preventDefault();
  let validarUser = JSON.parse(localStorage.getItem("user")) || [];
  let usuarioRegistro = JSON.parse(localStorage.getItem("user")) || [];
  let user = {
    nombres: nombre.value,
    correos: correo.value,
    usuarios: usuario.value,
    contraseñas: contraseña.value,
  }
if (nombre.value === "" || correo.value === "" || usuario.value === "" || contraseña.value === "" ) {
  Swal.fire({
    icon: 'warning',
    title: 'Alerta',
    text: 'Campos vacios',
    width: '250px',
    position: 'top',
    color:'#FDFEFE',
    background:'#D35400'
  }) 
}else if (expresiones.nombre.test(user.nombres)       == false ||
          expresiones.correo.test(user.correos)       == false ||
          expresiones.usuario.test(user.usuarios)     == false ||
          expresiones.password.test(user.contraseñas) == false ) {
    Swal.fire({
      icon: 'warning',
      title: 'Alerta',
      text: 'Campos incorrecto',
      width: '250px',
      position: 'top',
      color:'#FDFEFE',
      background:'#D35400'
    })
  formRegister.reset() 
}else if (validarUser.find(user => user.correos === correo.value)) {
  Swal.fire({
    icon: 'error',
    title: 'Alerta',
    text: 'El ususario ya existe',
    width: '250px',
    position: 'top',
    color:'#FDFEFE',
    background:'#D35400'
  })
}else {
  usuarioRegistro.push(user);  
  localStorage.setItem("user", JSON.stringify(usuarioRegistro));  
  Swal.fire({
    icon: 'success',
    title: 'Alerta',
    text: 'Usuario registrado con exito',
    width: '250px',
    position: 'top',
    color:'#FDFEFE',
    background:'#D35400'
  })
  window.location.href="/html/login.html"
}
} 

 formulario.addEventListener("submit", registroUsuario)

