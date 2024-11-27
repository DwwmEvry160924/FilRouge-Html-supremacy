const form = document.querySelector("form");
const blaz = document.querySelector(`#nom`);
const password = document.querySelector(`#mdp`);
const searchMdp = document.querySelector(`#mdpoubli`)
let seconnecter = document.querySelector(`#seconnecter`);



form.addEventListener("submit", (event) => {
    event.preventDefault("submit")
    if (blaz.value === "" || password.value === "") {
        alert("Veuillez remplir tout les champs")
    }
    else if (blaz.value === `EQUIP` && password.value === `DEV`) {
        window.location.href = "../pages_pro/espace_equipe/page-espace-equipe.html"
    }

    else if (blaz.value === `CHEF` && password.value === `PROJET`) {
        window.location.href = "../pages_pro/chef_projet/index_chef_projet.html"
    }


    else if (blaz.value === `ADMIN` && password.value === `SITE`) {
        window.location.href = "../pages_pro/admin/index_admin.html"
    }
    else {
        alert("mot de passe ou identifiant inconnu")
    }
});


let modal = document.getElementById ("modal");
let button = document.getElementById ("modalOpen");
let span = document.getElementById ("close") [0];
let envoyer = document.getElementById ("envoyer")
let reponse = document.createElement ("p")

modal.style.display = "none";
button.onclick= function (){
    modal.style.display="block";
}
span.onclick= function (){
    modal.style.display="none";
}

function reponse() {
    if (email){

    }reponse.textContent = "Un message vous a été transmis sur"+ email;
}













function toggleChat() {
    var chatPopup = document.getElementById("chatPopup");
    chatPopup.style.display = (chatPopup.style.display === "block") ? "none" : "block";
}
function sendMessage() {
    var chatInput = document.getElementById("chatInput");
    var message = chatInput.value.trim();
    if (message) {
        var chatBody = document.querySelector(".chat-body");
        var newMessage = document.createElement("p");
        newMessage.textContent = "Vous : " + message;
        chatBody.appendChild(newMessage);
        chatInput.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
    }
};




