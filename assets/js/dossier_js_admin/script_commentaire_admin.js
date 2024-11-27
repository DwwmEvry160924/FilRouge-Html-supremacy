// début partie gestion des commentaires
const cardsCommentaire = document.querySelectorAll('.card-commentaire-admin');
const popupCommentaire = document.querySelector('#popup-commentaire');// voir test
const popupNameCommentaire = document.querySelector('#popup-name-commentaire');// voir test avec commentaire au lieu de commentaire
const popupCommentaireMembre = document.querySelector('#popup-commentaire-membre');// voir test
const popupCommentaireTime = document.querySelector('#popup-commentaire-time');// voir test
const closeBtnCommentaire = document.querySelector('.close-btn-commentaire');// voir test
const editBtnCommentaire = document.querySelector('#edit-btn-commentaire');// voir test
const deleteBtnCommentaire = document.querySelector('#delete-btn-commentaire');// voir test

let commentaires = [
  { name: "Commentaire 1", membre: "Membre 1", time: "6 heures", status: "vert"},
  { name: "Commentaire 2", membre: "Membre 2", time: "5 heures", status: "jaune"},
  { name: "Commentaire 3", membre: "Membre 3", time: "2 heures", status: "rouge"},

  { name: "Commentaire 1", membre: "Membre 4", time: "6 heures", status: "vert"},
  { name: "Commentaire 2", membre: "Membre 5", time: "5 heures", status: "vert"},
  { name: "Commentaire 3", membre: "Membre 6", time: "2 heures", status: "jaune"},

  { name: "Commentaire 1", membre: "Membre 7", time: "6 heures", status: "jaune"},
  { name: "Commentaire 2", membre: "Membre 8", time: "5 heures", status: "rouge"},
  { name: "Commentaire 3", membre: "Membre 9", time: "2 heures", status: "vert"},

  { name: "Commentaire 1", membre: "Membre 10", time: "6 heures", status: "vert"},
  { name: "Commentaire 2", membre: "Membre 11", time: "5 heures", status: "jaune"},
  { name: "Commentaire 3", membre: "Membre 12", time: "2 heures", status: "rouge"},

  { name: "Commentaire 1", membre: "Membre 13", time: "6 heures", status: "vert"},
  { name: "Commentaire 2", membre: "Membre 14", time: "5 heures", status: "jaune"},
  { name: "Commentaire 3", membre: "Membre 15", time: "2 heures", status: "vert"},

  { name: "Commentaire 1", membre: "Membre 16", time: "6 heures", status: "rouge"},
  { name: "Commentaire 2", membre: "Membre 17", time: "5 heures", status: "jaune"},
  { name: "Commentaire 3", membre: "Membre 18", time: "2 heures", status: "rouge"},

  { name: "Commentaire 1", membre: "Membre 19", time: "6 heures", status: "vert"},
  { name: "Commentaire 2", membre: "Membre 20", time: "5 heures", status: "vert"},
  { name: "Commentaire 3", membre: "Membre 21", time: "2 heures", status: "jaune"},
];

let currentCommentaireIndex = null;

// POP UP Commentaire

cardsCommentaire.forEach((card, index) => {
  const dotBtn = card.querySelector('.dot-btn');

  dotBtn.addEventListener('click', () => {
    popupCommentaire.style.display = 'flex';

    currentCommentaireIndex = index;
    const commentaireData = commentaires[index];

    popupNameCommentaire.textContent = commentaireData.name;
    popupCommentaireMembre.innerHTML = `<p><strong>Membre :</strong> ${commentaireData.membre}</p>`;
    popupCommentaireTime.innerHTML = `<i class="bi bi-watch"></i> ${commentaireData.time}`;
  });
});

closeBtnCommentaire.addEventListener('click', () =>{
  popupCommentaire.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popupCommentaire) {
    popupCommentaire.style.display = 'none';
  }
});

editBtnCommentaire.addEventListener('click', () => {
  const nouveauCommentaire = prompt('Entrez le nouveau commentaire :');
  if (nouveauCommentaire) {
    commentaires[currentCommentaireIndex].name = nouveauCommentaire;

    const h3 = cardsCommentaire[currentCommentaireIndex].querySelector('h3');
    h3.textContent = nouveauCommentaire;

    alert('Commentaire modifié avec succès !');
    popupCommentaire.style.display = 'none';
  }
});

deleteBtnCommentaire.addEventListener('click', () => {
  commentaires[currentCommentaireIndex].status = "rouge";

  const dot = cardsCommentaire[currentCommentaireIndex].querySelector('.dot');
  dot.classList.remove('jaune', 'vert');
  dot.classList.add('rouge');

  alert(`Le commentaire "${commentaires[currentCommentaireIndex].name}" a été archivé avec succès !`);
  popupCommentaire.style.display = 'none';
});
