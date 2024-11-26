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
      <h2><strong>Nom :</strong> <span id="project-name">${project.name}</span></h2>
      <p><strong>Description :</strong> <span id="project-description">${project.description}</span></p>
      <p><strong>Chef de projet: </strong> <span id="project-chef">${project.chef}</span></p>
      <p><i class="bi bi-watch"></i> <span id="project-deadline">${project.deadline}</span></p>
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
    const editBtn = document.getElementById('edit-btn');
    editBtn.addEventListener('click', () => {
      enableEditMode(project, index, editBtn);
    });
    // document.getElementById('edit-btn').addEventListener('click', () => {
    //   alert(`Modifier le projet : ${project.name}`);
    // });
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

// fonction modifier je le fait en passant en mode édition

function enableEditMode(project, index, editBtn) {
  const nameElement = document.getElementById('project-name');
  const descriptionElement = document.getElementById('project-description');
  const chefElement = document.getElementById('project-chef');
  const deadlineElement = document.getElementById('project-deadline');

  // je remplace les ligne par des champs d'entrée
  nameElement.innerHTML = `<input type="text" id="edit-name" value="${project.name}">`;
  descriptionElement.innerHTML = `<textarea id="edit-description">${project.description}</textarea>`;
  chefElement.innerHTML = `
    <select id="edit-chef" class="form-select">
      <option value="">Sélectionner un chef de projet</option>
      <option value="Allan" ${project.chef === "Allan" ? "selected" : ""}>Allan</option>
      <option value="David" ${project.chef === "David" ? "selected" : ""}>David</option>
      <option value="Salym" ${project.chef === "Salym" ? "selected" : ""}>Salym</option>
      <option value="Rym  " ${project.chef === "Rym  " ? "selected" : ""}>Rym  </option>
    </select>
  `;
  deadlineElement.innerHTML = `<input type="date" id="edit-deadline" value="${project.deadline}">`;

  //je change le bouton Modifier en Enregistrer (plus simple)
  editBtn.textContent = 'Enregistrer';
  editBtn.removeEventListener('click', enableEditMode);
  editBtn.addEventListener('click', () => {
    saveChanges(index);
  });
}

// fonction pour enregistrer les modifications
function saveChanges(index) {
  const updatedName = document.getElementById('edit-name').value;
  const updatedDescription = document.getElementById('edit-description').value;
  const updatedChef = document.getElementById('edit-chef').value;
  const updatedDeadline = document.getElementById('edit-deadline').value;

  // Vérifié que tous les champs sont remplis
  if (!updatedName || !updatedDescription || !updatedChef || !updatedDeadline) {
    alert('Veuillez remplir tous les champs !');
    return;
  }

  // je met à jour les données
  projects[index] = {
    ...projects[index],// permet de garder les données qui ne sont pas modifiées comme le status(essaie)
    name: updatedName,
    description: updatedDescription,
    chef: updatedChef,
    deadline: updatedDeadline,
  };

  localStorage.setItem('projects', JSON.stringify(projects));

  // alerte pour confirmer la modification et pop up fermé
  alert('Modifications enregistrées avec succès !');
  popupProjet.style.display = 'none';
  window.location.reload();
}
// Fin partie gestion projet admin

