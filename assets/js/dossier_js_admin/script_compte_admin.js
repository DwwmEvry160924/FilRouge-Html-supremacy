// Début partie Gestions des comptes admin

const cardsCompte = document.querySelectorAll('.card-compte-admin');
const popupCompte = document.querySelector('#popup-compte');
const popupNameCompte = document.querySelector('#popup-name-compte');
const popupMembre = document.querySelector('#popup-membre');
const popupTime = document.querySelector('#popup-time');
const closeBtnCompte = document.querySelector('.close-btn-compte');
const deleteBtnCompte = document.querySelector('#delete-btn-compte');

let comptes = [
  { name: "Nom compte", membre: "Membre 1", time: "6 heures", status: "vert"},
  { name: "Nom compte", membre: "Membre 2", time: "5 heures", status: "jaune"},
  { name: "Nom compte", membre: "Membre 3", time: "2 heures", status: "rouge"},

  { name: "Nom compte", membre: "Membre 4", time: "6 heures", status: "vert"},
  { name: "Nom compte", membre: "Membre 5", time: "5 heures", status: "vert"},
  { name: "Nom compte", membre: "Membre 6", time: "2 heures", status: "jaune"},

  { name: "Nom compte", membre: "Membre 7", time: "6 heures", status: "vert"},
  { name: "Nom compte", membre: "Membre 8", time: "5 heures", status: "jaune"},
  { name: "Nom compte", membre: "Membre 9", time: "2 heures", status: "jaune"},

  { name: "Nom compte", membre: "Membre 10", time: "6 heures", status: "rouge"},
  { name: "Nom compte", membre: "Membre 11", time: "5 heures", status: "vert"},
  { name: "Nom compte", membre: "Membre 12", time: "2 heures", status: "jaune"},

  { name: "Nom compte", membre: "Membre 13", time: "6 heures", status: "vert"},
  { name: "Nom compte", membre: "Membre 14", time: "5 heures", status: "rouge"},
  { name: "Nom compte", membre: "Membre 15", time: "2 heures", status: "rouge"},

  { name: "Nom compte", membre: "Membre 16", time: "6 heures", status: "vert"},
  { name: "Nom compte", membre: "Membre 17", time: "5 heures", status: "jaune"},
  { name: "Nom compte", membre: "Membre 18", time: "2 heures", status: "jaune"},
];


// POP UP
cardsCompte.forEach((card, index) => {
  card.addEventListener('click', () => {
    popupCompte.style.display = 'flex';
    const compteData = comptes[index];

    popupNameCompte.textContent = compteData.name;
    popupMembre.innerHTML = `<p><strong>Membre :</strong> ${compteData.membre}</p>`;
    popupTime.innerHTML = `<i class="bi bi-watch"></i> ${compteData.time}`;


    // button supprimer
    deleteBtnCompte.onclick = () => {
      suprimerCompte(index);
    };
  });
});
// fonction supprimer

function suprimerCompte(index) {
  comptes[index].status = "rouge";

  const cardDot = cardsCompte[index].querySelector('.dot');
  cardDot.classList.remove('jaune', 'vert');
  cardDot.classList.add('rouge');

  localStorage.setItem('comptes', JSON.stringify(comptes));

  popupCompte.style.display = 'none';

  alert(`Le compte "${comptes[index].name}" a été supprimé avec succès !`);
}

closeBtnCompte.addEventListener('click', () => {
  popupCompte.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popupCompte) {
    popupCompte.style.display = 'none';
  }
});


// Fin partie Gestions des comptes admin

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
];

let currentCommentaireIndex = null;
