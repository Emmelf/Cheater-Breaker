console.log('hello world');

//Anti taille de fenêtre

function handleWindowResize() {
    alert("Réduire la fenêtre de quoi toi ???");
  }
  
document.addEventListener("DOMContentLoaded", function () {
  generatePage(pageIndex);
});

window.addEventListener('resize', handleWindowResize);


//Anti clique droit.

document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

//Anti changement de fenêtre 

document.addEventListener("visibilitychange",function(){
    if(document.visibilityState === "visible"){
        document.title = "Active Tab";
        window.location.href = "triche.html";
    }
    else{
        document.title = "Inactive Tab"
    }
});

/*
const mouseTarget = document.getElementById('page');

mouseTarget.addEventListener('mouseleave', e => {
    on soustrait le defilement de la page pour obtenir la vraie position du curseur 
   if (e.pageY - window.scrollY <= 0) {
      console.log("L'utilisateur tente de sortir de la page.");
   }
});
*/

//Anti copier coller