const btn = document.getElementById('btn'); // Obtenemos el botón por su ID

btn.addEventListener('click', () => { // Agregamos un event listener para detectar el clic
    $.ajax({
        url: "ejemplo.json",
        dataType: "json",
        success: function(data) {
        var comentarios = "";
    
          // Recorremos el arreglo de objetos y construimos el HTML necesario
          $.each(data, function(key, value) {
            comentarios += "<div class='testimonial-box'>";
                comentarios += "<div class='box-top'>";
                    comentarios += "<div class='profile'>";
                        comentarios += "<div class=profile-img>";
                            comentarios += '<img src="' + value.imagen + '"/>';
                        comentarios += "</div>";
                        comentarios += "<div class='name-user'>";
                            comentarios += "<strong>" + value.nombre + "</strong>"
                            comentarios += "<span>" + value.usuario + "</span>"   
                        comentarios += "</div>";
                    comentarios += "</div>";
                    comentarios += '<div class="reviews">   <i class="fas fa-star"></i> <i class="fas fa-star"></i>     <i class="fas fa-star"></i>       <i class="fas fa-star"></i>    <i class="fas fa-star"></i><!--Empty star-->     </div>';
                comentarios += "</div>";
                comentarios += '<div class="client-comment"> <p>' + value.comentario + '</p>  </div>';
            comentarios += "</div>";
          });
    
          // Agregamos el HTML al elemento con ID "comentarios"
          $(".testimonial-box-container").html(comentarios);
        }
      }); // Hacemos algo cuando se hace clic en el botón, en este caso, mostramos un mensaje en la consola.
});