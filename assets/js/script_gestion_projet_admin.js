const gestionCompteContainer = document.querySelector('.gestion-compte-container'); //voir
const projects = JSON.parse(localStorage.getItem('projects')) || [];
// POP UP
const popupProjet = document.querySelector('#popup-projet');
const projectDetailsContainer = document.querySelector('.project-details');
const closeBtn = document.querySelector('.close-btn');

// effacer les projets existants
gestionCompteContainer.innerHTML = '';


projects.forEach((project, index) => {
  const card = document.createElement('div');
  card.classList.add('card-compte-admin');

  card.innerHTML = `
    <div class="card-column">
      <div class="ligne">
        <span><span class="dot ${project.status}"></span><h3>${project.name}</h3></span>
        <button class="dot-btn" data-index="${index}"><i class="bi bi-three-dots"></i></button>
      </div>
      <div class="ligne">
        <p>${project.chef}</p>
        <p><i class="bi bi-watch"></i> ${project.deadline}</p>
      </div>
    </div>
  `;

  // POP UP
  card.addEventListener('click', () => {

    popupProjet.style.display = 'flex';

    projectDetailsContainer.innerHTML = `
      <h2><strong>Nom :</strong>${project.name}</h2>
      <p><strong>Description :</strong> ${project.description}</p>
      <p><strong>Chef de projet: </strong> ${project.chef}</p>
      <p><i class="bi bi-watch"></i> ${project.deadline}</p>
      <p><strong>Statut : </strong> <span class="dot ${project.status}"></span></p>
      <div class="pop-buttons">
        <button id="edit-btn" class="btn">Modifier</button>
        <button id="delete-btn" class="btn">Supprimer</button>
      </div>
    `;

    // button supprimer
    document.getElementById('delete-btn').addEventListener('click', () => {
      const updateProjects = projects.filter((p) => p.name !== project.name);
      localStorage.setItem('projects', JSON.stringify(updateProjects));
      popupProjet.style.display = 'none';
      window.location.reload();
    });

    // button modifier
    document.getElementById('edit-btn').addEventListener('click', () => {
      alert(`Modifier le projet : ${project.name}`);
    });
  });

  gestionCompteContainer.appendChild(card);
});
// });
document.addEventListener('DOMContentLoaded', () => {
  const popupProjet = document.querySelector('#popup-projet');
  console.log(popupProjet);
});

console.log(document.querySelector('#popup-projet'));

// POP UP
closeBtn.addEventListener('click', () => {
  popupProjet.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popupProjet) {
    popupProjet.style.display = 'none';
  }
});
