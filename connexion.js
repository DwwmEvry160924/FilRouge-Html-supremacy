const name = document.getElementById("nom").value;
const password = document.getElementById("mdp").value;
let seconnecter = document.getElementById("seconnecter")

seconnecter.addEventListener("click", () => {
    if (name === "" || password === "") {
        alert("Veuillez remplir tout les champs")
    }
    else if (name === "RELIMIEN" && password === "DEV") {
        window.location.href = "../pages_pro/espace_equipe/index_espace_equipe.html"
    }
    else {
        alert("mot de passe ou identifiant inconnu")
    }
})

