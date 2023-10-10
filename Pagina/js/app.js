var typed = new Typed(".logo", {
    strings: ["Blog"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function mostrarIcono(elemento){
    elemento.style.padding = '1vh'
    let espacioAgregar = document.getElementById('iconos');
    espacioAgregar.innerHTML = "<i class='bi bi-instagram' id='instagram-icon'></i> <i class='bi bi-github id' id='github-icon'></i>";
}