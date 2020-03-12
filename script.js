 function cerrar(action) {
     var background;
     var element_color;
     var eye;
     if(action == true){
         background = "indianred";
        element_color = "indianred";
        eye = "closed";
        mostrarContrasena();
     }else{
         background = "lightgray";
        element_color = "white";
        eye = "tear";
     }
     var button = document.getElementById("btn");
     button.innerHTML = "<img src='/"+eye+"-eye-fa.png' class='eye' />";
    document.getElementById("fcontainer").style.backgroundColor = background;
    var elements = document.getElementsByClassName("form-control");
    console.log(elements);
    for (var element of elements) {
        element.style.backgroundColor = element_color;
    }
    button.style.backgroundColor = element_color;
}

function limpiar(action){
    document.getElementById("btn").innerHTML = "<img src='/"+eye+"-eye-fa.png' class='eye' />";
}

function mostrarContrasena(){
    var tipo = document.getElementById("password");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}