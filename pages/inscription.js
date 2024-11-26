document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    const identifiantInput = document.querySelector("#nom"); 
    const passwordInput = document.querySelector("#mdp"); 
    const confirmPasswordInput = document.querySelector("#mdp2"); 

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const identifiant = identifiantInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        if (!identifiant || !password || !confirmPassword) {
            alert("Tous les champs doivent être remplis !");
            return;
        }

        if (!specialCharRegex.test(password)) {
            alert("le mot de passe doit contenir au moins un caractère spécial !")
            return;
        }

        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas !");
            return;
        }

        alert("Inscription réussie !");
        window.location.href ="../pages_pro/espace_equipe/index_espace_equipe.html";
    });
});
