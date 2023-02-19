//-----------CARD IMAGEN DEL DIA ----------//

const fecha = document.getElementById("date")
const boton = document.getElementById("serch")
const tarjeta = document.getElementById("card")
const inicio = document.getElementById("volver")

const crearCard = async() => {
 let dia = fecha.value 
  return(
      await fetch(`https://api.nasa.gov/planetary/apod?api_key=GsZLTgRcMDlvoggvyKM3ouwwmiUwQnpSrBlogpSR&date=${dia}`)
      .then(Response => Response.json())
      .then(json => {
        tarjeta.innerHTML = `
<div class="row">
  <div class="col-lg-7">
    <img src="${json.url}" class="cardImg img-fluid rounded-start" alt="...">
  </div>
  <div class="col-lg-5">
    <div class="card-body">
      <h5 class="card-title text-center">${json.title}</h5>
      <p class="card-text mt-3">${json.explanation}</p>
    </div>
  </div>
</div>`;
      })
    )
  } 
  
const reiciciarCard = () =>{
 window.location.href="./"
}
  boton.addEventListener(("click") , crearCard)
  inicio.addEventListener(("click"), reiciciarCard)

// --------- CERRAR SECCION  ------------//

if (!localStorage.getItem("userlog")) {
  window.location="./html/login.html"
}

const cerrarSeccion = document.getElementById("cerrar")

const salirSeccion = () =>{
  localStorage.removeItem("userlog")
  window.location = "./html/login.html"
}

cerrarSeccion.addEventListener("click", salirSeccion)