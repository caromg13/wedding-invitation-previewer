
//Text Live Formal

function inviteTextLive(formText, liveText) {
    document.getElementById(formText).onkeyup = function() {
    document.getElementById(liveText).textContent = this.value;
    };
}

inviteTextLive("NameTitle1","NameTitle1Live");
inviteTextLive("NameTitle2","NameTitle2Live");
inviteTextLive("Date","DateLive");
inviteTextLive("Time","TimeLive");
inviteTextLive("Location","LocationLive");
  


//Theme font style change

// function changeTextTheme(formalText, springText, artDecoText) {
 //   document.getElementById(formalText).onclick = function() {
 //   document.getElementById(springText).textStyle = this.value;
 //   document.getElementById(artDecoText).textStyle = this.value;
 //   };
//}

// changeTextTheme("formalTextLive", "springTextLive", "artDecoTextLive");





////////////


function changeTextTheme(param) {

    let formalTextLive = document.getElementById(`formalTextLive`).value;

    if (param == "formal") {
        formalTextLive =document.getElementById(`formalTextLive`).textContent = "Help me";

    }
     else if (param == "spring") {
        formalTextLive =document.getElementById(`springTextLive`);
    }

    else if (param == "artDeco") {
        formalTextLive =document.getElementById(`artDecoTextLive`);
     }

}




 
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
