var typed = new Typed(".logo", {
    strings: ["Blog"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function mostrarIconos(elemento) {
    const iconos = elemento.querySelector('.iconos-ig-gh');
    const nombre = elemento.querySelector('.nombre');

    // Mostrar los iconos con animación
    iconos.style.opacity = 1;
    iconos.style.transform = 'translateY(0)';
    iconos.style.transition = 'opacity 0.3s, transform 0.3s';

    // Guardar la posición original del nombre
    nombre.dataset.originalTranslateY = window.getComputedStyle(nombre).transform;
    
    // Aplicar una transformación para mantener el nombre en su lugar
    nombre.style.transform = 'translateY(' + nombre.offsetTop + 'px)';
    nombre.style.transition = 'transform 0.3s';
}

function ocultarIconos(elemento) {
    const iconos = elemento.querySelector('.iconos-ig-gh');
    const nombre = elemento.querySelector('.nombre');

    // Ocultar los iconos con animación
    iconos.style.opacity = 0;
    iconos.style.transform = 'translateY(20px)';
    iconos.style.transition = 'opacity 0.3s, transform 0.3s';

    // Restaurar la posición original del nombre
    nombre.style.transform = nombre.dataset.originalTranslateY;
    nombre.style.transition = 'transform 0.3s';
}