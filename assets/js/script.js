console.log('hello world');


function handleWindowResize() {
    alert("NON NON NON, REDUIT PAS MON QUIZZ !!!");
  }
  
  function handleRightClick(event) {
    event.preventDefault();
    alert("CLIQUE DROIT DE QUOI TOI ?");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    generatePage(pageIndex);
  });
  
  window.addEventListener('resize', handleWindowResize);
  document.addEventListener('contextmenu', handleRightClick); 