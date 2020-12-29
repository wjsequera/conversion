var lista = document.getElementById("lista")
var imagen = document.getElementById("imagen")
var container = document.getElementById("container")

function mostrarImagen () {

  mostrarIncognitas()

  if (lista.value == 'default'){
    imagen.src = './'
   
  }

  else if (lista.value == 'muu') {
    imagen.src = './images/EcuacionesMUU.png'
    
  }
  else if (lista.value == 'mua' ){
    imagen.src = './images/EcuacionesMUA.png'
    
  }
  else if (lista.value == 'cl') {
    imagen.src = './images/caidalibreEcuaciones.png'
    
  }
  else if (lista.value == 'lp') {
    imagen.src = './images/EcuacionesLP.png'
    
  }

  else if (lista.value == 'limpiar') {
    imagen.src = './'
    
  }
}

function mostrarIncognitas () {


  if (lista.value == 'muu') {
    container.innerHTML = `

   <div id="muu"> 
    
   <h4>Seleccione la variable a buscar</h4>
    
   <select name="muu" id="incognitasMUU">
     <option value="velocidad"> velocidad </option>
     <option value="distancia"> distancia </option>
     <option value="tiempo"> tiempo </option>
  </select>

  <div id="incognitas"> 
    
  </div>

   </div>

    `
    document.getElementById('incognitasMUU').addEventListener('change', desplegarEntradas);
    
  }


 else if (lista.value == "mua"){
    container.innerHTML = `
      <div id = "muu">

      <h4>Seleccione la variable a buscar</h4>

      <select name="mua" id="incognitasMUA">
         <option value="velocidad"> velocidad </option>
         <option value="distancia"> distancia </option>
        <option value="tiempoInicial"> tiempo inicial </option>
         <option value="aceleracion"> aceleracion </option>
         <option value="velocidadInicial"> velocidad inicial </option>
         <option value="velocidadFinal"> velocidad final </option>
         <option value="tiempoFinal"> tiempo final </option>
         <option value="posicionInicial"> posicion inicial</option>
         <option value="posicionFinal"> posicion final </option>
      </select>

      <div id="incognitas"> 
    
      </div>

      </div>
    `;

    document.getElementById("incognitasMUA").addEventListener('change', desplegarEntradas)
  }

  else {
    container.innerHTML = ''
  }

}

function desplegarEntradas () {

  if (lista.value == 'muu') {

      var incognitasMUU = document.getElementById('incognitasMUU')

    if (incognitasMUU.value == 'velocidad') {
    document.getElementById('incognitas').innerHTML = `

    <input type='number' id='distancia' placeholder="ingrese la distancia"  /> <input type='number' id='tiempo' placeholder="ingrese el tiempo" />

    <button id='boton'> resolver </button>

    <div id="resultado"> 

    </div>
 
    `
    document.getElementById('boton').addEventListener('click', resolverIncognita)

  }

  else if (incognitasMUU.value == 'distancia') {
    document.getElementById('incognitas').innerHTML = `

    <input type='number' id='velocidad' placeholder="ingrese la velocidad"  /> <input type='number' id='tiempo' placeholder="ingrese el tiempo" />

    <button id='boton'> resolver </button>

    <div id="resultado"> 

    </div>
 
    `
    document.getElementById('boton').addEventListener('click', resolverIncognita)
  }

  else if (incognitasMUU.value == 'tiempo') {
    document.getElementById('incognitas').innerHTML = `

    <input type='number' id='velocidad' placeholder="ingrese la velocidad"  /> <input type='number' id='distancia' placeholder="ingrese la distancia" />

    <button id='boton'> resolver </button>

    <div id="resultado"> 

    </div>
 
    `
    document.getElementById('boton').addEventListener('click', resolverIncognita)
  }

  }

  else if (lista.value == "mua") {
    var incognitasMUA = document.getElementById("incognitasMUA");

    if(incognitasMUA.value == "distancia"){
      document.getElementById("incognitas").innerHTML = `
      
      <input type='number' id='velocidad' placeholder="ingrese la velocidad"  /> 
      <input type='number' id='tiempoInicial' placeholder="ingrese el tiempo inicial" />
      <input type='number' id='aceleracion' placeholder="ingrese la aceleracion" />
      <input type='number' id='velocidadInicial' placeholder="ingrese la velocidad inicial" />
      <input type='number' id='velocidadFinal' placeholder="ingrese la velocidad final" />
      <input type='number' id='tiempoFinal' placeholder="ingrese el tiempo final" />

      <button id='boton'> resolver </button>
  
      <div id="resultado"> 
  
      </div>

      `

      document.getElementById('boton').addEventListener('click', resolverIncognita)
    }

    else if (incognitasMUA.value == "tiempoInicial"){
      document.getElementById("incognitas").innerHTML = `
      
      <input type='number' id='velocidad' placeholder="ingrese la velocidad"  /> 
      <input type='number' id='distancia' placeholder="ingrese la distancia"  /> 
      <input type='number' id='aceleracion' placeholder="ingrese la aceleracion" />
      <input type='number' id='velocidadInicial' placeholder="ingrese la velocidad inicial" />
      <input type='number' id='velocidadFinal' placeholder="ingrese la velocidad final" />
      <input type='number' id='tiempoFinal' placeholder="ingrese el tiempo final" />

      <button id='boton'> resolver </button>
  
      <div id="resultado"> 
  
      </div>

      `

      document.getElementById('boton').addEventListener('click', resolverIncognita)
    }
    
    else if (incognitasMUA.value == "tiempoFinal"){
      document.getElementById("incognitas").innerHTML = `
    
      <input type='number' id='distancia' placeholder="ingrese la distancia"  /> 
      <input type='number' id='aceleracion' placeholder="ingrese la aceleracion" />
      <input type='number' id='velocidadInicial' placeholder="ingrese la velocidad inicial" />
      <input type='number' id='velocidadFinal' placeholder="ingrese la velocidad final" />
      <input type='number' id='tiempoInicial' placeholder="ingrese el tiempo  inicial" />

      <button id='boton'> resolver </button>
  
      <div id="resultado"> 
  
      </div>

      `

      document.getElementById('boton').addEventListener('click', resolverIncognita)
    }

    else if (incognitasMUA.value == "velocidadInicial"){
      document.getElementById("incognitas").innerHTML = `
      
      <input type='number' id='aceleracion' placeholder="ingrese la aceleracion" />
      <input type='number' id='tiempoFinal' placeholder="ingrese el tiempo final" />
      <input type='number' id='velocidadFinal' placeholder="ingrese la velocidad final" />
      <input type='number' id='tiempoInicial' placeholder="ingrese el tiempo  inicial" />

      <button id='boton'> resolver </button>
  
      <div id="resultado"> 
  
      </div>

      `

      document.getElementById('boton').addEventListener('click', resolverIncognita)
    }
    
    else if (incognitasMUA.value == "velocidadFinal"){
      document.getElementById("incognitas").innerHTML = `
      
      <input type='number' id='aceleracion' placeholder="ingrese la aceleracion" />
      <input type='number' id='tiempoInicial' placeholder="ingrese el tiempo inicial" />
      <input type='number' id='velocidadInicial' placeholder="ingrese la velocidad inicial" />
      <input type='number' id='tiempoFinal' placeholder="ingrese el tiempo tiempo final" />

      <button id='boton'> resolver </button>
  
      <div id="resultado"> 
  
      </div>

      `

      document.getElementById('boton').addEventListener('click', resolverIncognita)
    }

    else if (incognitasMUA.value == "aceleracion"){
      document.getElementById("incognitas").innerHTML = `
      
      <input type='number' id='velocidadFinal' placeholder="ingrese la velocidad final" />
      <input type='number' id='tiempoInicial' placeholder="ingrese el tiempo inicial" />
      <input type='number' id='velocidadIncial' placeholder="ingrese la velocidad inicial" />
      <input type='number' id='tiempoInicial' placeholder="ingrese el tiempo tiempo inicial" />

      <button id='boton'> resolver </button>
  
      <div id="resultado"> 
  
      </div>

      `

      document.getElementById('boton').addEventListener('click', resolverIncognita)
    }
    
  }

}

function resolverIncognita () {

  if (lista.value == 'muu') {

    if (incognitasMUU.value == 'velocidad') {
      var distancia = parseFloat(document.getElementById('distancia').value)
    var tiempo = parseFloat(document.getElementById('tiempo').value)
    
    document.getElementById('resultado').innerHTML = `<p> <strong> el resultado es ${distancia/tiempo} m/s </strong> </p>`
    }
  
    else if (incognitasMUU.value == 'distancia') {
      var velocidad = parseFloat(document.getElementById('velocidad').value)
    var tiempo = parseFloat(document.getElementById('tiempo').value)
    
    document.getElementById('resultado').innerHTML = `<p> <strong> el resultado es ${velocidad * tiempo} m </strong> </p>`
    } 


    else if (incognitasMUU.value == 'tiempo') {
      var velocidad = parseFloat(document.getElementById('velocidad').value)
    var distancia = parseFloat(document.getElementById('distancia').value)
    
    document.getElementById('resultado').innerHTML = `<p> <strong> el resultado es ${distancia / velocidad} s </strong> </p>`
    } 

  }

  
}



lista.addEventListener('change', mostrarImagen)
