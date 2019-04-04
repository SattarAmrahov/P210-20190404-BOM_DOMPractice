"use strict";

let addButton = document.querySelector("#add");

addButton.addEventListener("click", function (e) {
    let inputelement = e.target.parentElement.previousElementSibling.children[0];
    if (inputelement.value != "") {
        let liElement = document.createElement("li");
        liElement.classList.add("list-group-item");
        liElement.textContent = inputelement.value;
        liElement.addEventListener("click", function () {
            addLine(liElement);
        });
        document.querySelector(".content .list-group").appendChild(liElement);
        inputelement.value = "";
    }
});

let liItems = document.querySelectorAll(".list-group .list-group-item");

for (let i = 0; i < liItems.length; i++) {
    liItems[i].addEventListener("click", function (e) {
        addLine(e.target);
    });
}

function addLine(liItem) {
    liItem.classList.toggle("line");
}