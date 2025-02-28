function petRodent(){
    var pet = "";
    var cute = confirm("Do you wanna cute pet?");
    if (cute==true) {
        pet = "hamster";
        petsBackground("pets.png");
    }
    else {
        pet="rat"; 
        petsBackground("rats.png");
    }
    alert("Try a " + pet);
  }

  
  function petAdvice(){
    let allergic = confirm("Are you allergic to fur? (OK = yes)");
    if (allergic == true) {
        let cute = confirm("Cute (OK) or Creepy (Cancel)?");
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
