document.addEventListener("DOMContentLoaded", function() {
    const techStackItems = document.querySelectorAll('.techstack-item'); // Seleccionamos todos los items de la techstack
    const imageThumb = document.querySelectorAll('.image.thumb'); // Seleccionamos los contenedores de la imagen (o un contenedor específico si solo hay uno)
  
    // Función que se ejecuta cuando el mouse entra en un item de techstack
    techStackItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        // Desactivar el hover en la imagen cuando el mouse está sobre un item de techstack
        console.log("Mouse left techstack item: " + item.dataset.tech); // Imprime el nombre de la tecnología
        imageThumb.forEach(thumb => {
          console.log("img thumb: " + thumb.style.pointerEvents);
          thumb.style.pointerEvents = 'none'; // Desactivar eventos de puntero en el contenedor
        });
        item.style.pointerEvents = 'auto'; // Aseguramos que el item de techstack siga recibiendo los eventos de puntero
      });
  
      // Función cuando el mouse sale del item de techstack
      item.addEventListener('mouseleave', function() {
        // Volver a activar el hover en la imagen cuando el mouse sale del item de techstack
        imageThumb.forEach(thumb => {
          thumb.style.pointerEvents = 'auto'; // Reactivar eventos de puntero en el contenedor
        });
      });
    });
  });

  