
//Text Live Formal

function inviteTextLive(formText, liveText) {
    document.getElementById(formText).onkeyup = function() {
    document.getElementById(liveText).textContent = this.value;
    };
}

inviteTextLive("NameTitle1","NameTitle1Live");
inviteTextLive("NameTitle2","NameTitle2Live");
inviteTextLive("Time","TimeLive");
inviteTextLive("Date","DateLive");
inviteTextLive("Location","LocationLive");
  


//Text Live Spring



//Text Live Art Deco




  
//Theme background change


function changeTheme(param) {

    let themeFormal = document.getElementById(`themeFormal`);

    if (param == "formal") {
       themeFormal.style.backgroundImage = 'url("images/WeddingByDesign_themes-01.jpg")';
    }

     else if (param == "spring") {
        themeFormal.style.backgroundImage = 'url("images/WeddingByDesign_themes-02.jpg")';
    }

    else if (param == "artDeco") {
        themeFormal.style.backgroundImage = 'url("images/WeddingByDesign_themes-03.jpg")';
     }

}
