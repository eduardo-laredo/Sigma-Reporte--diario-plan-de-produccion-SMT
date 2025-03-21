const creatTable = (linea)=>{
    let table = document.getElementById(`box-table-L-${linea }`)
    let h1 = linea+horaDeInicio-1
    let h2 = linea+horaDeInicio 
    while (h1 >12 ) {
        h1 = h1-12
   
        
    }
    while (h2 >12 ) {
        h2 = h2-12
       
    }

  table.setAttribute("name","created")
  
    table.innerHTML = `
    <form id="form-L-${linea}"  >
      <table >
                     
                      
                      
              <td>
                          <div class="box-wrapper">
                              <p class="label bold">HORA</p>
                              <p class="bold hora" name="hora-L-${linea}">${h1} - ${h2}</p>
                          </div>
  
                          <div class="box-wrapper">
                              <p class="label bold">MODELO</p>
                              <div class="input-wrapper ">
                                  <input class="input modelo" type="number" name="input-L-${linea}" id="SO-L-${linea}" onchange="allCalculate(id)" required>
                                  <label class="label" for="SO-L-${linea}">SHOP ORDER</label>
                              </div>
  
                              <div class="input-wrapper ">
                                  <input class="input upperCase modelo" type="text" name="input-L-${linea}" id="modelo-L-${linea}" onchange="allCalculate(id)" required>
                                  <label class="label" for="modelo-L-${linea}">MODELO</label>
                              </div>
                              <div class="input-wrapper ">
                                  <select class="input select-css modelo" name="input-L-${linea}" id="pasta-L-${linea}" onchange="allCalculate(id)" required>
                                      <option value selected hidden=""></option>
                                      <option value="Alpha WS-820(LF Clean)">Alpha WS-820(LF Clean)</option>
                                      <option value="Senju GRN360-K2V(No Clean)">Senju GRN360-K2V(No Clean)</option>
                                      <option value="Alpha WS809(Plomo Clean)">Alpha WS809(Plomo Clean)</option>
                                      <option value="Alpha CVP-390(L-F No Clean)">Alpha CVP-390(L-F No Clean)</option>
                                      <option value="M705-GRS800(L-F No Clean)">M705-GRS800(L-F No Clean)</option>
                                      <option value="M705-WSG70-T6K">M705-WSG70-T6K(L-F Clean)</option>
                                      <option value="M705-WSG70-T7J(L-F Clean)">M705-WSG70-T7J(L-F Clean)</option>
                                  </select>
                                  <label class="label" for="pasta-L-${linea}">PASTA</label>
                              </div>
                              <div class="input-wrapper ">
                                  <label for="lado-L-${linea}" class="label">LADO</label>
                                  <select class="select-css input modelo" name="input-L-${linea}" id="lado-L-${linea}" onchange="allCalculate(id)" required>
                                      <option value selected hidden=""></option>
                                      <option value="bot">BOT</option>
                                      <option value="bot">TOP</option>
                                  </select>
                              </div>
                          </div>
                  
              </td>
              <td>
                  <div class="wrapper">
  
                  
                  <div class="group-colomb">
  
                      <div class="box-wrapper">
                          <p class="label bold">PLAN</p>
                          <div class="column">
                              <p class="p">PANELES</p>
                              <p class="p" name="p-L-${linea}" id="planPanles-L-${linea}">-</p>
                          </div>
                          <div class="column">
  
                              <p class="p">PLACAS</p>
                              <p class="p" name="p-L-${linea}" id="planPlacas-L-${linea}">-</p>
                          </div>
                      </div>
                  </div>
                  <div class="box-wrapper">
                      <p class=" label bold">CYLCE</p>
                      <div class="input-wrapper">
                          <label class="label" for="cycleTime-L-${linea}">TIEMPO</label>
                          <input name="input-L-${linea}" id="cycleTime-L-${linea}" type="number" class="input center" min="0" max="999" onchange="allCalculate(id)" required
                             >
                      </div>
  
                      <div class="input-wrapper">
                          <label class="label" for="placasPaneles-L-${linea}">Plac/Panel</label>
                          <input name="input-L-${linea}" id="placasPaneles-L-${linea}" type="number" class="input center " min="0" max="999" step="1" onchange="allCalculate(id)" required
                             >
                      </div>
                  </div>
              </div>
              </td>
  
  
              <td>
                  <div class="wrapper">
                      <div class="box-wrapper">
  
                          <p class="label bold">PRODUCCION</p>
                          <div class="column">
                              <p class="p">PANELES</p>
                              <p class="p" name="p-L-${linea}" id="produccionPaneles-L-${linea}">-</p>
                          </div>
                          <div class="column">
                              <p class="p">PLACAS</p>
                              <p class="p" name="p-L-${linea}" id="produccionPLacas-L-${linea}">-</p>
                          </div>
                      </div>
  
                      <div class="box-wrapper">
                          <p class="label bold">ACOMULADO</p>
  
                          <div class="input-wrapper">
                              <label class="label" for="acomuladoPanles-L-${linea}">PANELES</label>
                              <input class="input center" name="input-L-${linea}" id="acomuladoPanles-L-${linea}" type="number" min="0" max="99999" 
                                  onchange="allCalculate(id)" required>
                          </div>
                          <div class="column">
                              <p class="p">PLACAS</p>
                              <p name="p-L-${linea}" id="acomuladoPlacas-L-${linea}">-</p>
                          </div>
  
  
                      </div>
                  </div>
              </td>
  
              <td>
                  <div class="box-wrapper">
                      <p class="label bold">TIEMPO MUERTO</p>
                      <div class="group">
  
                          <div class="input-wrapper">
                              <label for="tiempoMuertoCodigo-L-${linea}" class="label">CODIGO</label>
                              <select class=" select-css input cm " name="input-L-${linea}" id="tiempoMuertoCodigo-L-${linea}" onchange="allCalculate(id)">
                               
                                      <option value selected hidden></option>
                                      <option value="Ok">OK - Sin problema</option>
                                      <option value="Inicio de turno">IT - Inicio de turno</option>
                                      <option value="Descanso comida">DC - Descanso comida</option>
                                      <option value="Fin de turno">FT - Fin de turno</option>
                                      <option value="Cambio de modelo">CM - Cambio de modelo</option>
                                      <option value="Linea parada">LP - Linena parada</option>
                                      <option value="Falta de plan">FP - Falta de plan</option>
                                      <option value="Falta de sistema">FS - Falta de sistema</option>
                                      <option value="Falta de operador">FO - Falta de operador</option>
                                      <option value="Limpieza 5s">L5S - Limpieza 5s</option>
  
                       
                                      <option value="Falta de material">FM - Falta de material</option>
                                      <option value="Material manualmnete">MM - Material manualmente</option>
                                      <option value="Preparacion de materiales"">P.MAT - Preparacion de materiales</option>
  
                      
  
                                      <option value="Problema de calidad">QC - Problema de calidad</option>
                                      <option value="Problema de maquina">PMQ - Problema de maquina</option>
                                      <option value="Problema horno">PH - Problema horno</option>
                                      <option value="Mantenimiento preventivo">MTP - Mantenimiento preventivo</option>
                                      <option value="Mantenimiento correctivo">MTP - Mantenimiento correctivo</option>
                                      <option value="Maquina dañada">MD - Maquina dañada</option>
                                 
  
                              </select>
                          </div>
                          <div class="input-wrapper">
                              <input class="input cm center" name="input-L-${linea}" id="tiempoMuertoMin-L-${linea}" type="number" min="0" max="60" onchange="allCalculate(id)">
                              <label class="label" for="tiempoMuertoMin-L-1">MINUTOS</label>
  
                          </div>
                      </div>
                      <div class="input-wrapper">
  
                          <label class="label" for="comentariosTextArea-L-${linea}">COMENTARIOS</label>
                          <textarea class="input textArea" placeholder="Escriba aqui tus comentarios "
                             name="input-L-${linea}" id="comentariosTextArea-L-${linea}" onchange="allCalculate(id)"></textarea>
                      </div>
  
                  </div>
              </td>
  
              <td>
                  <div class="wrapper">
                  <div class="box-wrapper">
                      <p class="label bold">M1</p>
                      <div class="input-wrapper">
                          <label class="label" for="pRateM1-L-${linea}">PICK UP RATE</label>
                          <input name="input-L-${linea}" id="pRateM1-L-${linea}" class="input pick end" min="0" max="100" step="0.001" type="number" onchange="allCalculate(id)">
                          <label for="pRateM1-L-${linea}">%</label>
                      </div>
  
                      <div class="input-wrapper">
                          <label for="pRateM1C1-L-${linea}" class="label">COMENTARIOS</label>
                          <select class=" select-css input pick" name="input-L-${linea}" id="pRateM1C1-L-${linea}" onchange="allCalculate(id)">
                              
                              <option value="" selected hidden></option>
                              <option value="Sin problemas">OK - Sin problemas</option>
                              <option value="Error de feeder">EF - Error de Feeder</option>
                              <option value="Error de boquilla">EB - Error de boquilla</option>
                              <option value="Error de reconocimiento">ER - Error de reconocimiento</option>
                              <option value="Problema de material">PMT - Problema de material</option>
                              <option value="Error de pick up">EP - Error de pick up</option>
                              <option value="Cambio de rollos">CR - Cambio de rollos</option>
                          </select>
                      </div>
                  </div>
                  <div class="box-wrapper">
                      <p class="label bold">M2</p>
                      <div class="input-wrapper">
                          <label class="label" for="pRateM2-L-${linea}">PICK UP RATE M2</label>
                          <input name="input-L-${linea}" id="pRateM2-L-${linea}" class="pick input end" min="0" max="100" step="0.001" type="number" onchange="allCalculate(id)">
                          <label for="pRateM2-L-${linea}">%</label>
                      </div>
                      <div class="input-wrapper">
                          <label class="label" for="pRateM2C2-L-${linea}">COMENTARIOS</label>
                          <select class=" select-css input pick" name="input-L-${linea}" id="pRateM2C2-L-${linea}" onchange="allCalculate(id)">
                              <option value="" selected hidden></option>
                              <option value="Sin problemas">OK - Sin problemas</option>
                              <option value="Error de feeder">EF - Error de Feeder</option>
                              <option value="Error de boquilla">EB - Error de boquilla</option>
                              <option value="Error de reconocimiento">ER - Error de reconocimiento</option>
                              <option value="Problema de material">PMT - Problema de material</option>
                              <option value="Error de pick up">EP - Error de pick up</option>
                              <option value="Cambio de rollos">CR - Cambio de rollos</option>
                          </select>
                      </div>
                  </div>
              </div>
              </td>
              <td class="acciones">
                  <div class="column box-wrapper">
                      <p class="label bold">ACCIONES</p>

                      <button type="reset"  onclick="lineStopeModal(id)" id="lineStop-L-${linea}" class="column">
                          <img class="icono" src="logos/001-mantenimiento.png" alt="no-logo">
                          LINEA PARADA
                      </button>
                     
                     ${buttonLimpiarAndContinue(linea)}

                      <a class="links" href="#box-table-L-${linea+1}">
                              <button type="submit" onclick="handleGuardar(id)" id="continuar-L-${linea}" class="column">
                                  
                                  <img class="icono" src="logos/003-guardar-el-archivo.png" alt="no-logo">
                                  GUARDAR
                              </button>
                          </a>
                  </div>
  
              </td>
  
              
              </table>
              </form>   
    `
  
  
  }

  const buttonLimpiarAndContinue = (linea)=>{
   
    
        
    if(linea == "1"){
        return  `
                        
       
      
                    <button type="reset" onclick="createModal(${linea})" id="borrar-L-${linea}" class="B-reset column">
                        <img class="icono" src="logos/006-goma-de-borrar.png" alt="no-logo">
                        LIMPIAR
                    </button>
                `
    }

    return  `
                     <button type="reset" onclick="createModal(${linea})" id="borrar-L-${linea}" class="B-reset column D-none">
                          <img class="icono" src="logos/006-goma-de-borrar.png" alt="no-logo">
                          LIMPIAR
                      </button>


                      <button type="submit" onclick="handleContinuarModelo(id)" id="cambioDeModelo-L-${linea}" class="B-reset column">
                          <img class="icono" src="logos/007-robot-de-fabrica.png" alt="no-logo">
                          <div>
                              <p> CONTINUAR</p>
                              <p>MODELO</p>
                          </div>
                      </button>
            `
  }

  const createModal = (linea)=>{
      let modal1 = document.getElementById("modal1")
     let hora = document.getElementsByName(`hora-L-${linea}`)[0].innerHTML
     let form = document.getElementById(`form-L-${linea}`)
   
     
     form.addEventListener("reset", function(event){
  
       event.preventDefault()
     });
     
    modal1.setAttribute("open","")
    modal1.innerHTML = `
                       <div class="color-front limpiar">
                        <div class="modal-box box-XD">
                   
                            <h3>"¿Esta Seguro que desea limpiar la infomacion del horario de ${hora}?"</h3>
                            <div class="modal" >
                       
                                <div class="svg-wrapper hover-green">
                                    <svg height="40" width="150">
                                    <rect id="shape" height="40" width="150" />
                                    <div id="text">
                                        <button class="boton" onclick="handleReset(id)" id="modal-L-${linea}" >
                                            SI
                                        </button>
                                    </div>
                                    </svg>
                                </div>

                                <div class="svg-wrapper hover-red">
                                    <svg height="40" width="150">
                                    <rect id="shape" height="40" width="150" />
                                    <div id="text">
                                        <button class="boton" onclick="window.modal1.close()">
                                            NO
                                        </button>
                                    </div>
                                    </svg>
                                </div>
                            </div>
                        </div>
                       </div>
           
                   `

  }
  const createModalValidacion = (idModal, data)=>{
     
        let datosRequeridos = ""
        let singlePluralStart = "Los datos:  "
        let singlePluralEnd = " son requeridos"
        let modalRequired = document.getElementById(idModal)
        let arrDatos = Object.entries(data).filter(dato =>  dato[1] === "")


         arrDatos.forEach((e, index) =>{

             let join =   e[0].split("_").join(" ")
          
           if(arrDatos.length == 1){
            singlePluralStart= "El dato "
            singlePluralEnd = "es requerido."

             return datosRequeridos = datosRequeridos + `<span class="datosRequeridos">${join}</span> `
           }

           if(e[1] === ""){

               if (index == arrDatos.length-2) 
                   return datosRequeridos = datosRequeridos + `<span class="datosRequeridos">${join}</span> `

               if (index == arrDatos.length-1) 
                return datosRequeridos = datosRequeridos + `y <span class="datosRequeridos">${join}</span> `
            
            return datosRequeridos = datosRequeridos + `<span class="datosRequeridos">${join}</span>, `
                

           }
        })


     modalRequired.setAttribute("open","")
     modalRequired.innerHTML = `
                      <div class="color-front guardar">
                       <div class="modal-box guardar-xD ">
            
                       <h3 class="justify">${singlePluralStart}${datosRequeridos}${singlePluralEnd}</h3>
                       <div class=" modal" >
                       
                       
                            <div class="svg-wrapper">
                            <svg height="40" width="150">
                            <rect id="shape" height="40" width="150" />
                            <div id="text">
                                <button class="boton" onclick="window.${idModal}.close()">
                                    ACEPTAR
                                </button>
                            </div>
                            </svg>
                            </div>
                       </div>
                       </div>
                       </div>
           
                   `

  }

const lineStopeModal = (id)=>{
    let linea = id.split("-")[2]
    let idModal = "lineaParada"
    let modal = document.getElementById(`${idModal}`)
    let form = document.getElementById(`form-L-${linea}`)
    
     
     
    form.addEventListener("reset", function(event){
 
      event.preventDefault()
    });
    
   
    modal.setAttribute("open","")

    modal.innerHTML = `

    <div class="color-front line-parada ${linea}">
        <form id="formModal-L-${linea}" >
            <div class="modal-box">
            
                <p class="modalP"> SELECCIONE LA CAUSA</p>
                <div class=" modal" >

                    <div class="box-wrapper">
                    <p class="label bold">LINEA PARADA</p>
                    <div class="input-wrapper">
                        <label for="lineaParada-L-${linea}" class="label">CAUSA</label>
                        <select class="select-css input" id="lineaParada-L-${linea}" required>
                                  
                                      <option value selected hidden></option>
                                      <option value="Linea parada">LP - Linena parada</option>
                                      <option value="Falta de plan">FP - Falta de plan</option>
                                      <option value="Cambio de modelo">CM - Cambio de modelo</option>
                                      <option value="Falta de operador">FO - Falta de operador</option>
                                      <option value="Falta de sistema">FS - Falta de sistema</option>
                                      <option value="Inicio de turno">IT - Inicio de turno</option>
                                      <option value="Descanso comida">DC - Descanso comida</option>
                                      <option value="Fin de turno">FT - Fin de turno</option>
                                      <option value="Limpieza 5s">L5S - Limpieza 5s</option>
                                      <option value="Ok">OK - Sin problema</option>
  
                              
                                  
                                      <option value="Falta de material">FM - Falta de material</option>
                                      <option value="Material manualmnete">MM - Material manualmente</option>
                                      <option value="Preparacion de materiales"">P.MAT - Preparacion de materiales</option>
  
                                 
                                 
  
                                      <option value="Problema de calidad">QC - Problema de calidad</option>
                                      <option value="Problema de maquina">PMQ - Problema de maquina</option>
                                      <option value="Problema horno">PH - Problema horno</option>
                                      <option value="Mantenimiento preventivo">MTP - Mantenimiento preventivo</option>
                                      <option value="Mantenimiento correctivo">MTP - Mantenimiento correctivo</option>
                                      <option value="Maquina dañada">MD - Maquina dañada</option>
                                  
  
                        </select>
                         

                    </div>
                          
                      
                    <div class="input-wrapper">
  
                        <label class="label" for="comentariosTextAreaModal-L-${linea}">COMENTARIOS</label>
                        <textarea class="input textAreaModal" placeholder="Escriba aqui tus comentarios" name="input-L-${linea}" id="comentariosTextAreaModal-L-${linea}" onchange="allCalculate(id)"></textarea>
                    </div>
  
                </div>


            </div>
            <div>
                <div class="svg-wrapper hover-green">
                  <svg height="40" width="150">
                  <rect id="shape" height="40" width="150" />
                  <div id="text">
                      <button type="submit" class="boton" onclick="handleLineStop(${idModal})">
                          ACEPTAR
                      </button>
                  </div>
                  </svg>
                </div>

                <div class="svg-wrapper hover-red">
                    <svg height="40" width="150">
                     <rect id="shape" height="40" width="150" />
                     <div id="text">
                      <button class="boton" onclick="window.${idModal}.close()">
                          CANCELAR
                      </button>
                     </div>
                    </svg>
                </div>
            </div>
        </div>
    </form>
</div>
               
    `

}
