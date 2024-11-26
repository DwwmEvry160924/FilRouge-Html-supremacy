function popupNotif() {
    let popup = document.getElementById('Notification');
    popup.classList.toggle('show')
}


const dropdownButton = document.querySelector('.dropdown-btn button');
const dropdownContent = document.querySelector('.dropdown-content');
let dropdownButtonFiltre = document.querySelector('.dropdown-btn-filtre button')
const dropdownContentFiltre = document.querySelector('.dropdown-content-filtre');
let calendar = document.querySelector('.calendar');
let days = document.querySelectorAll('.day');
let timeline = document.querySelector('timeline');
let enCours = document.querySelectorAll('.en-cours')
let termine = document.querySelectorAll('.termines')
let enRetard = document.querySelectorAll('.en-retard')
let projet = document.querySelectorAll('.event')

// let card = document.querySelectorAll('.event')

dropdownButton.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

dropdownButtonFiltre.addEventListener('click', () => {
  dropdownContentFiltre.classList.toggle('show');
});




dropdownContent.addEventListener('click', (event) => {
  let option = event.target.textContent;
  console.log(option)
  switch (option) {
    case 'Jour':
      days[0].style.display = 'block'; 
      for(let i = 1; i <= 4; i++){
        days[i].style.display = 'none'
      }
      break;

    case '3 Jours':
      days[0,1,2].style.display = 'block'; 
      for(let i = 3; i <= 4; i++){
        days[i].style.display = 'none'
      }
      break;

    case 'Semaine':
      for(let i = 0; i <= 4; i++){
        days[i].style.display = 'block'
      }
      break;
  }
});

dropdownContentFiltre.addEventListener('click',(e) => {
  let op = e.target.textContent;
  console.log(op)
  switch(op){
    case 'en cours':
    for (let i = 0; i < enCours.length; i++) {
        enCours[i].style.display = 'block';
    } 
    for(let i = 0; i <= 4;i++){
      enRetard[i].style.display = 'none'
      termine[i].style.display = 'none'
    }
    break;

    case 'terminés': 
    for (let i = 0; i < termine.length; i++) {
      termine[i].style.display = 'block';
  }
    for(let i = 0; i <= 4;i++){
      enCours[i].style.display ='none'
      enRetard[i].style.display = 'none'
    }
    break;

    case 'en retard':
    for (let i = 0; i < enRetard.length; i++) {
        enRetard[i].style.display = 'block';
    }
    for(let i = 0; i <= 5;i++){
      enCours[i].style.display ='none'
      termine[i].style.display = 'none'
    }
    break;
    case 'tout':
    for (let i = 0; i < projet.length; i++) {
        projet[i].style.display = 'block';
    }
    
  }
});

console.log(projet)
console.log(enCours)
console.log(enRetard)
console.log(termine)

console.log(days)


