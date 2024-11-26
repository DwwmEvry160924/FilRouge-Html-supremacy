function popupNotif() {
    let popup = document.getElementById("Notification");
    popup.classList.toggle("show");
}

const dropdownButton = document.querySelector(".dropdown-btn button");
const dropdownContent = document.querySelector(".dropdown-content");
let dropdownButtonFiltre = document.querySelector(
    ".dropdown-btn-filtre button"
);
const dropdownContentFiltre = document.querySelector(
    ".dropdown-content-filtre"
);
let calendar = document.querySelector(".calendar");
let days = document.querySelectorAll(".day");
let timeline = document.querySelector("timeline");
let enCours = document.querySelectorAll(".en-cours");
let termine = document.querySelectorAll(".termines");
let enRetard = document.querySelectorAll(".en-retard");
let projet = document.querySelectorAll(".event");

// let card = document.querySelectorAll('.event')

dropdownButton.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
});

dropdownButtonFiltre.addEventListener("click", () => {
    dropdownContentFiltre.classList.toggle("show");
});

dropdownContent.addEventListener("click", (event) => {
    let option = event.target.textContent;
    console.log(option);
    switch (option) {
        case "Jour":
            days[0].style.display = "block";
            for (let i = 1; i <= 4; i++) {
                days[i].style.display = "none";
            }
            break;

        case "3 Jours":
            days[(0, 1, 2)].style.display = "block";
            for (let i = 3; i <= 4; i++) {
                days[i].style.display = "none";
            }
            break;

        case "Semaine":
            for (let i = 0; i <= 4; i++) {
                days[i].style.display = "block";
            }
            break;
    }
});

dropdownContentFiltre.addEventListener("click", (e) => {
    let op = e.target.textContent;
    console.log(op);
    switch (op) {
        case "en cours":
            for (let i = 0; i < enCours.length; i++) {
                enCours[i].style.display = "block";
            }
            for (let i = 0; i <= 4; i++) {
                enRetard[i].style.display = "none";
                termine[i].style.display = "none";
            }
            break;

        case "terminés":
            for (let i = 0; i < termine.length; i++) {
                termine[i].style.display = "block";
            }
            for (let i = 0; i <= 4; i++) {
                enCours[i].style.display = "none";
                enRetard[i].style.display = "none";
            }
            break;

        case "en retard":
            for (let i = 0; i < enRetard.length; i++) {
                enRetard[i].style.display = "block";
            }
            for (let i = 0; i <= 5; i++) {
                enCours[i].style.display = "none";
                termine[i].style.display = "none";
            }
            break;
        case "tout":
            for (let i = 0; i < projet.length; i++) {
                projet[i].style.display = "block";
            }
    }
});

console.log(projet);
console.log(enCours);
console.log(enRetard);
console.log(termine);

console.log(days);

// localStorage chef de projet

const events = document.querySelectorAll(".events");
// effacer les projets existants
function clear() {
    for (let i = 0; i < events.length; i++) {
        events[i].innerHTML = "";
        console.log(events[i]);
    }
}



console.log(events);

const projects = JSON.parse(localStorage.getItem("projects")) || [];



projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.classList.add("event");
    // function projectDuration(){
    //     switch(true){
    //         case 

    //     } 
        
    // }

    card.innerHTML = `
      <div class="title">
          <div class="title-gauche">
              <span class="dot ${project.status}"></span>
              <p>${project.title}</p>
          </div>
          <div class="title-droit">
              <button class="dot-btn" data-index="${index}" ><i class="bi bi-three-dots"></i></button>
          </div>
      </div>
      <p class="time"><span>${project.chef}</span><span class="time-data"><i class="bi bi-watch"></i>${project.dateDebut}${project.dateFin}</span></p>
  `;
    

    let start = new Date(project.dateDebut);
    let end = new Date(project.dateFin);



    let monday = document.querySelector('.mon .events')
    let tuesday = document.querySelector('.tues .events')
    let wednesday = document.querySelector('.wed .events')
    let thursday = document.querySelector('.thurs .events')
    let friday = document.querySelector('.fri .events')

    console.log("ici", monday)
    let jour = end.getDay();

    console.log(jour)

    switch(true){
        case jour == 1:
            monday.appendChild(card);
        break;
        case jour == 2: 
            tuesday.appendChild(card);
        break;
        case jour == 3: 
            wednesday.appendChild(card);
        break; 
        case jour == 4:
            thursday.appendChild(card);
        break;
        case jour == 5:
            friday.appendChild(card);
        break;     
    }

    

    
});

console.log(projects);

