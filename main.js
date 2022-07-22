const btnList = document.querySelector("#btn-list");
const itemHeader = document.querySelector("#header");
const listImage = [
    "./images/la.jpg",
    "./images/ny.jpg",
    "./images/chicago.jpg"
]
const listDescTitle = [
    "Los Angeles",
    "New York",
    "Chicago"
]
const listDescPragraph = [
    "We had the best time playing at Venice Beach!",
    "The atmosphere in New York is lorem ipsum.",
    "Thank you, Chicago - A night we won't forget."
]
let index = 0;
const itemSlider = document.querySelector("#slider");
const itemTitle = document.querySelector(".title h3");
const itemParagraph = document.querySelector(".paragraph p");
const listPlaceItem = [
    {
        id: 1,
        image: "./images/newyork.jpg",
        title: "New Yourk",
        time: "Fri 27 Nov 2016",
    },
    {
        id: 2,
        image: "./images/paris.jpg",
        title: "Paris",
        time: "Sat 28 Nov 2016"
    },
    {
        id: 3,
        image: "./images/sanfran.jpg",
        title: "San Francisco",
        time: "Sun 29 Nov 2016"
    }
]
const placeList = document.querySelector(".places-list");
function showData() {
    listPlaceItem.forEach(item => {
        placeList.innerHTML += `
            <div class="place-item">
                <img src="${item.image}" alt="">
                <div class="place-body">
                    <b>${item.title}</b>
                    <p class="time-place">${item.time}</p>
                    <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                    <button class="js-buy-ticket"><a href="">Buy Tickets</a></button>
                </div>
            </div>
        `;
    });
}
showData();
const btnTickets = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");
function showBuyTickets(e) {
    e.preventDefault();
    modal.classList.add("open");
}
function hideBuyTickets() {
    modal.classList.remove("open");
}
btnTickets.forEach(item => {
    item.addEventListener("click", showBuyTickets);
});
modalClose.addEventListener("click", hideBuyTickets);
modal.addEventListener("click", hideBuyTickets);
modalContainer.addEventListener("click", function(e) {
    e.stopPropagation();
})
btnList.onclick = function () {
    if (itemHeader.clientHeight == 47) {
        itemHeader.style.height = "auto";
    } else {
        itemHeader.style.height = "46.5px";
    }
}
function next() {
    if (index > 2) {
        index = 0;
    }
    itemSlider.style.background = `url(${listImage[index]}) top center / cover no-repeat`;
    itemTitle.innerHTML = listDescTitle[index];
    itemParagraph.innerText = listDescPragraph[index];
    index++;
}
setInterval(next, 2000);
const menuItems = document.querySelectorAll("nav li a[href*='#']");
menuItems.forEach(item => {
    item.onclick = function(e) {
        let isParentMenu = item.nextElementSibling && item.nextElementSibling.classList.contains("subnav");
        console.log(isParentMenu);
        if(isParentMenu) {
            e.preventDefault();
        } else {
            itemHeader.style.height = "46.5px";
        }
    }
});