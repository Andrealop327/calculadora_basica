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



}

renderizarGUI();