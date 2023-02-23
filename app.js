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

// --------- CONTROL DE MOVIMIENTO  ------------//

const carrusel = document.querySelector(".carruselItems")
 
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth // Esta resta da el scroll maximo que llega
let intervalo = null
let step = 0 // El numero del Step Controla la velocidad del carrusel  

const start = () => {
intervalo = setInterval(function(){
carrusel.scrollLeft += step
if (carrusel.scrollLeft === maxScrollLeft) {
  step = -1 // cuando el maxScrollLeft llega al final el step se vuelve negativo y el carrusel regresa
}else if (carrusel.scrollLeft === 0) {
  step = 1
}
},10);
}
start();

const stop = () =>{
clearInterval(intervalo)
}

carrusel.addEventListener('mouseover', stop)
carrusel.addEventListener("mouseout", start)
