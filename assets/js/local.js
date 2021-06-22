window.addEventListener('load', function () {
    document.querySelector("#KnapTilbage").onclick = GalleriBilledeTilbage;
    document.querySelector("#KnapFrem").onclick = GalleriBilledeFrem;
    document.querySelector("#GalleriBillede").onclick = GalleriBilledeStor;
    GalleriLavThumbnails();
});
var BilledeNummer = 0;
// normally dont add path along with image ID
var Billeder = ["assets/images/galleri05.jpg", "assets/images/galleri06.jpg", "assets/images/galleri04.jpg",];
function GalleriBilledeTilbage() {
    if (BilledeNummer == 0) {
        BilledeNummer = Billeder.length - 1;
    }
    else {
        BilledeNummer -= 1;
    }
    document.querySelector("#GalleriBillede").src = Billeder[BilledeNummer];
}
function GalleriBilledeFrem() {
    if (BilledeNummer == Billeder.length - 1) {
        BilledeNummer = 0;
    }
    else {
        BilledeNummer += 1;
    }
    document.querySelector("#GalleriBillede").src = Billeder[BilledeNummer];
}
function GalleriLavThumbnails() {
    var ThumbnailNummer = 0;
    while (ThumbnailNummer < Billeder.length) {
        document.querySelector("#GalleriThumbnails").innerHTML += '<a onclick="GalleriBilledeSkift(' + ThumbnailNummer + ')"></a>';
        ThumbnailNummer += 1;
    }
}
function GalleriBilledeSkift(SkiftTilBilledeNummer) {
    document.querySelector("#GalleriBillede").src = Billeder[SkiftTilBilledeNummer];
}
var BilledeStor = false;
function GalleriBilledeStor() {
    if (BilledeStor == false) {
        document.querySelector("#Galleri").style.position = "fixed";
        BilledeStor = true;
    }
    else {
        document.querySelector("#Galleri").style.position = "relative";
        BilledeStor = false;
    }
}