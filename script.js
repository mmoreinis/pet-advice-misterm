function petRodent(){
    var pet = "";
    var cute = confirm("Do you wanna cute pet?");
    if (cute==true) pet="hamster";
    else pet="rat"; 
    alert("Try a " + pet);
    petsBackground("pets.png");
  }

  
  function petAdvice(){
    var allergic = confirm("Are you allergic to fur? (OK = yes)");
    if (allergic == true) {
        var cute = confirm("Cute (OK) or Creepy (Cancel)?");
        if (cute == true) {

        }
    }
    else {  // allergic = false

    }
    alert("Get a " + pet +" !")
  }

  function petsBackground(bgImg){
    let wall = document.getElementById("wall");
    wall.style.background = 'url(bgImg) no-repeat center';
  }
