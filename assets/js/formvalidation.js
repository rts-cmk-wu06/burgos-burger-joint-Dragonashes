window.addEventListener('load', function () {
    document.querySelector("#nyhedsbrev").onsubmit = Valider;
});
function Valider() {
    var AntalFejl = 0;
    var FejlBesked1 = "";
    if (document.querySelector('#InputNavn').value == "") {
        AntalFejl += 1;
        FejlBesked1 = "Skriv dit navn";
    }
    else {
        var regexpbogstaver = /^[a-zA-Z ]+$/;
        if (!regexpbogstaver.test(document.querySelector('#InputNavn').value)) {
            AntalFejl += 1;
            FejlBesked1 = "Navn må kun være bogstaver og mellemrum";
        }
    }
    var FejlBesked2 = "";
    if (document.querySelector('#Inputtelefon').value == "") {
        AntalFejl += 1;
        FejlBesked2 = "Skriv din telefon";
    }
    else {
        var regexptal = /^[0-9]+$/;
        if (!regexptal.test(document.querySelector('#Inputtelefon').value)) {
            AntalFejl += 1;
            FejlBesked2 += "telefon må kun være tal";
        }
    }
    var FejlBesked3 = "";
    if (document.querySelector('#InputMail').value == "") {
        AntalFejl += 1;
        FejlBesked3 = "Skriv din Email";
    }
    else {
        var regexpmail = /^[A-Za-zÆØÅæøå0-9_.]+[@]{1}[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!regexpmail.test(document.querySelector('#InputMail').value)) {
            AntalFejl += 1;
            FejlBesked3 = "Email ikke gyldig";
        }
    }
    if (AntalFejl == 0) {
        return true;
    }
    else {
        document.querySelector('#FejlBesked1').innerHTML = FejlBesked1;
        document.querySelector('#FejlBesked2').innerHTML = FejlBesked2;
        document.querySelector('#FejlBesked3').innerHTML = FejlBesked3;
        return false;
    }
}