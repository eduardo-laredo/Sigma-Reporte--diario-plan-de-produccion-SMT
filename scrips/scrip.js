let cantidadDeHorasDeTravajo = 12
let horaDeInicio = 7


const calculateHandle = (id) => {
  let linea = id.split("-")[2]
  let cycleTime = document.getElementById(`cycleTime-L-${linea}`);
  let placasPaneles = document.getElementById(`placasPaneles-L-${linea}`);
  let planPanles = document.getElementById(`planPanles-L-${linea}`);
  let planPlacas = document.getElementById(`planPlacas-L-${linea}`);
  let produccionPaneles = document.getElementById(`produccionPaneles-L-${linea}`)
  let produccionPLacas = document.getElementById(`produccionPLacas-L-${linea}`)
  let acomuladoPanles = document.getElementById(`acomuladoPanles-L-${linea}`)
  let acomuladoPlacas = document.getElementById(`acomuladoPlacas-L-${linea}`)
  
  let backTableModelo = document.getElementById(`modelo-L-${linea-1}`)
  let currtentTableModelo = document.getElementById(`modelo-L-${linea}`)

 
 
  if (backTableModelo?.value === currtentTableModelo?.value) {
    let acomuladoPanlesb = document.getElementById(`acomuladoPanles-L-${linea - 1}`)
    produccionPaneles.innerHTML = acomuladoPanles.value - acomuladoPanlesb.value
  }




  planPanles.innerHTML = planCalculate(cycleTime.value)
  planPlacas.innerHTML = placasCalculate(placasPaneles.value, planPanles.innerHTML)
  acomuladoPlacas.innerHTML = placasCalculate(placasPaneles.value, acomuladoPanles.value)



  if (backTableModelo?.value != currtentTableModelo?.value) {
    produccionPLacas.innerHTML = acomuladoPlacas.innerHTML
  }

  if (backTableModelo?.value === currtentTableModelo?.value && produccionPaneles.innerHTML != "-" && acomuladoPanles.value > 0) {
    produccionPLacas.innerHTML = placasPaneles.value * produccionPaneles.innerHTML
  }

  if (acomuladoPanles.value <= 0 || acomuladoPanles.value == "-") {
    return produccionPaneles.innerHTML = "-"
  }
  
  if (backTableModelo?.value != currtentTableModelo?.value) {
    return produccionPaneles.innerHTML = acomuladoPanles.value
  }


  
}

const planCalculate = (cycleTime) => {
  if (cycleTime <= 0) {
    return "-"
  }
  return Math.round((3600  / cycleTime) * 0.8)
}

const placasCalculate = (paneles, placas) => {
  if (paneles <= 0) {
    return "-"
  }


  if (paneles != "-" && placas != "-") {
    if (paneles * placas == 0)
      return "-"
    return paneles * placas
  }

  return "-"
}


  const calularEficiencia = (plan, produccion, tiempoMuerto )=>{
    if(produccion == 0){
      return "Error";
    }

    return Math.round((produccion/plan)*100)+" %"

  }
// HANDLE BUTTONS

const handleGuardar  = (id)=>{
  let linea = parseInt( id.split("-")[2])
  let therIsNextLine = document.getElementById( `continuar-L-${linea+1}`)
  let input = Array.from(document.getElementsByName(`input-L-${linea}`))
  let p = Array.from(document.getElementsByName(`p-L-${linea}`))
  
  let data = {
    so: input[0].value, 
    modelo: input[1].value,
    plan: `${p[0].innerHTML}/${p[1].innerHTML}`,
    produccion:`${p[2].innerHTML}/${p[3].innerHTML}`,
    acomulado: `${input[6].value}/${p[4].innerHTML}`,
    eficiencia: ""
  }
  // preventDefaultFrom(linea) form-L-1 


     // limpiar entradas si los datos no son los deseados
     if(data.plan == "-/-") data.plan="";
     if(data.produccion === "-/-") data.produccion="";
     if(data.acomulado === "/-") data.acomulado = "";
     
     // calcular eficiencia
     if(p[0].innerHTML !== "-"&& p[2].innerHTML !== "-" ){
      data.eficiencia = calularEficiencia(p[0].innerHTML,p[2].innerHTML)
     }

       let validarDatos = {
            SHOP_ORDER: input[0].value ,
            MODELO: input[1].value,
            PASTA: input[2].value,
            LADO: input[3].value,
            TIEMPO: input[4].value,
            PLACA_PANEL: input[5].value,
            ACOMULADO: input[6].value
        }     
      let arrValidarDatos =  Object.values(validarDatos).filter(e => e=="");
      
      if (  arrValidarDatos.length > 0 ) return
      
      let form = document.getElementById(`form-L-${linea}`)
      form.addEventListener("submit", function(event){
   
        event.preventDefault()
      });

    if(!therIsNextLine){

        if(linea == cantidadDeHorasDeTravajo){
          createResumenTable(linea, data)
          minimiarMaximizar(id)  
          cambioColor(data, linea)
          return
        }
         creatTable(linea+1)
         createResumenTable(linea, data)
         minimiarMaximizar(id)
         cambioColor(data, linea)
         
         return 
        }
        
        createResumenTable(linea, data)
        minimiarMaximizar(id)
        cambioColor(data, linea)
    
    
}


const cambioColor = (data, linea)=>{
  // color eficiencia dinamico >80% verde, <80%>60% amarillo, <60% rojo

  let eficienciaWrapper = document.getElementById(`eficiencia-Warper-L-${linea}`)
  let eficienciaP = document.getElementById(`eficiencia-p-L-${linea}`)
  let porcentaje = data.eficiencia.split(" ")[0]
  
  if(porcentaje == ""){
    
    // eficienciaWrapper.classList.add("green")
    // eficienciaP.classList.add("green")
    return
  }
  if(porcentaje>=80){
    eficienciaWrapper.classList.add("green")
    eficienciaP.classList.add("green")
 }
  if(porcentaje<80 && porcentaje>60){
    eficienciaWrapper.classList.add("yellow")
    eficienciaP.classList.add("yellow")
  }
  if(porcentaje<=60){
    eficienciaWrapper.classList.add("red")
    eficienciaP.classList.add("red")
  }

}


const handleContinuarModelo = (id)=>{
   
    
    let linea = parseInt( id.split("-")[2])
    let inputs =  document.getElementsByName(`input-L-${linea-1}`)
    let lineStop = document.getElementById(`cambioDeModelo-L-${linea}`)
    let borar = document.getElementById(`borrar-L-${linea}`)
    let data = [];
    let form = document.getElementById(`form-L-${linea}`)
    form.addEventListener("submit", function(event){
 
      event.preventDefault()
    });
    
    borar.classList.remove("D-none")
    lineStop.classList.add("D-none")
    
    if (linea == "1") {
      allCalculate(id)
      return
    }

    for (let index = 0; index < 6; index++) {
      
      let value = inputs[index].value;
      data.push( value)
        
    }
  
    
    if(data){
        let inputs =  document.getElementsByName(`input-L-${linea}`)
        data.forEach((dato, index) =>{inputs[index].value = dato})
   }

   allCalculate(id)

}

const handleReset = (id) => {
   
    
    let linea = id.split("-")[2]
    let input = Array.from(document.getElementsByName(`input-L-${linea}`))
    let p = Array.from(document.getElementsByName(`p-L-${linea}`))
    let modal1 = document.getElementById("modal1")
   
    input.forEach(input => {
      return input.value = ""
    })
  
    p.forEach(p => {
      return p.innerHTML = "-"
    })

    let lineStop = document.getElementById(`cambioDeModelo-L-${linea}`)
    let borar = document.getElementById(`borrar-L-${linea}`)
    
    if(linea !== "1"){
      
      borar.classList.add("D-none")
      lineStop.classList.remove("D-none")
    }
    allCalculate(id)
    modal1.removeAttribute("open","")
  }

const minimiarMaximizar = (id)=>{
 
  
    let linea = id.split("-")[2]
    let resumenTable = document.getElementById( `box-table-resumen-L-${linea}` )
    let table = document.getElementById(`box-table-L-${linea}` )
    let resumenTableDisplay = resumenTable.classList.value.split(" ").includes("D-none")
   
    if(!resumenTableDisplay){

        resumenTable.classList.add("D-none")
        table.classList.remove("D-none")
        
    }
    
    if(resumenTableDisplay){
        resumenTable.classList.remove("D-none")
        table.classList.add("D-none")
   }
}

const handleLineStop = (idModal)=>{

  let linea = idModal.childNodes[1].className.split(" ")[2]
  let id = `Modal-L-${linea}`
  let tiempoMuertoCodigoModal = document.getElementById(`lineaParada-L-${linea}`).value 
  let comentariosTextAreaModal = document.getElementById(`comentariosTextAreaModal-L-${linea}`).value
  let tiempoMuertoCodigo = document.getElementById(`tiempoMuertoCodigo-L-${linea}`)
  let comentariosTextArea = document.getElementById(`comentariosTextArea-L-${linea}`)
  let data = {
    comentariosTextArea: comentariosTextAreaModal ,
    tiempoMuertoCodigo: tiempoMuertoCodigoModal
  }   

 
  
  tiempoMuertoCodigo.value = tiempoMuertoCodigoModal
  comentariosTextArea.value = comentariosTextAreaModal
 
  
  
  let form = document.getElementById(`formModal-L-${linea}`)
  form.addEventListener("submit", function(event){
 
    event.preventDefault()
  });


  if(tiempoMuertoCodigoModal){

    idModal.removeAttribute("open","")  
    createResumenTableLinestop(linea, data)
    minimiarMaximizar(id)
    if(linea != cantidadDeHorasDeTravajo) creatTable(parseInt(linea)+1)
  }
   
}


const allCalculate = (id)=>{
  let lineCreatedL =  document.getElementsByName("created").length
  let element = id.split("-")[0]
  
  for (let index = 1; index <= lineCreatedL; index++) {
    calculateHandle(`${element}-L-${index}`)
  }

 }

 const allTables = (hour)=>{
 let mainTable = document.getElementById("mainTable") 


    for (let index = 0; index < hour; index++) {
      
      mainTable.innerHTML= mainTable.innerHTML + `
      <div class="box-table" id="box-table-L-${index+1}"></div> 
      <div class="box-table D-none" id="box-table-resumen-L-${index+1}"></div>
      `
    }
 }

 const allData= ()=>{
   let tablasCreadas = document.getElementsByName("created").length

   
   for (let index = 0; index < tablasCreadas; index++) {
     console.log("DATOS DE LA LINEA " + (index+1));
     
     let input = Array.from(document.getElementsByName(`input-L-${index+1}`))
     let p = Array.from(document.getElementsByName(`p-L-${index+1}`))  

  
     p.forEach(p => {
     
      console.log(p.id, "  =  ", p.innerHTML) }
     )
     input.forEach(i => {
      console.log(i.id, "  =  ",i.value)}
     )
     
    

   }
  
 }


window.onload = () => {
  allTables(cantidadDeHorasDeTravajo)
  creatTable(1)
 

 }

// advertencia para confirmar antes de salir de la pagnia
//  window.onbeforeunload = confirmExit;
//  function confirmExit()
//  {
//    return "";
//  }

