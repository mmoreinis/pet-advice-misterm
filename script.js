var bgImg = "pets.png";

function petRodent(){
    let pet = "";
    let cute = confirm("Do you wanna cute pet?");
    if (cute == true) {
        pet = "hamster";
        bgImg = "pets.png"
    }
    else {
        pet = "rat"; 
        bgImg = "rats.jpg" 
    }
    alert("Try a " + pet);
    petsBackground()
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

  function petsBackground(){
    console.log("Setting background to " + bgImg);
    let wall = document.getElementById("wall");
    wall.style.backgroundImage = "url('"+bgImg+"')";
  }
