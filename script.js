function checkForm(event) {
  event.preventDefault();
  var nom = document.getElementById("nom").value.trim();
  var prenom = document.getElementById("prenom").value.trim();
  var adresse = document.getElementById("adresse").value.trim();
  var email = document.getElementById("email").value.trim();
  var telephone = document.getElementById("telephone").value.trim();
  var date_naissance = document.getElementById("date_naissance").value.trim();
  var login = document.getElementById("login").value.trim();
  var password = document.getElementById("password").value.trim();
  var confirm_password = document
    .getElementById("confirm_password")
    .value.trim();

  if (
    !nom ||
    !prenom ||
    !adresse ||
    !email ||
    !telephone ||
    !date_naissance ||
    !login ||
    !password ||
    !confirm_password
  ) {
    showError(
      "Tous les champs sont obligatoires. Veuillez remplir tous les champs."
    );
    return false;
  }

  if (password !== confirm_password) {
    showError("Les mots de passe ne correspondent pas. Veuillez réessayer.");
    return false;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showError("Veuillez entrer une adresse e-mail valide.");
    console.log("email pas valide");
    return false;
  }

  // Masquer le formulaire
  document.querySelector(".form-container").style.display = "none";

  // Afficher le récapitulatif
  var recapDiv = document.getElementById("recap");
  recapDiv.style.display = "block";
  recapDiv.innerHTML = `
    <h2>Récapitulatif de l'inscription</h2>
    <ul style="list-style:none;padding:0;">
      <li><strong>Nom :</strong> ${nom}</li>
      <li><strong>Prénom :</strong> ${prenom}</li>
      <li><strong>Adresse :</strong> ${adresse}</li>
      <li><strong>Email :</strong> ${email}</li>
      <li><strong>Téléphone :</strong> ${telephone}</li>
      <li><strong>Date de naissance :</strong> ${date_naissance}</li>
      <li><strong>Login :</strong> ${login}</li>
    </ul>
    <div class="message success">Inscription réussie !</div>
  `;
  return false;
}

function showError(message) {
  var overlay = document.getElementById("error-overlay");
  var content = document.getElementById("error-content");
  var span = content.querySelector("span");
  span.textContent = message;
  overlay.style.visibility = "visible";
  console.log("Error shown:", message);
}

function hideError() {
  var overlay = document.getElementById("error-overlay");
  overlay.style.visibility = "hidden";
}
