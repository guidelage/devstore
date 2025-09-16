const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const item = document.querySelectorAll(".item");
const lines = document.querySelectorAll(".line");
const numberIndicator = document.querySelector(".numbers");
const list = document.querySelector(".list");

let active = 0;
const total = item.length;
let timer;

function update(direction) {
    document.querySelector(".item.active").classList.remove("active");
    document.querySelector(".line.active").classList.remove("active");


    if (direction > 0) {
        active = active + 1;

        if (active === total)
            active = 0;
    }

    else if (direction < 0) {
        active = active - 1;

        if (active < 0) {
            active = total - 1;
        }

    }

    item[active].classList.add("active");
    lines[active].classList.add("active");
    numberIndicator.textContent = `0${active + 1}`;
}
clearInterval(timer)
timer = setInterval(() => {
    update(1)
}, 6000);

prevButton.addEventListener("click", () => {
    update(-1);
});

nextButton.addEventListener("click", () => {
    update(1);
});