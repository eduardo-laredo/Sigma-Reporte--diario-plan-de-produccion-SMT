const createResumenTable = (linea, data)=>{
    let table = document.getElementById(`box-table-resumen-L-${linea }`)
    let h1 = linea+horaDeInicio-1
    let h2 = linea+horaDeInicio 
    
    while (h1 >12 ) {
        h1 = h1-12
    }
    while (h2 >12 ) {
        h2 = h2-12
    }
    
//    let data = {
//      so: "662565", 
//      modelo: "B27-35949-25",
//      plan: "25/5",
//      produccion: "25/25",
//      acomulado: "25/25",
//      eiciencia: "90%"
//      }

table.innerHTML = `

<table>
<tr>
    <td>
        <div class="box-wrapper ">
            <p class="label bold ">HORA</p>
            <p class="bold hora rHora">${h1} - ${h2}</p>
        </div>
    </td>
    <td>
        <div class="box-wrapper">
            <p class="label bold">SHOP ORDER</p>
            <p class="resumen-105">${data.so}</p>
        </div>
    </td>
    <td>

        <div class="box-wrapper">
            <p class="label bold">MODELO</p>
            <p class="resumen-105">${data.modelo}</p>
        </div>
    </td>
    <td>
        <div class="box-wrapper">
            <p class="label bold">PLAN</p>
            <p class="resumen-105">${data.plan}</p>
        </div>
    </td>
    <td>
        <div class="box-wrapper">
            <p class="label bold">PRODUCCION</p>
            <p class="resumen-105">${data.produccion}</p>
        </div>
    </td>
    <td>

        <div class="box-wrapper">
            <p class="label bold">ACOMULADO</p>
            <p class="resumen-105">${data.acomulado}</p>
        </div>
    </td>
    <td>

        <div id="eficiencia-Warper-L-${linea}" class="box-wrapper">
            <p id="eficiencia-p-L-${linea}" class="label bold">EFICIENCIA</p>
            <p class="eficiencia">${data.eficiencia}</p>
        </div>
    </td>
    <td class="acciones">
      
        <div class="box-wrapper-R">
            <a class="links" href="#box-table-L-${linea}">
            <button onclick="minimiarMaximizar(id)" id="maximizar-L-${linea}">

                <img type="reset" class="buttonEdit" src="logos/002-editar.png" alt="no-logo">
              <p class="B-editar-p">

                  EDITAR
              </p>
            </button>
             </a>
        </div>
        


    </td>
</tr>                 
</table>

`
}


const createResumenTableLinestop = (linea, data)=>{
    let table = document.getElementById(`box-table-resumen-L-${linea }`)
    let h1 = parseInt(linea) +horaDeInicio-1
    let h2 = parseInt(linea) +horaDeInicio 


    while (h1 >12 ) {
        h1 = h1-12
    }
    while (h2 >12 ) {
        h2 = h2-12
    }

    
    table.innerHTML = `

<table class="linea-parada-box">
<tr>
      <td class="rHora">
        <div class="box-wrapper  ">
            <p class="label bold ">HORA</p>
            <p class="bold hora rHora">${h1} - ${h2}</p>
        </div>
    </td>
    <td>
        <div class="causa" >
            <h2 >${data.tiempoMuertoCodigo}</h2>
         
        </div>
    </td>
        <td class="acciones">
      
        <div class="box-wrapper-R">
            <a class="links" href="#box-table-L-${linea}">
            <button onclick="minimiarMaximizar(id)" id="maximizar-L-${linea}">

                <img type="reset" class="buttonEdit" src="logos/002-editar.png" alt="no-logo">
              <p class="B-editar-p">

                  EDITAR
              </p>
            </button>
             </a>
        </div>
        


    </td>
   
</tr>                 
</table>
`
}

