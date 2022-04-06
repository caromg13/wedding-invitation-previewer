
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
  





//Theme background and style changes



const name1Live = document.getElementById("NameTitle1Live")
const name2Live = document.getElementById("NameTitle2Live")
const dateLive = document.getElementById("DateLive")
const timeLive = document.getElementById("TimeLive")
const locationLive = document.getElementById("LocationLive")

 



function changeTheme(param) {

    let themeFormal = document.getElementById(`themeFormal`);

    if (param == "formal") {
       themeFormal.style.backgroundImage = 'url("images/WeddingByDesign_themes-01.jpg")';
       themeFormal.style.color = 'white';

       name1Live.style.fontFamily = "Mrs Eaves";
       name2Live.style.fontFamily = "Mrs Eaves";
       dateLive.style.fontFamily = "Mrs Eaves";
       timeLive.style.fontFamily = "Mrs Eaves";
       locationLive.style.fontFamily = "Mrs Eaves";
    }

     else if (param == "spring") {
        themeFormal.style.backgroundImage = 'url("images/WeddingByDesign_themes-02.jpg")';
        themeFormal.style.color = 'orange';

        name1Live.style.fontFamily = "Hummingbird";
        name2Live.style.fontFamily = "Hummingbird";
        dateLive.style.fontFamily = "Hummingbird";
        timeLive.style.fontFamily = "Hummingbird";
        locationLive.style.fontFamily = "Hummingbird";
    }

    else if (param == "artDeco") {
        themeFormal.style.backgroundImage = 'url("images/WeddingByDesign_themes-03.jpg")';
        themeFormal.style.color = '#009444';

        name1Live.style.fontFamily = "Semplicita Pro"
        name2Live.style.fontFamily = "Semplicita Pro"
        dateLive.style.fontFamily = "Semplicita Pro"
        timeLive.style.fontFamily = "Semplicita Pro"
        locationLive.style.fontFamily = "Semplicita Pro"

     }

}
