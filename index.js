//Menu hamburguesa 

// function hamburguesa (btn, panel, menu){
//     const d = document;

//     d.addEventListener('click', (e) => {

// if (e.target.matches(btn)){
//     d.querySelector(panel).classList.toggle("aparece")
//     d.querySelector.selector(menu).classList.toggle("aparece")
// }
//     if (e.target.matches(menu)){
//         d.querySelector(panel).classList.remove("aparece")
//         d.querySelector.selector(menu).classList.remove("aparece")
//     }
// })
// }

// document.addEventListener('DOMContentLoaded', () => {
//     hamburguesa("#nav_button", ".enlaces", ".nav-enlace")
// })

function accion(){
    var hamb = document.getElementsByClassName('nav-enlace');
    for (var i = 0; i <hamb.length; i++){
        hamb[i].classList.toggle('aparece');
    }
}


// Galería de fotos

var imagenesSrc = ["https://drive.google.com/uc?export=view&id=1CA3Hik0fldz-agkHU-0zw4jxW4ZMAZ-B", 
"https://drive.google.com/uc?export=view&id=1MydwXuV5SGH0dUjE1VXG_Lt20P_WAhRQ", 
"https://drive.google.com/uc?export=view&id=1tMQTTa4hp2r4WB56B-gKlG8_99YI8R54", 
"https://drive.google.com/uc?export=view&id=1mWOfNemwHmfDvcVTto0TYJMH4mdlOeC0", 
"https://drive.google.com/uc?export=view&id=1lS7QMqKHJUtWKWw7cU1W1Qzozd2gIRbR", 
"https://drive.google.com/uc?export=view&id=1qHXKQeEKwgShYRqIBQyf3TzyEslEfGSz", 
"https://drive.google.com/uc?export=view&id=1nS95JyLumNsPPdEtJFR1OiGZGzsmhjVa"

]

var indiceImagen = 0;

var foto = document.getElementsByClassName('slider');

function cambiarImagen(){

    slider.src = imagenesSrc[indiceImagen]
    
    if (indiceImagen < imagenesSrc.length-1){
        indiceImagen++;
    }
    else{
        indiceImagen = 0
    }
}
setInterval(cambiarImagen, 2500);



