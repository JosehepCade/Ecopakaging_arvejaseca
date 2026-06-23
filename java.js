// ==========================
// MENÚ RESPONSIVO
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("activo");

});

}


// ==========================
// BOTÓN VOLVER ARRIBA
// ==========================

const btnTop = document.getElementById("btnTop");

if(btnTop){

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

btnTop.classList.add("mostrar");

}else{

btnTop.classList.remove("mostrar");

}

});

btnTop.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}


// ==========================
// CONTADORES ANIMADOS
// ==========================

const counters =
document.querySelectorAll(".contador");

counters.forEach(counter=>{

const actualizar = ()=>{

const objetivo =
+counter.getAttribute("data-target");

const actual =
+counter.innerText;

const incremento =
objetivo / 100;

if(actual < objetivo){

counter.innerText =
Math.ceil(actual + incremento);

setTimeout(actualizar,20);

}else{

counter.innerText = objetivo;

}

};

actualizar();

});


// ==========================
// APARICIÓN AL HACER SCROLL
// ==========================

const elementos =
document.querySelectorAll(".animar");

const mostrarElemento = ()=>{

elementos.forEach(el=>{

const posicion =
el.getBoundingClientRect().top;

const pantalla =
window.innerHeight;

if(posicion < pantalla - 100){

el.classList.add("visible");

}

});

};

window.addEventListener("scroll",mostrarElemento);

mostrarElemento();


// ==========================
// GALERÍA MODAL
// ==========================

const imagenes =
document.querySelectorAll(".galeria img");

const modal =
document.getElementById("modal");

const modalImg =
document.getElementById("modal-img");

const cerrar =
document.getElementById("cerrar");

if(imagenes.length > 0){

imagenes.forEach(img=>{

img.addEventListener("click",()=>{

modal.style.display = "flex";

modalImg.src = img.src;

});

});

}

if(cerrar){

cerrar.addEventListener("click",()=>{

modal.style.display = "none";

});

}


// ==========================
// MODO OSCURO
// ==========================

const darkBtn =
document.getElementById("darkMode");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

localStorage.setItem(
"modoOscuro",
document.body.classList.contains("dark")
);

});

}

if(localStorage.getItem("modoOscuro") === "true"){

document.body.classList.add("dark");

}


// ==========================
// FILTRO PUNTOS DE VENTA
// ==========================

const buscador =
document.getElementById("buscar");

if(buscador){

buscador.addEventListener("keyup",()=>{

const valor =
buscador.value.toLowerCase();

const ciudades =
document.querySelectorAll(".ciudad");

ciudades.forEach(ciudad=>{

if(
ciudad.textContent
.toLowerCase()
.includes(valor)
){

ciudad.style.display = "block";

}else{

ciudad.style.display = "none";

}

});

});

}


// ==========================
// ACORDEÓN SEGUNDO USO
// ==========================

const acordeones =
document.querySelectorAll(".acordeon");

acordeones.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.classList.toggle("activo");

const panel =
btn.nextElementSibling;

if(panel.style.maxHeight){

panel.style.maxHeight = null;

}else{

panel.style.maxHeight =
panel.scrollHeight + "px";

}

});

});


// ==========================
// SLIDER AUTOMÁTICO
// ==========================

let slideIndex = 0;

const slides =
document.querySelectorAll(".slide");

function mostrarSlides(){

slides.forEach(slide=>{

slide.style.display = "none";

});

slideIndex++;

if(slideIndex > slides.length){

slideIndex = 1;

}

if(slides.length > 0){

slides[slideIndex - 1].style.display = "block";

}

setTimeout(mostrarSlides,4000);

}

mostrarSlides();


// ==========================
// BARRA DE PROGRESO ECOLÓGICA
// ==========================

const progreso =
document.getElementById("progreso");

if(progreso){

let porcentaje = 0;

const intervalo = setInterval(()=>{

if(porcentaje >= 85){

clearInterval(intervalo);

}else{

porcentaje++;

progreso.style.width =
porcentaje + "%";

progreso.innerText =
porcentaje + "%";

}

},20);

}