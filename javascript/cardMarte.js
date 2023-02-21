// --------- DEFINE LAS PAGINAS DE LAS CARD DE MARTE ------------//

let pagina = 1
const anterior = document.getElementById("btnAnterior");
const siguiente = document.getElementById("btnSiguiente");

const paginaSiguiente = () => {
  if (pagina < 1000) {
    pagina += 1;
    CreateCard();
  }
}

const paginaAnterior = () => {
  if (pagina > 1) {
    pagina -= 1;
    CreateCard();
  }
}
siguiente.addEventListener(`click`, paginaSiguiente)
anterior.addEventListener(`click`, paginaAnterior)

// --------- CREAR LAS CARD DE MARTE ------------//

const getData = async () => {
  return(
      await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=GsZLTgRcMDlvoggvyKM3ouwwmiUwQnpSrBlogpSR&page=${pagina}`)
      .then(Response => Response.json())
      .then(json => json.photos)
    )
  } 
  
    const CreateCard = async() => {
      const cards = document.getElementById("containerCard")
    const data = await getData()
    const card = data.map(info =>
      `<div class="card   col-10 col-md-3 col-lg-2 m-2 p-0 border-0" >
           <img src="${info.img_src}"class="imagen rounded-top" alt="Marte">
        <div class="card  border-0">
           <div class="card  border-0">
             <a href="${info.img_src}" download="foto" class="btn btn-warning textoInfo" onclick="">Agrandar Imagen</a>
           </div>
        </div>
     </div>
   `);
    cards.innerHTML = card
  }
  
  CreateCard()  

// --------- CERRAR SECCION  ------------//

if (!localStorage.getItem("userlog")) {
  window.location="/html/login.html"
}

const cerrarSeccion = document.getElementById("cerrar")

const salirSeccion = () =>{
  localStorage.removeItem("userlog")
  window.location = "/html/login.html"
}

cerrarSeccion.addEventListener("click", salirSeccion)