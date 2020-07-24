/*
  Oscar Angel Espinoza Reyes
  -------------------------------------
  GitHub: https://github.com/oscar-er/
<<<<<<< HEAD
  Web: https://oscarreyes.alwaysdata.net
=======
  Web: https://oscarreyes.alwaysdata.net/
>>>>>>> d02d5f115910bb269a55d3ec2ec293adfac79878
*/


/* función para abrir el elemento modal, recibe dos parametros:
   1. Elemento modal.
   2. Botón para cerrar el elemento modal.
*/
function openModal(elementModal, elementClose){
  const windowModal = document.getElementById(elementModal);
  const buttonClose = document.getElementById(elementClose);
  const body = document.getElementsByTagName("body")[0];

  windowModal.style.display = "flex";
  body.style.overflow = "hidden";

  buttonClose.addEventListener("click", function(){
    windowModal.style.display = "none";
    body.style.overflow = "scroll";
  });

  window.addEventListener("click", function(event){
    if (event.target == windowModal) {
      windowModal.style.display = "none";
      body.style.overflow = "scroll";
    }
  });

}
