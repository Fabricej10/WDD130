const from=document.querySelector("form");

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jonathanaugustin90@gmail.com",
        Password : "475923323EFF2EAAAF089CC1B51F2E3389BA",
        To : 'jonathanaugustin90@gmail.com',
        From : "jonathanaugustin90@gmail.com",
        Subject : "Une réservation de chambre d’hôtel",
        Body : "Full name " + document.getElementById("name").value +
               "<br>Mail : " + document.getElementById("email").value+
               "<br>Numéro de téléphone: " + document.getElementById("phone").value+
               "<br>Référence: " + document.getElementById("refname").value+
               "<br>Heure d'arrivée: " + document.getElementById("check_in").value+
               "<br>Heure de départ: " + document.getElementById("check_out").value+
               "<br>Adultes: " +  document.getElementById("adults").value+
               "<br>Enfants: " + document.getElementById("childs").value+
               "<br>Chambres: " + document.getElementById("rooms").value
    }).then(
      message => Swal.fire({
        title: "Votre demande a été envoyée avec succès!",
        text: "Une fois que nous recevrons le formulaire déposé, nous vous contacterons sous peu pour confirmer la disponibilité de la chambre.",
        icon: "success"
      })
    );
}

from.addEventListener("submit", (e)=>{
    e.preventDefault();
    sendEmail();
});