const note1 = document.querySelector(".note1")
const note2 = document.querySelector(".note2")
const note3 = document.querySelector("note3")

const note4 = /^(1\d{13}|2\d{13})$/
note2.addEventListener("click", () => {
    if(note4.test(note1.value)){
        alert("привет")
    }else{
        alert("пока")
    }
})
//второ задание
const kirka = document.querySelector(".emir")

let num = 0

const motion = function() {
    num += 20
    kirka.style.left = `${num}px`;
    kirka.style.top = `${num}px`;
    if (num < 100) {
        motion();
    } else {
        num = 0
    }
}

kirka.addEventListener("mousedown", motion)