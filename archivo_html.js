//***VERIFICO EN EL LOCALSTORAGE QUE YA ESTE EL USUARIO */
document.addEventListener('readystatechange', event => {

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
        //alert("hi 1");
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...)
    if (event.target.readyState === "complete") {
        const nombre="";
        const usr =localStorage.getItem("usuario")
        const avatarAnterior =localStorage.getItem("Avatar")
        const avatarAnteriorSRC =localStorage.getItem("AvatarSRC")
        //cargo puntaje de ultima jugada
        let puntuacionAnterior=localStorage.getItem("puntuacion")         
        puntuacionAnterior=puntuacionAnterior || 0
        if (isNaN(puntuacionAnterior)){
            puntuacionAnterior=0
            localStorage.setItem("puntuacion",0)

        }
                    

        localStorage.setItem("puntuacionAnterior",puntuacionAnterior)
        document.getElementById("pPuntuacionAnterior").innerHTML="Tu puntuacion anterior fue de: "+puntuacionAnterior
        document.getElementById("avatar0").src=avatarAnteriorSRC
        
        //reduzco opacidad las iamgenes de trofeos
        document.getElementById("trofeo0").style.opacity="0.1"
        document.getElementById("trofeo1").style.opacity="0.1"
        document.getElementById("trofeo2").style.opacity="0.1"
        if (usr){
            //alert(usr)
            document.getElementById("pJugador").innerHTML="Jugador: "+usr
            document.getElementById("presentacion").innerHTML="Bienvenido nuevamente "+ usr+" que bueno tenerte de regreso"
            const problemasJson=localStorage.getItem("problemas1")
            problemasAnt=JSON.parse(problemasJson)
            //cargo lista con problemas resueltos anteriormente
            let listaAnt = document.getElementById("listaAnt");

            if (localStorage.getItem("puntuacion")){
                //localStorage.setItem("puntuacionAnterior")
                document.getElementById("pPuntuacionAnterior").innerHTML="Tu puntuacion anterior fue de: "+puntuacionAnterior
                document.getElementById("pPuntuacionTotal").innerHTML = " Puntuacion total: "+puntuacionAnterior
            }
            for (const a of problemasAnt){
                let li = document.createElement("li");
                li.innerText = "Resolviste "+a.problema+" respondiendo "+a.res+". Sumaste "+a.puntos+" puntos";
                listaAnt.appendChild(li);

            }
        }else{

            //document.getElementById("botonCalculaPuntaje").hidden="hidden";
            document.getElementById("botonComenzar").hidden="hidden";   
        }
    }
});
// //****  MULTIJUGADOR */
// const jugadores=[]
// let btnJugadores = document.getElementById("botonJugadores");
// btnJugadores.addEventListener("click", crearJugadores);

// function crearJugadores(){
//     const JugadoresACrear=parseInt(document.getElementById("nJugadores").value)
//     let jugador=""
//     for(let x=0;x<JugadoresACrear;x++){
//             Jugador[x]=new Jugador(prompt("Nombre Jugador "+x))
//         jugadores.push({"nombre":Jugador[x].nombre})
//         alert (Jugador[x].nombre)
//     }

//     alert("aca")



//     //const parElement = document.getElementById("myPar");
//     alert(jugadores.length)
//     for (let i = 0; i < jugadores.length; i++) {
//         alert("voy a agregar")
//         console.log(jugadores[i]);
//         localStorage.setItem("jugadores", JSON.stringify(jugadores)); //store probelmas
//         //document.getElementById("pJugadores").innerHTML=jugadores[i].nombre;
//         alert("llego")
//         nom=jugadores[i].nombre
//         addElement(nom)


// }
// function addElement() {
//     // crea un nuevo div
//     // y añade contenido
//     alert("crea")
//     var newDiv = document.createElement("div");
//     var newContent = document.createTextNode(nom);
//     newDiv.appendChild(newContent); //añade texto al div creado.

//     // añade el elemento creado y su contenido al DOM
//     let currentDiv = document.getElementById("myPar");
//     currentDiv.appendChild(newDiv)
//     //document.body.insertBefore(newDiv, currentDiv);
//     alert("agregado")
//   }
//   for (let i = 0; i < jugadores.length; i++)[
//     alert (Jugador[i].nombre+Jugador[i].scoreTotal)
// ]
// }



// class Jugador {
//     constructor (nombre,score,scoreTotal,inicio, resultadoProblema){
//     this.nombre=nombre;
//     this.score=score;
//     this.scoreTotal=scoreTotal;
//     this.inicio=inicio;
//     this.resultadoProblema=resultadoProblema;
//     }
//     //sumo x por cada respuesta correcta
//     sumar(){
//         //alert(this.resultadoProblema+"en la funcion")
//         let result=parseInt(this.resultadoProblema)
//         //alert (result+"valor de result")
//         //switch (true){
//         if (result < 10){
//                 this.scoreTotal=this.scoreTotal+1;
//                 this.score=1;
//         }else{
//             if (result >= 10 && result < 20){
//                 this.scoreTotal=this.scoreTotal+5;
//                 this.score=5;
//             }else{
//                 if (this.resultadoProblema>= 20 && this.resultadoProblema < 30){
//                     this.scoreTotal=this.scoreTotal+10;
//                     this.score=10;

//                 }else{
//                     if (this.resultadoProblema>= 30 && this.resultadoProblema < 40){
//                         this.scoreTotal=this.scoreTotal+15;
//                         this.score=15;
//                     }else{
//                         if (this.resultadoProblema >= 40 && this.resultadoProblema < 50){
//                         this.scoreTotal=this.scoreTotal+20;
//                         this.score=20;
//                         }else{
//                             if (this.resultadoProblema>= 50 && this.resultadoProblema < 60){
//                             this.scoreTotal=this.scoreTotal+25;
//                             this.score=25;
//                             }else{
//                                 if (this.resultadoProblema>= 60){
//                                 this.scoreTotal=this.scoreTotal+30;
//                                 this.score=30;
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }

//     }


// }
// // //**fin creo jugadores */

//***FETCH API RICK AND MORTY ***/

fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8') 
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        ruta=data[0].image
        img=document.getElementById("imagen2")
        img.src=ruta
        for (let j = 0; j < data.length; j++){
            imgId="imagen"+j
            console.log(imgId)
            let imagen =document.getElementById(imgId)
            imagen.src=data[j].image
            imagen.alt=data[j].name
            console.log(imagen)
        }
    });

    document.querySelectorAll(".imagenes1").forEach(el => {
        el.addEventListener("click", e => {
            const id = e.target.getAttribute("id");
            let avatarsrc= document.getElementById(id).src
            document.getElementById("avatar0").src=avatarsrc
            //guardo el nombre del personaje en el local storage al hacer click
            localStorage.setItem("nombreAvatar",document.getElementById(id).alt)
            localStorage.setItem("Avatar",document.getElementById(id).alt)
            localStorage.setItem("AvatarSRC",document.getElementById(id).src)
            //alert("Seleccionaste a: "+document.getElementById(id).alt)
            //alert(avatarsrc)
            Swal.fire({
                title: 'Personaje',
                text: "Seleccionaste a: "+localStorage.getItem("nombreAvatar"),
                //text: "<img src='"+avatarsrc+"' style='width:150px;'>",
                
                //iconHtml: '<img src=avatarsrc>',
                icon: 'success',
                confirmButtonText: 'Continua',
                timer:2000,
                timerProgressBar:"true"
            })
            for (let i = 0; i < 8; i++){
                let img="imagen"+i
                let elemento = document.getElementById(img);
                elemento.style.opacity = "0.1";
                elemento.style.filter  = 'alpha(opacity=90)'; // IE fallback}
            }
            let elemento = document.getElementById(id);
            elemento.style.opacity = "1";
            elemento.style.filter  = 'alpha(opacity=90)'; // IE fallback}
            document.getElementById("presentacion").innerHTML="Ayuda a "+elemento.alt+" a resolver los siguientes problemas"
            //id.style.opacity= "0.5"
            const usr =localStorage.getItem("usuario")
            //alert(usr)
            if (usr){
                inicio()
            }else{
                Swal.fire({
                    title: "Ingresa tu nombre ",
                    text: "Seleccionaste a "+elemento.alt,
                    input: "text",
                    showCancelButton: true,
                    confirmButtonText: "Guardar",
                    cancelButtonText: "Cancelar",
                    animation: "slide-from-top",
                })
                .then(resultado => {
                    if (resultado.value) {
                        nombre = resultado.value;
                        localStorage.setItem("usuario",nombre)
                        document.getElementById("pJugador").innerHTML="Jugador: "+nombre
                        inicio()
                    }
                });
            }
            //al seleccionar avatar voy a inicio
            inicio()
            });   
    });
// const boxes = document.querySelectorAll('.imagenes1');

// boxes.forEach(box => {
//   box.addEventListener('click', function handleClick(event) {
//     console.log('box clicked', event, id);
//     console.log()

//     box.setAttribute('style', 'background-color: yellow;');
//   });
// });
        //console.log(data)
    //imagenPersonaje=data[0].image
    //console.log(imagenPersonaje)
    //
//****DETECTO CUANDO SE CLIECKEA EN NUEVA PARTIDA O COMENZAR
let btnInicio = document.getElementById("botonComenzar");
btnInicio.addEventListener("click", inicio);
let nuevo = document.getElementById("botonNuevo");
nuevo.addEventListener("click", borrar);

function borrar(){
    
    //limpio el html por si hay datos anteriores
    document.getElementById("pJugador").innerHTML = ""
    document.getElementById("pTiempo").innerHTML = ""
    document.getElementById("pTiempo").innerHTML = ""
    document.getElementById("pTipoRespuestas").innerHTML = ""
    document.getElementById("pPuntuacionTotal").innerHTML = " "
    document.getElementById("suma").innerHTML="";
    document.getElementById("1").hidden="hidden";
    document.getElementById("2").hidden="hidden";
    document.getElementById("3").hidden="hidden";
    //document.getElementById("festejo").hidden=true;
    document.getElementById("listaAnt").innerHTML="";
    document.getElementById("lListaActual").innerHTML="";
    
    //fin limpiar html
    //borro el local storage
    localStorage.clear()
    //localStorage.setItem("puntuacionAnterior",puntuacionAnterior)
    document.getElementById("pPuntuacionAnterior").innerHTML="Tu puntuacion anterior fue de: "+0
    document.getElementById("pPuntuacionTotal").innerHTML = " Puntuacion total: "+0
    document.getElementById("pPuntuacionJugada").innerHTML = "Puntos actuales: "+ 0
    
    // subo la opacidad de las imagenes de los personajes
    for (let i = 0; i < 8; i++){
        let img="imagen"+i
        let elemento = document.getElementById(img);
        elemento.style.opacity = "1";
        elemento.style.filter  = 'alpha(opacity=90)'; // IE fallback}
    }
    
    //reduzco opacidad las iamgenes de trofeos
    document.getElementById("trofeo0").style.opacity="0.1"
    document.getElementById("trofeo1").style.opacity="0.1"
    document.getElementById("trofeo2").style.opacity="0.1"
    //oculto botones
    //document.getElementById("botonCalculaPuntaje").hidden="hidden";
    document.getElementById("botonComenzar").hidden="hidden";
    
    Swal.fire({
        title: "Ingresa tu nombre y selecciona un personaje",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        animation: "slide-from-top",
    })
    .then(resultado => {
        if (resultado.value) {
            nombre = resultado.value;
            //alert("Hola, " + nombre);
            localStorage.setItem("usuario",nombre)
            //location.reload();
            alert("Selecciona un personaje")
            //inicio()
        }
    });
}

function inicio(){

    //***CAMBIO COLORES BOTONES***//
    let botonRespuesta1=document.getElementById("1")
    botonRespuesta1.onmouseover=()=>{
        botonRespuesta1.style.background="#4CAF50"
    }
    botonRespuesta1.onmouseout=()=>{
        botonRespuesta1.style.background="#fbf476"
    }
    let botonRespuesta2=document.getElementById("2")
    botonRespuesta2.onmouseover=()=>{
        botonRespuesta2.style.background="#4CAF50"
    }
    botonRespuesta2.onmouseout=()=>{
        botonRespuesta2.style.background="#fbf476"
    }
    let botonRespuesta3=document.getElementById("3")
    botonRespuesta3.onmouseover=()=>{
        botonRespuesta3.style.background="#4CAF50"
    }
    botonRespuesta3.onmouseout=()=>{
        botonRespuesta3.style.background="#fbf476"
    }
    //***FIN CAMBIO COLORES BOTONES** */

    //defino la clase Usuaio

    class Usuario {
        constructor (nombre,score,scoreTotal,inicio, resultadoProblema,opacidadTrofeo){
        this.nombre=nombre;
        this.score=score;
        this.scoreTotal=scoreTotal;
        this.inicio=inicio;
        this.resultadoProblema=resultadoProblema;
        this.opacidadTrofeo=opacidadTrofeo;
        }
        //sumo x por cada respuesta correcta
        sumar(){

            let result=parseInt(this.resultadoProblema)
            if (result < 10){
                    this.scoreTotal=this.scoreTotal+1;

                    this.score=1;
            }else{
                if (result >= 10 && result < 20){
                    this.scoreTotal=this.scoreTotal+5;
                    this.score=5;
                }else{
                    if (this.resultadoProblema>= 20 && this.resultadoProblema < 30){
                        this.scoreTotal=this.scoreTotal+10;
                        this.score=10;

                    }else{
                        if (this.resultadoProblema>= 30 && this.resultadoProblema < 40){
                            this.scoreTotal=this.scoreTotal+15;
                            this.score=15;
                        }else{
                            if (this.resultadoProblema >= 40 && this.resultadoProblema < 50){
                            this.scoreTotal=this.scoreTotal+20;
                            this.score=20;
                            }else{
                                if (this.resultadoProblema>= 50 && this.resultadoProblema < 60){
                                this.scoreTotal=this.scoreTotal+25;
                                this.score=25;
                                }else{
                                    if (this.resultadoProblema>= 60){
                                    this.scoreTotal=this.scoreTotal+30;
                                    this.score=30;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            //segun el scoretotal habilito los trofeos
            if (this.scoreTotal>=51){
                this.opacidadTrofeo=this.opacidadTrofeo+0.5;
                document.getElementById("trofeo0").style.opacity=this.opacidadTrofeo
                if(this.opacidadTrofeo>=1){
                    document.getElementById("trofeo0").style.opacity="1"
                    document.getElementById("trofeo1").style.opacity=this.opacidadTrofeo-1
                    document.getElementById("trofeo2").style.opacity="0.1"
                    if(this.opacidadTrofeo>=2){
                        document.getElementById("trofeo0").style.opacity="1"
                        document.getElementById("trofeo1").style.opacity="1"
                        document.getElementById("trofeo2").style.opacity=this.opacidadTrofeo-2
                    }
                    if(this.opacidadTrofeo>=3){
                        //alert("felicitaciones") 
                        //alert("Felicitaciones, ayudaste a "+localStorage.getItem("nombreAvatar"))
                        //setTimeout(finJuego(), 4000)
                        //alert("voy a alert con valor 2 para fin de juego")
                        //alertFunc(2)
                    }
                }
            }
        }
        calculaTiempo(){
            const final= new Date().getTime()
            const fInicio=this.inicio
            const tiempoTotal=(final-this.inicio)/1000
            return tiempoTotal
        }
    }
    //Fin Clase suario

    //muestro botones
    //document.getElementById("botonCalculaPuntaje").hidden=false;
    // document.getElementById("botonComenzar").hidden=false;
    //traigo del localstorage el usr anterior
    const usr =localStorage.getItem("usuario")
    //le asigno a a un valor entre 1 y 3 para respuestas ordenadas random
    //document.getElementById("boton1").hidden=false;
    
    //funcion para obtener avatar
    // const obtenerAvatar=(){
    //     var p2 = new Promise(function(resolve, reject) {
    //         setTimeout(function() {
    //           throw 'Uncaught Exception!';
    //         }, 1000);
    //       });
    //       p2.catch(function(e) {
    //         console.log(e); // Nunca será llamado
    //     alert("para continuar selecciona un avatar")

    //     let checkExist = setInterval(function() {
    //         //alert("entro en func")
    //         if (avatar) {
    //            alert("Exists!");
    //            clearInterval(checkExist);
    //         }
    //      }, 100); // check every 100ms
        
    //     // if (avatar){
    //     //     alert("ok")
    //     // }else{
    //     //     alert("no continua sin avatar")
    //     //     document.querySelectorAll(".imagenes1").forEach(el => {
            
    //     //         el.addEventListener("click", e => {
    //     //         const id = e.target.getAttribute("id");
    //     //         //console.log("Se ha clickeado el id "+id);
    //     //         //cargo en el sidebar el avatar del personaje seleccionado
    //     //         let avatarsrc= document.getElementById(id).src
    //     //         document.getElementById("avatar0").src=avatarsrc
    //     //         //guardo el nombre del personaje en el local storage al hacer click
    //     //         localStorage.setItem("nombreAvatar",document.getElementById(id).alt)
    //     //         alert("nombre personaje"+document.getElementById(id).alt)
    //     //         for (let i = 0; i < 8; i++){
    //     //             let img="imagen"+i
    //     //         let elemento = document.getElementById(img);
    //     //         elemento.style.opacity = "0.1";
    //     //         elemento.style.filter  = 'alpha(opacity=90)'; // IE fallback}
    //     //         }
    //     //         let elemento = document.getElementById(id);
    //     //         elemento.style.opacity = "1";
    //     //         elemento.style.filter  = 'alpha(opacity=90)'; // IE fallback}
    //     //         //alert("Elegiste Jugar con "+elemento.alt)
    //     //         //localStorage.setItem("avatar",nombre)
    //     //         document.getElementById("presentacion").innerHTML="Ayuda a "+elemento.alt+" a resolver los siguientes problemas"
    //     //         //id.style.opacity= "0.5"
                
    
    //     //         });
                
    //     //       });
              
    //     //        obtenerAvatar()
    //     // }
    // }
    // verifico si ya existe el usuario
    if (usr){
        nombre=usr
        document.getElementById("pJugador").innerHTML="Jugador: "+nombre
        //alert("llego aca")
        //localStorage.setItem("nombreAvatar",document.getElementById(id).alt)
    }else{
        //alert("no hay nombre - partida nueva")
        //nombre=document.getElementById("nombre").value
        //alert("verifico"+nombre)
        document.getElementById("pJugador").innerHTML="Jugador: "+nombre
        //alert("verifico avatar anterior")
        let avatar =localStorage.getItem("Avatar")
        //alert("verifico si existe avatar anterior"+avatar)
        if (avatar!=null){
            console.log("ok")
        }else{
            alert("selecciona un personaje para continuar")
            //eventoFuturo()
            //alert("1111"+eventoFuturo())

            // do {
            //     //alert("aca null")
            //     let avatar1 =localStorage.getItem("Avatar")
            //     //setTimeout(, 3000)
            //     //alert(avatar1)
            //   } while (avatar==="");
            //   alert(avatar +"saliendo")
            // while (avatar===""){
            //     alert("aca null")
            //     avatar =localStorage.getItem("Avatar")
            //     //i=i+1
            //     //setTimeout(alert("aa"), 2000)
            //     alert(avatar)
            // }
            //alert("salgo del while "+ avatar)

            // obtenerAvatar().then((response) =>{
            //     alert("hay avatar"+avatar);

            // }).catch((response){
            //     alert("no hay avatar") 
            // })
            // alert("salgo de obtenerAvatar")
            // //obtenerAvatar()
        }
        document.getElementById("presentacion").innerHTML="Bienvenido "+ nombre + "Ayuda a "+avatar+" a resolver los siguientes problemas"
        localStorage.setItem("usuario",nombre)
        const nombreIngresado=nombre
        //alert("nombre ingresado "+nombreIngresado)
    }
    const fechaInicio=new Date().getTime()
    //alert("aca")
    //alert("nombreIngresado es"+nombre + "fecha "+fechaInicio)

    //CREO EL OBJETO USUARIO
    const Usuario1=new Usuario(nombre,0,0,fechaInicio,0,0)
    //alert(Usuario1.nombre + "usuario1 nombre")
    //defino el array
    //**desestructuro el Usuario1 */
    const {nombre:usrNombre,score:puntos,scoreTotal}=Usuario1
    //alert(usrNombre+"nombre desestructurado y puntos" + puntos)
    //const array=[{id:0, problema:"---",res:"----",puntos:puntos}]
    const array=[]
    //const arrayAnt=[{id:0, problema:"---",res:"----",puntos:puntos}]
    id_problema=1

    //const usrNombre={"nombre":Usuario1.nombre}
    localStorage.setItem("problemas", JSON.stringify(array)); //store probelmas
    //alert("antes de jugar")
    jugar()

    //let botonSalir = document.getElementById("botonCalculaPuntaje");
    //botonSalir.addEventListener("click", salir);


    function jugar(){
        document.getElementById("1").style.background="#fbf476"
        document.getElementById("2").style.background="#fbf476"
        document.getElementById("3").style.background="#fbf476"
        function alertFunc(correcto) {
            //document.getElementById("festejo").hidden=true;
            document.getElementById("suma").innerHTML="";
            //document.getElementById("festejo").hidden=true;
            document.getElementById("1").style.background="#fbf476"
            document.getElementById("2").style.background="#fbf476"
            document.getElementById("3").style.background="#fbf476"
            
            if(correcto){
                Swal.fire({
                    title: 'OK!',
                    text: 'Respuesta Correcta',
                    icon: 'success',
                    confirmButtonText: 'Continua',
                    timer:2000,
                    timerProgressBar:"true"
                })

                Toastify({
                    text: " sumaste "+Usuario1.score+" puntos",
                    duration: 10000,
                    newWindow: true,
                    //close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    onClick: function(){} // Callback after click
                }).showToast();
                document.getElementById("pPuntuacionJugada").innerHTML = "Puntos actuales: "+ Usuario1.scoreTotal
                
                if(correcto==2){
                    
                    Swal.fire({
                        title: 'Felicitaciones',
                        text: 'Juego terminado, si quieres puedes continuar resolviendo problemas',
                        icon: 'success',
                        confirmButtonText: 'Continua',
                        timer:8000,
                        timerProgressBar:"true"
                    })
                }
                //jugar()
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Respuesta Incorrecta',
                    icon: 'error',
                    confirmButtonText: 'Continua',
                    timer:2000,
                    timerProgressBar:"true"
                })
            }
            jugar()
            //salir()
            //return true
        }

        //funcion para genera valores random
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        function valoresAleatorios() {
            x = Math.floor(Math.random()*100)+1;
            y = Math.floor(Math.random()*100)+1;
            resultado=x+y
            return x,y,resultado;
        }
        //*****funcion para ubicar el resultado de forma aleatoria en el mensaje*****
        function generaMensaje(a,valorBoton) {
            parseInt(a)
            switch (a) {

                case 1:
                    document.getElementById("1").innerText=valorBoton
                    document.getElementById("2").innerText=valorBoton+1
                    document.getElementById("3").innerText=valorBoton-1
                    return true;

                case 2:
                    document.getElementById("1").innerText=valorBoton+1
                    document.getElementById("2").innerText=valorBoton
                    document.getElementById("3").innerText=valorBoton-1
                    return true;

                case 3:
                    document.getElementById("1").innerText=valorBoton-1
                    document.getElementById("2").innerText=valorBoton+1
                    document.getElementById("3").innerText=valorBoton
                    return true;
            };
        };
        //***Fin funcion**** */
        //***objeto usuario****metodo sumar para generar el score final

        document.getElementById("1").removeAttribute("hidden")
        document.getElementById("2").removeAttribute("hidden")
        document.getElementById("3").removeAttribute("hidden")
            //document.getElementById("nombre").hidden=true

        //id para el objeto del array


        let a=0
        let resultado=0
        a = getRandomInt(1,4)
        resultado=0
        valoresAleatorios()
        resultado=x+y
        document.getElementById("suma").innerHTML=x+"+"+y
        valorBoton=resultado

        generaMensaje(a,valorBoton)

        //***VERIFICO QUE BOTON SE PRESIONO */


        //***FIN  */
        let respuesta=x+y
        let opcion1=document.getElementById("1")
        opcion1.onclick=()=>{

            // if (opcion1.id==a){
            //     resultadoCorrecto()
            //     //opcion1.style.background="green"
            // }else{
            //     resultadoCorrecto()
            // }
            opcion1.id==a ?resultadoCorrecto():resultadoErroneo()
        }
        let opcion2=document.getElementById("2")
        opcion2.onclick=()=>{
            opcion2.id==a ?resultadoCorrecto():resultadoErroneo()
            // if (opcion2.id==a){
            //     resultadoCorrecto()
            //     //opcion2.style.background="green"
            // }else{
            //     resultadoErroneo()
            // }
        }
        let opcion3=document.getElementById("3")
        opcion3.onclick=()=>{
            opcion3.id==a ?resultadoCorrecto():resultadoErroneo()
            // if (opcion3.id==a){
            //     resultadoCorrecto()
            //     //opcion2.style.background="green"
            // }else{
            //     resultadoErroneo()
            // }
        }
        //***SI EL RESULTADO ES ERRONEO**** */
        function resultadoErroneo(){

            document.getElementById("1").style.background="red"
            document.getElementById("2").style.background="red"
            document.getElementById("3").style.background="red"
            document.getElementById(a).style.background="#4CAF50"
            //REPRODUZCO ALERTA
            alerta=document.getElementById("alerta");
            alerta.play();
            let timeout = setTimeout(alertFunc, 2000);
        }
        //****SI EL RESULTADO ES CORRECTO*** */
        function resultadoCorrecto(){
            //alert("aca")
                //console.log(resultado)
                Usuario1.resultadoProblema=document.getElementById(a).innerText
                Usuario1.sumar()
                array.push({id:id_problema, problema:x+"+"+y, res:respuesta, puntos:Usuario1.score})
                dato="{id:id_problema, problema:x+"+"+y, res:respuesta, puntos:Usuario1.score}"
                //localStorage.setItem("problemas", JSON.stringify(dato))
                localStorage.setItem("problemas", JSON.stringify(array))
                localStorage.setItem("problemas1", JSON.stringify(array))
                const usrJson={"nombre":Usuario1.nombre,"puntos":Usuario1.score}
                //localStorage.setItem("problemas", JSON.stringify(dato))
                let puntuacionAnterior=localStorage.getItem("puntuacionAnterior")
               
                puntuacionAnterior=puntuacionAnterior||0
                //alert(puntuacionAnterior)
                let puntuacionTotal=parseInt(Usuario1.scoreTotal)+parseInt(puntuacionAnterior)
                //alert(puntuacionTotal)
                localStorage.setItem("puntuacionActual", puntuacionTotal)
                localStorage.setItem("puntuacion", puntuacionTotal)

                document.getElementById("pPuntuacionTotal").innerHTML = " Puntuacion total: "+puntuacionTotal
                //le sumo 1 para el proximo id
                id_problema+=1
                //document.getElementById("festejo").scr="/animacion.gif"
                document.getElementById(a).style.backgroundColor="green"
                aplausos=document.getElementById("aplausos");
                aplausos.play();
                //alert("antes de salir")
                salir()
                alertFunc(1)
                
                if(Usuario1.opacidadTrofeo==3){
                    //llamo alert func para alert de final de juego
                    alertFunc(2)
                }
        }
        
    //}

    //}
    
    function salir(){
        //alert("dentro de salir")
        //sumo puntuacion acumulada
        //let puntuacionAnterior=parseInt(localStorage.getItem("puntuacion"))
        
        const puntuacionAnterior=parseInt(localStorage.getItem("puntuacion"))|| 0
        //alert("salir"+puntuacionAnterior)
        let puntuacionTotal=parseInt(localStorage.getItem("puntuacionActual"))
        //let puntuacionTotal=parseInt(Usuario1.scoreTotal)+puntuacionAnterior
        //let puntuacionTotal=parseInt(Usuario1.score)+puntuacionAnterior
        //localStorage.setItem("puntuacion", puntuacionTotal)
        //alert("salir1"+puntuacionAnterior +"0"+puntuacionTotal)
        //******************paso array al html, primero lo ordeno por el resultado de forma ascendente**********************
        array.sort((a, b) => {
            return a.res - b.res;
        });
        //alert("dentro de salir1")
        let lista = document.getElementById("lListaActual");
        lista.innerHTML=""
        //Presento los problemas resuletos
        for (const a of array){
            let li = document.createElement("li");
            li.innerText = "Resolviste "+a.problema+" respondiendo "+a.res+". Sumaste "+a.puntos+" puntos";
            lista.appendChild(li);
           
        }
        //alert("dentro de salir2")
        //** RECORRO EL ARRAY PARA SABER CUANTOS PROBLEMAS DE 1 Y 2 CIFRAS SE RESOLVIERON*/
        let unaCifra=0
        let dosCifras=0
        for (const a of array){
            a.res<10 ? unaCifra+=1:dosCifras+=1;

        }
        //alert("dentro de salir3")
        document.getElementById("pJugador").innerHTML = "Felicitaciones "+Usuario1.nombre
        document.getElementById("pTiempo").innerHTML = " Resolviste "+array.length + " problemas en "+Usuario1.calculaTiempo()+" segundos"
        document.getElementById("pTiempo").innerHTML = " Resolviste los problemas en "+Usuario1.calculaTiempo()+" segundos"
        document.getElementById("pTipoRespuestas").innerHTML = " Resolviste "+unaCifra + " problemas de una cifra. Resolviste "+dosCifras + " problemas de dos cifras "
        document.getElementById("pPuntuacionTotal").innerHTML = " Puntuacion total: "+puntuacionTotal
        document.getElementById("suma").innerHTML="";
        document.getElementById("1").hidden="hidden";
        document.getElementById("2").hidden="hidden";
        document.getElementById("3").hidden="hidden";
        //document.getElementById("festejo").hidden=false;
        //let timeout = setTimeout(alertFunc, 2000);
        //alert("dentro de salir4")
        document.getElementById(a).style.backgroundColor="grey"
        //alert("saliendo de salir y voy a jugar")
        //jugar()
        //***agrego el array al local storage */

    }
}
}




