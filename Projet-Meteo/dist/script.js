let villeChoisie;

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {

        const url = 'https://api.openweathermap.org/data/2.5/weather?lon=' + position.coords.longitude + '&lat=' + position.coords.latitude + '&appid=18e39e5bbc98a4d9e69ca21e127bcb34&units=metric';
        //console.log(url)
        //console.log(position.coords.longitude)
        //console.log(position.coords.latitude)

        let requete = new XMLHttpRequest(); 
        requete.open('GET', url); 
        requete.responseType = 'json'; 
        requete.send(); 

        
        requete.onload = function() {
            if (requete.readyState === XMLHttpRequest.DONE) {
                if (requete.status === 200) {
                    let reponse = requete.response;
                    // console.log(reponse);
                    let temperature = reponse.main.temp;
                    let ville = reponse.name;
                    // console.log(temperature);
                    document.querySelector('#temperature_label').textContent = temperature;
                    document.querySelector('#ville').textContent = ville;
                } else {
                    alert('Un problème est intervenu, merci de revenir plus tard.');
                }
            }
        }
    }, erreur)
} else {
    villeChoisie = "Tokyo"
    recevoirTemperature(villeChoisie);
}



let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
    villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
    recevoirTemperature(villeChoisie);
});

function erreur() {
    villeChoisie = "Copenhague"
    recevoirTemperature(villeChoisie)
}


function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

    let requete = new XMLHttpRequest(); 
    requete.open('GET', url); 
    requete.responseType = 'json'; 
    requete.send(); 

    
    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                // console.log(reponse);
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                // console.log(temperature);
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;
            } else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
    }
}