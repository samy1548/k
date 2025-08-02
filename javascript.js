
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("imgModal");

  // Abre la imagen al hacer clic
  document.querySelectorAll(".producto-card img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  // Cierra el modal al hacer clic fuera de la imagen
  function cerrarModal() {
    modal.style.display = "none";
  }

  // Cierra al hacer clic fuera de la imagen también
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      cerrarModal();
    }
  });

