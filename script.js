var bgImg = "pets.png";
  
  function petAdvice(){
    let pet = "";  
    let allergic = confirm("Are you allergic to fur? (OK = yes)");
    if (allergic == false) {
        let cute = confirm("Cute (OK) or Creepy (Cancel)?");
        if (cute == true) {
            pet = "hamster";
            
        }
        else {     // cute == false
            pet = "rat";
            bgImg = "rats.jpg" 
        }
    }
    else {  // allergic = true
        let quiet = confirm("Quiet (OK) or Talkative(Cancel)?");
        if (quiet == true) {
        
        }
        else {      // quiet == false
        
        }
    }
    alert("Get a " + pet +" !")
    petsBackground()
  }

  function petsBackground(){
    console.log("Setting background to " + bgImg);
    let wall = document.getElementById("wall");
    wall.style.backgroundImage = "url('"+bgImg+"')";
  }
