
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.getElementById("mobile_menu");

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
});



// SAVING DATA IN JAVASCRIPT TO SAVE PARSING XMLDocument, ONLY SMALL DATA AND NO FREQUENT UPDATES 

const mainMovieTitle = document.getElementsByClassName("mainMovieTitle");

for (var i = 0; i < mainMovieTitle.length; i++) {
  mainMovieTitle[i].textContent = "SUPER MARIO BROS";
}


var mainMovieInfo = document.querySelectorAll('#mainMovInfo li');

mainMovieInfo[0].textContent = '7.4/10';
mainMovieInfo[1].textContent = '1h32m';
mainMovieInfo[2].textContent = 'Adventura, Comedia';
mainMovieInfo[3].textContent = '7.4/10';
mainMovieInfo[4].textContent = '1h32m';
mainMovieInfo[5].textContent = 'Adventura, Comedia';



var mpaRating = document.getElementsByClassName("pgRating");

for (var i = 0; i < mpaRating.length; i++) {
  mpaRating[i].innerHTML = "PG";
}


var infoBtn = document.getElementById("info");
var desc = document.getElementById("mainDescription");

infoBtn.addEventListener("click", () => {
  if (desc.style.visibility === "visible") {
    desc.style.visibility = "hidden";
    desc.style.opacity = "0";
  } else {
    desc.style.visibility = "visible";
    desc.style.opacity = "1";
  }
});