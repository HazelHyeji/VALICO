// const bcBackground = document.getElementById('home-title-BC');
// const adBackground = document.querySelector('.home-title-AD');
// const background = document.querySelector('.background');
// const fadeOutContainer = document.querySelector('.fade-out-container');
// const filter = 'win16|win32|win64|mac';

// function gradientTransitionBC() {
//   if (navigator.platform) {
//     if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
//       window.location.href = 'blockchain.html';
//       return;
//     }
//   }

//   background.classList.add('background-transition-BC');
//   //redirect to blockchain
//   setTimeout(() => {
//     fadeOutContainer.classList.add('fade-out');
//   }, 800);
//   setTimeout(() => {
//     window.location.href = 'blockchain.html';
//   }, 1200);
// }

// function gradientTransitionAD() {
//   if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
//     window.location.href = 'artdomain.html';
//     return;
//   }
//   background.classList.add('background-transition-AD');
//   //redirect to blockchain
//   setTimeout(() => {
//     fadeOutContainer.classList.add('fade-out');
//   }, 800);
//   setTimeout(() => {
//     window.location.href = 'artdomain.html';
//   }, 1200);
// }

// bcBackground.addEventListener('click', gradientTransitionBC);
// adBackground.addEventListener('click', gradientTransitionAD);

const bcBackground = document.getElementById("home-title-BC");
const adBackground = document.querySelector(".home-title-AD");
const background = document.querySelector(".background");
const fadeOutContainer = document.querySelector(".fade-out-container");

function gradientTransitionBC () {
    background.classList.add("background-transition-BC");
    //redirect to blockchain
    setTimeout(() => {
      fadeOutContainer.classList.add("fade-out");
    }, 800);
    setTimeout(() => {
      window.location.href = 'blockchain.html'
    }, 1200);
}

function gradientTransitionAD () {
  background.classList.add("background-transition-AD");
  //redirect to blockchain
  setTimeout(() => {
    fadeOutContainer.classList.add("fade-out");
  }, 800);
  setTimeout(() => {
    window.location.href = 'artdomain.html'
  }, 1200);
}

bcBackground.addEventListener("click", gradientTransitionBC);
adBackground.addEventListener("click", gradientTransitionAD);

