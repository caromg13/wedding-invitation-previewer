
//Text Live Formal

function liveTextFormal(formText, themeFormalLive) {
    document.getElementById(formText).onkeyup = function() {
    document.getElementById(themeFormalLive).textContent = this.value;
    };
}

liveTextFormal("formText","themeFormalLive");
  


//Text Live Spring

function liveTextSpring(formText, themeSpringLive) {
    document.getElementById(formText).onkeyup = function() {
    document.getElementById(themeSpringLive).textContent = this.value;
    };
}

liveTextSpring("formText","themeSpringLive");



//Text Live Art Deco

function liveTextArtDeco(formText, themeArtDecoLive) {
    document.getElementById(formText).onkeyup = function() {
    document.getElementById(themeArtDecoLive).textContent = this.value;
    };
}

liveTextArtDeco("formText","themeArtDecoLive");



  
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
