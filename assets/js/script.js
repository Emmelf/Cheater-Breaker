console.log('hello world');

//Anti taille de fenêtre

function handleWindowResize() {
    alert("NON NON NON, REDUIT PAS MON QUIZZ !!!");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    generatePage(pageIndex);
  });
  
  window.addEventListener('resize', handleWindowResize);


//Anti clique droit.

document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

//Anti changement de fenêtre


//Anti copier coller