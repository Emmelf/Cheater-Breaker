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

//Anti copier coller