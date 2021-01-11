var decrementEl = document.querySelector("#decrement");
var incrementEl = document.querySelector("#increment");
var countEl = document.querySelector("#count");

var count = 0;

incrementEl.addEventListener("click", function () {
    count += 1;
    countEl.textContent = count;
}
);

decrementEl.addEventListener("click", function () {
    if  (count === 0)
        alert("You can't drop below zero!!;")
    }
   
    else(count -= 1)
    countEl.textContent = count
);