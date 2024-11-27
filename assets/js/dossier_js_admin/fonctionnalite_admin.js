document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container");
  const popup = document.querySelector("#popup");
  const popupTitle = document.querySelector("#popup-title");
  const popupForm = document.querySelector("#popup-form");
  const popupNom = document.querySelector("#popup-nom");
  const popupDescription = document.querySelector("#popup-description");
  const popupClose = document.querySelector("#popup-close");
  const btnAjouter = document.querySelector("#btn-ajouter");

  let mode = ""; // ajouter ou modifier
  let currentBox = null; // Pour stocker l'élément en cours de modification

  // POP UP
  function openPopup(modePopup, box = null) {
    popup.style.display = "flex";

    mode = modePopup;
    currentBox = box;

    if (mode === "ajouter") {
      popupTitle.textContent = "Ajouter une fonctionnalité";
      popupNom.value = "";
      popupDescription.value = "";
    } else if (mode === "modifier") {
      popupTitle.textContent = "Modifier une fonctionnalité";
      popupNom.value = box.querySelector("h3").textContent.replace(/"/g, ""); // Supprimer les guillemets
      popupDescription.value = box.querySelector("p").textContent;
    }
  }

  function closePopup() {
    popup.style.display = "none";
  }

  btnAjouter.addEventListener("click", () => openPopup("ajouter"));

  popupClose.addEventListener("click", closePopup);

  // Ajouter ou modifier une fonctionnalité
  popupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nom = popupNom.value;
    const description = popupDescription.value;

    if (mode === "ajouter") {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
      <h3>"${nom}"</h3>
      <p>${description}</p>
      <div class="button-group">
        <button type="button" class="btn btn-primary btn-modifier">Modifier</button>
        <button type="button" class="btn btn-secondary btn-supprimer">Supprimer</button>
      </div>
    `;

      container.appendChild(box);
      addEventListeners(box);
    } else if (mode === "modifier" && currentBox) {
      currentBox.querySelector("h3").textContent = `"${nom}"`;
      currentBox.querySelector("p").textContent = description;
    }

    closePopup();
  });

  function addEventListeners(box) {
    const btnModifier = box.querySelector(".btn-modifier");
    const btnSupprimer = box.querySelector(".btn-supprimer");

    btnModifier.addEventListener("click", () => openPopup("modifier", box));
    btnSupprimer.addEventListener("click", () => {
      if (confirm("Voulez-vous vraiment supprimer cette fonctionnalité ?")) {
        box.remove();
      }
    });
  }

  document.querySelectorAll(".box").forEach(addEventListeners);
});
