//const ver = document.getElementById("mostrarUsuarios")
const nuevaLista = document.getElementById("lista");
const listaRegistro = document.getElementById("registro");
const listaUsuaio = document.getElementById("listusuario");
const masUsuarios = document.getElementById("agregar");
const ingresar = document.getElementById("incorporar");
const mostrar = document.getElementById("ver");
let id = 1;

const listaUsuario = () => {
  const listas = JSON.parse(localStorage.getItem("user"));
  const listaUser = listas.map(
    (info) => `
 <tr>
 <th scope="row" class="fw-bold text-black">${id++}</th>
 <td scope="col" class="fw-bold text-black">${info.nombres}</td>
 <td scope="col"class="fw-bold text-black">${info.correos}</td>
 <td scope="col"class="fw-bold text-black">${info.usuarios} </td>
 <td scope="col"class="fw-bold text-black">${info.contraseñas}</td> 
 <td scope="col"><button type="button" class="btn btn-danger" onclick="eliminarUsuario(${
   info.contraseñas
 })">Borrar</button>  
 <button type="button" class="btn btn-success" onclick="editarUsuario(${
   info.contraseñas
 })" >Editar</button> 
</tr>`
  );

  nuevaLista.innerHTML = listaUser;
};

mostrar.addEventListener("click", listaUsuario);

const eliminarUsuario = (infoID) => {
  let existenUsuario = JSON.parse(localStorage.getItem("user"));
  const itemABorrar = existenUsuario.some(
    ({ contraseñas }) => contraseñas == infoID
  );
  if (itemABorrar) {
    const arrayitemABorrar = existenUsuario.filter(
      ({ contraseñas }) => contraseñas != infoID
    );
    localStorage.setItem("user", JSON.stringify(arrayitemABorrar));
    window.location.href = "/administrador.html";
  }
};

const editarUsuario = (infoNom) => {
  let usu = JSON.parse(localStorage.getItem("user"));
  for (let i = 0; i < usu.length; i++) {
    if (usu[i].contraseñas == infoNom) {
      listaRegistro.innerHTML = `<tr>
        <th scope="row"></th>
        <th scope="col">Nombre</th>
        <th scope="col">Correo</th>
        <th scope="col">Ususario</th>
        <th scope="col">Contraseña</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    <th scope="col"></th>
    <th scope="col"><input type="text" class="form-control" placeholder="${usu[i].nombres}" maxlength="30" id="apellido"></th>
    <th scope="col"><input type="email" class="form-control" placeholder="${usu[i].correos}" maxlength="30" id="email"></th>
    <th scope="col"><input type="text" class="form-control" placeholder="${usu[i].usuarios}" maxlength="30" id="usua"></th>
    <th scope="col"><input type="text" class="form-control" placeholder="${usu[i].contraseñas}" maxlength="30" id="pass"></th>
    <th scope="col"><td><button type="button" class="btn btn-danger borrar" onclick="actualizarUsuario(${i})">Actualizar</button> <button type="button" class="btn btn-danger borrar" onclick="cancelarActualizar()">Cancelar</button> </th>
    <th scope="col"></th>`;
    }
  }
};

const actualizarUsuario = (i) => {
  let usu = JSON.parse(localStorage.getItem("user"));
  usu[i].nombres = document.getElementById("apellido").value;
  usu[i].correos = document.getElementById("email").value;
  usu[i].usuarios = document.getElementById("usua").value;
  usu[i].contraseñas = document.getElementById("pass").value;
  localStorage.setItem("user", JSON.stringify(usu));
  window.location.href = "/administrador.html";
};

const cancelarActualizar = () => {
  window.location.href = "./administrador.html";
};

const agregarUsuarios = () => {
  masUsuarios.innerHTML = `<tr>
  <th scope="row"></th>
  <th scope="col">Nombre</th>
  <th scope="col">Correo</th>
  <th scope="col">Ususario</th>
  <th scope="col">Contraseña</th>
  <th scope="col"></th>
  <th scope="col"></th>
</tr>
<th scope="col"></th>
<th scope="col"><input type="text" class="form-control" placeholder="Nombre" maxlength="30" id="name"></th>
<th scope="col"><input type="email" class="form-control" placeholder="Correo" maxlength="30" id="email"></th>
<th scope="col"><input type="text" class="form-control" placeholder="Usuario" maxlength="30" id="userName"></th>
<th scope="col"><input type="text" class="form-control" placeholder="Contraseña" maxlength="30" id="pas"></th>
<th scope="col"><td><button type="button" class="btn btn-danger borrar" onclick="guardarUsuario()">Guardar</button> <button type="button" class="btn btn-danger borrar" onclick="cancelarActualizar()">Cancelar</button> </th>
<th scope="col"></th>`;
};

const guardarUsuario = () => {
  const nombre = document.getElementById("name").value;
  const correo = document.getElementById("email").value;
  const usuario = document.getElementById("userName").value;
  const contraseña = document.getElementById("pas").value;

  let usuarioRegistro = JSON.parse(localStorage.getItem("user")) || [];
  let user = {
    nombres: nombre,
    correos: correo,
    usuarios: usuario,
    contraseñas: contraseña,
  };
  usuarioRegistro.push(user);
  localStorage.setItem("user", JSON.stringify(usuarioRegistro));
  window.location.href = "./administrador.html";
};

ingresar.addEventListener("click", agregarUsuarios);

// --------- CERRAR SECCION  ------------//

if (!localStorage.getItem("userlog")) {
  window.location = "./html/login.html";
}

const cerrarSeccion = document.getElementById("cerrar");

const salirSeccion = () => {
  localStorage.removeItem("userlog");
  window.location = "./html/login.html";
};

cerrarSeccion.addEventListener("click", salirSeccion);
