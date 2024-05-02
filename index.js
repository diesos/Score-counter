let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let total = document.getElementById("total-score")
let countEl2 = document.getElementById("count-el2")
let count = 0
let count2 = 0
let match = 0

function increment() {
    count += 1
    countEl.textContent = count
}


function increment2() {
    count2 += 1
    countEl2.textContent = count2
}

function save() {
    let countStr = count + " - " + count2 + " / "
    total.textContent += countStr
    countEl.textContent = 0
    countEl2.textContent = 0
    count = 0
    count2 = 0
}
