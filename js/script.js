const titulo = document.querySelector("h1");

if (titulo) {
    titulo.style.cursor = "pointer";
    titulo.addEventListener("click", function() {
        // Genera un color aleatorio
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        
        console.log("¡Color de fondo cambiado a: #" + randomColor + "!");
    });
    
    // Agrega un pequeño mensaje visual para que sepan que pueden hacer clic
    const tooltip = document.createElement("p");
    tooltip.textContent = "(Haz clic en el título para cambiar el color de fondo)";
    tooltip.style.fontSize = "12px";
    tooltip.style.color = "#666";
    tooltip.style.textAlign = "center";
    titulo.after(tooltip);
}
