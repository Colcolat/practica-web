console.log("Sitio cargado correctamente 🚀");

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    // Esta parte verifica si existe el formulario antes de agregar el evento
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("¡Gracias por tu mensaje!");
        });
    }
});