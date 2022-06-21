//funcion para genera valores random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
//funcion para ubicar el resultado de forma aleatoria en el mensaje
function generaMensaje(a,resultado) {
    
    parseInt(resultado)

    switch (a) {
        
        case 1:
            texto=("Opcion1 = "+resultado+ "\n" + "Opcion2 = "+(resultado+1)+ "\n" + "Opcion3 = "+(resultado+2)+ "\n" + "Escriba Esc para salir");
            return texto;
            
        case 2:
            texto=("Opcion1 = "+(resultado+1)+ "\n" + "Opcion2 = "+resultado+ "\n" + "Opcion3 = "+(resultado+2)+ "\n" + "Escriba Esc para salir");
            return texto;
        
        case 3:
            texto=("Opcion1 = "+(resultado+2)+ "\n" + "Opcion2 = "+(resultado+1)+ "\n" + "Opcion3 = "+resultado+ "\n" + "Escriba Esc para salir");
            return texto;
    };

}
//le asigno a a un valor entre 1 y 3
let a = getRandomInt(1,4)
//   let b = getRandomInt(1,4)
//   let c=0
//   alert(a)
//   alert(b)
// while (b==a){
//     b = getRandomInt(1,4)
// }
// alert("aca")
// if (a==1){
//     if(b==2){
//         c=3
//     }else{
//         c=2
//     }
// }
// alert("aaaaa"+c)
// if (a==2){
//     if (b==1){
//         c=3
//     }else{
//         c=1
//     }
// }
// if (a==3){
//     if (b==1){
//         c=2
//     }else{
//         c=3
//     }
// }
//alert(a)
//while (a==b)
//let x = Math.random()
let x = Math.floor(Math.random()*10);
//alert(x)
let y = Math.floor(Math.random()*10);
//alert(y)
let resultado=x+y
let nombre=prompt("Quien va a jugar?"+"\n"+ "Por favor ingrese su nombre"+"\n"+"Por cada problema resuleto corectamente, recibis 1 punto")
let mensaje=generaMensaje(a,resultado)
// switch (a) {
//     case 1:
//       //alert( 'Too small' );
//       mensaje=("Opcion1 = "+resultado+ "\n" + "Opcion2 = "+(resultado+1)+ "\n" + "Opcion3 = "+(resultado+2)+ "\n" + "Escriba Esc para salir")
//       break;
//     case 2:
//         mensaje=("Opcion1 = "+(resultado+1)+ "\n" + "Opcion2 = "+resultado+ "\n" + "Opcion3 = "+(resultado+2)+ "\n" + "Escriba Esc para salir")
//         break;
//     case 3:
//         mensaje=("Opcion1 = "+(resultado+2)+ "\n" + "Opcion2 = "+(resultado+1)+ "\n" + "Opcion3 = "+resultado+ "\n" + "Escriba Esc para salir")
//         break;
//     default:
//       alert( "I don't know such values" );
//   }
//let mensaje=("\n" + "Opcion1 = "+(resultado+2)+ "\n" + "Opcion2 = "+resultado+ "\n" + "Opcion3 = "+(resultado+1)+ "\n" + "Escriba Esc para salir")
let respuesta=prompt ("Resuelva:"+x+"+"+y +"\n"+ mensaje)
//asigno valor a opcion 
//let a = Math.floor(Math.random()*10);
//let b = Math.floor(Math.random()*10);
//let c = Math.floor(Math.random()*10);
//Sroce de resultados positivos
let score=0
//resultado=4
while (respuesta !="Esc") {
    parseInt(respuesta)
    if (!isNaN(respuesta)){
        //resultado = numero*2
        //alert("Ingreso el numero"+ numero)
        //alert(respuesta)
        if(respuesta==resultado){
            //agrego un punto al score
            score+=1
            alert("Felicitaciones "+ nombre+"\n"+"la respuesta es correcta "+ resultado+"\n"+"\n"+"Tu puntiacion es "+score+"\n"+"Continuemos")
            
            //resultado=9
            //vuelvo a obtener numeros aleatorios
            x = Math.floor(Math.random()*10);
            y = Math.floor(Math.random()*10);
            resultado=x+y
            //alert(x +"-"+y+"-"+resultado)
            a=getRandomInt(1,4)
            //alert(a)
            mensaje=generaMensaje(a,resultado)
            respuesta=prompt ("Resuelva:"+x+"+"+y + "\n" +mensaje)
        }else{
            alert("Incorrecto"+"\n"+ "Vamos "+nombre+" Intenta nuevamente"+"\n"+ "la respuesta correcta es "+resultado)
            //respuesta=prompt ("Resuelva:"+x+"+"+y + "\n" + "Opcion1 = 3"+ "\n" + "Opcion2 = "+resultado+ "\n" + "Opcion3 = 4"+ "\n" + "Escriba Esc para salir")
            //vuelvo a obtener numeros aleatorios
            x = Math.floor(Math.random()*10);
            y = Math.floor(Math.random()*10);
            resultado=x+y
            a=getRandomInt(1,4)
            //alert(a)
            mensaje=generaMensaje(a,resultado)
            respuesta=prompt ("Resuelva:"+x+"+"+y + "\n" +mensaje)
        }
    }else{
        alert("La opcion ingresada no es valida. El resultado debe ser numerico"+"\n"+nombre+" Por favor ingresa el resultado correcto")
        //vuelvo a obtener numeros aleatorios
        x = Math.floor(Math.random()*10);
        y = Math.floor(Math.random()*10);
        resultado=x+y
        a=getRandomInt(1,4)
        //alert(a)
        mensaje=generaMensaje(a,resultado)
        respuesta=prompt ("Resuelva:"+x+"+"+y + "\n" +mensaje)
    }
    
}
alert("Ingreso Esc. Saliendo")
