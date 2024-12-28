// Seleccionamos el contenedor de los corazones flotantes
const heartsContainer = document.querySelector(".hearts");

// Función para crear corazones flotantes
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  // Decidir la zona de generación
  const distribution = Math.random();
  let position;

  if (distribution < 0.4) {
    // 40% de probabilidad en la zona inferior izquierda (área anteriormente vacía)
    position = Math.random() * (window.innerWidth * 0.3);
  } else {
    // 60% de probabilidad distribuida en el resto de la pantalla
    position = Math.random() * window.innerWidth;
  }

  // Configuración del corazón
  heart.style.left = position + "px";

  // Variar el punto de inicio vertical
  // Para la zona inferior izquierda, comenzar más abajo
  if (distribution < 0.4) {
    heart.style.top =
      window.innerHeight * 0.7 +
      Math.random() * (window.innerHeight * 0.3) +
      "px";
  } else {
    heart.style.top = Math.random() * window.innerHeight + "px";
  }

  // Variación en la duración de la animación
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  // Variación en la opacidad
  heart.style.opacity = Math.random() * 0.7 + 0.3;

  // Variación en el tamaño
  const size = Math.random() * 10 + 15;
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  heartsContainer.appendChild(heart);

  // Eliminar el corazón después de la animación
  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

// Ajustar el contenedor de corazones al tamaño de la ventana
function updateHeartsContainerSize() {
  heartsContainer.style.width = window.innerWidth + "px";
  heartsContainer.style.height = window.innerHeight + "px";
}

// Actualizar tamaño cuando cambie la ventana
window.addEventListener("resize", updateHeartsContainerSize);
updateHeartsContainerSize();

// Aumentar la frecuencia de generación para la zona problemática
setInterval(createFloatingHeart, 250); // Aumentado de 300ms a 250ms
