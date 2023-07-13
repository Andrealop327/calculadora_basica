
var  botones = ["7","8","9","+","4","5","6","-","1","2","3","*","0",".","=","/",];


function renderizarGUI(){
     // DIV PARA LA CALCULADORA GLOBAL
    //crear el elemento
    const divCalculadora= document.createElement("div")
    //Agregar atributos 
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("class", "text-center");
    divCalculadora.setAttribute("style", "width:50%; margin:0 auto;") ;
    //insertar elementos en el DOM
    document.body.appendChild(divCalculadora);

// DIVICIÓN DE LA PANTALLA

    const divPantalla= document.createElement("div")
    divPantalla.setAttribute("id","divPantalla");
    divCalculadora.appendChild(divPantalla);

// PANTALLA
    const pantalla =document.createElement("input")
    pantalla.setAttribute("id", "pantalla");
    pantalla.setAttribute("type", "text");
    pantalla.setAttribute("value", "0");
    pantalla.setAttribute("disabled", "true");
    pantalla.setAttribute("class","form-control text-right ");
    divPantalla.appendChild(pantalla);


// DIVICIÓN DE Los botones
const divBotones = document.createElement("div")
divBotones.setAttribute("id", "botones");
divCalculadora.appendChild(divBotones);
// recorer el arreglo para generar los botones
for(let i=0; i<botones.length; i++){
     // crear filas
     if(i%4==0){
        const divFila= document.createElement("div");
        divFila.setAttribute("class", "row");
        divBotones.appendChild(divFila);
     }

    let boton=document.createElement("button");
    boton.setAttribute("id", "boton"+botones[i]);
    boton.setAttribute("class", "btn btn-info col-3 border-white");
    boton.innerHTML=botones[i];

// agregar un escuchador de eventos a cada boton o evetlistener recibe dos parametros 
    boton.addEventListener("click", function(){
    procesarEvento(boton);
     })

    divBotones.lastChild.appendChild(boton);
   }
   const divBoton= document.createElement("div")
   divBoton.setAttribute("id","boton");
   divCalculadora.appendChild(divBoton);

// div para boton reset
   const divBoton2= document.createElement("div")
   divBoton2.setAttribute("id","divBoton2");
   divCalculadora.appendChild(divBoton2);

   //
   let  reset = document.createElement("INPUT");
   reset.setAttribute("type", "reset");
   reset.setAttribute("class", "row col-5 mt-4 md-2");
   divPantalla.appendChild(reset)
   
   
}
function procesarEvento(boton){
    let miPantalla= document.getElementById("pantalla");

    if (miPantalla.value=="0"){
        miPantalla.value="";
    }
    if(boton.innerHTML != "="){
        miPantalla.value+=boton.innerHTML;
    }
    
    else{
        //procesar la expresión con math.js
        try {
            let resultado=math.evaluate(miPantalla.value);  
            miPantalla.value=resultado;  
        } catch (error) {
            alert("no sirve");
        }  
    }
}












renderizarGUI();