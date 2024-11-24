function popupNotif() {
    let popup = document.getElementById('Notification');
    popup.classList.toggle('show')
}


const dropdownButton = document.querySelector('.dropdown-btn button');
const dropdownContent = document.querySelector('.dropdown-content');
let calendar = document.querySelector('.calendar');
let days = document.querySelector('.day');
let timeline = document.querySelector('timeline');

dropdownButton.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

dropdownContent.addEventListener('click', (event) => {
  let option = event.target.textContent;

  switch (option) {
    case 'jour':
      days.forEach(day => { day.style.display = 'block'; }); 
      timeline.style.display = 'block';
      break;

    case '3 jours':
      days.forEach((day, index) => {
        if (index < 3) {
          day.style.display = "block";
        } else {
          day.style.display = "none";
        }
      });
      timeline.style.display = 'block';
      break;

    case 'Semaine':
      days.forEach(day => { day.style.display = 'block'; }); 
      timeline.style.display = 'block';
      break;
  }
});




