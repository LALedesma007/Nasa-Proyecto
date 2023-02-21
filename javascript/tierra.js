const longitud = document.getElementById("lon")
const latitud = document.getElementById("lat")
const gradoImg = document.getElementById("grado")
const fechas =  document.getElementById("fecha")
const buscar = document.getElementById("serch")
const tarjeta = document.getElementById("card")

const buscarInfo = async() => {
  let fc = fechas.value
  let long = longitud.value
  let lati = latitud.value
  let grad = gradoImg.value

   return(
       await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lati}&date=${fc}&&dim=${grad}&api_key=GsZLTgRcMDlvoggvyKM3ouwwmiUwQnpSrBlogpSR`)
       .then(Response => Response.json())
       .then(json =>{
          tarjeta.innerHTML = `
            <div class="row">
              <div class="col-lg-8">
                <img src="${json.url}" class="cardImg img-fluid rounded-start" alt="Ingrese otras coordenadas">
              </div>
              <div class="col-lg-4">
                <div class="card-body">
                  <h3 class="card-title text-center">Tierra</h3>
                  <p class="card-text mt-3">Las imágenes de Landsat se proporcionan al público como un proyecto conjunto entre la NASA y el USGS. Un informe reciente de la industria sobre datos de imágenes satelitales Landsat estima que el valor anual total para la economía es de $ 2.19 mil millones, superando con creces el costo total de varios años de construcción, lanzamiento y administración de sensores y satélites Landsat. El valor se deriva del uso de los datos por parte de los consumidores. El objetivo de este punto final es darle una idea fácil de usar de lo que pueden proporcionar los datos de imágenes de Landsat</p>
                </div>
              </div>
            </div>`;

       })
     )
   } 


buscar.addEventListener("click", buscarInfo)