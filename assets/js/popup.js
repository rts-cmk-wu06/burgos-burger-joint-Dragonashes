var modalselect = document.querySelector(".overlay");
var content = document.querySelector("#overlay-content");
var display1 = content.style;
modalselect.addEventListener("click", function () {
    if (content.style.display == "grid") {
        modalselect.style.display = "none";
        display1.display = "none";
    } else {
        modalselect.style.display = "none";
        display1.display = "none";
    }
});


// <img src=assets/img/${item.id} class="imggrid">
// `<img src=assets/images/${item.id}>`

for (var item of popuparray) {
    document.querySelector(".griddefine").innerHTML +=
        `<div data-img="${item.id}" class="item">
            <button class="select">` +
                `${item.status2 ? `<img src=assets/images/${item.id} class="imggrid">` : `<img src=assets/images/${item.id} class="imggrid">`}` +
                `${item.download ? `${item.download}` + `</a>` : ''}` +
                `${item.status1 ? `<span class="favorite"><img src=assets/images/burger_ikon.png class=favburger>FAVORIT</span>` : ''}` +
            `</button>
        </div>`
        ;
    // console.log(`${item.id} ${item.status} ${item.statustext} ${item.status2}`)
}
document.querySelectorAll(".item").forEach(function (ele) {
    ele.querySelector(".select").addEventListener("click", function () {
        if (display1.display == "none") {
            display1.display = "grid";
        }
        modalselect.style.display = "grid";
        content.innerHTML = `<img src=assets/images/${ele.dataset.img}>`;
    });
});