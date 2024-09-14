const zvuk = document.querySelectorAll('audio')
const pads = document.querySelectorAll('.sound>div')
const anim = document.querySelector('.anime')

const colors = [
    "#0350a8",
    "#afdbff",
    "#0d89d1",
    "#60a0db",
    "#4259cf"
]

function lol(item) {
    return function () {
        if (zvuk[item].loop) {
            zvuk[item].pause()
            zvuk[item].loop = false;
        }
        else {
            zvuk[item].play()
            zvuk[item].volume = 0.3
            zvuk[item].loop = true;
            zvuk[item].currentTime = 0;
            bubbleAnime(item);
        }
    }
}

for (let i = 0; i < pads.length; i += 1) {
    pads[i].addEventListener("click", lol(i))
}

function bubbleAnime(item) {

    const bubble = document.createElement("div");
    anim.appendChild(bubble);
    bubble.style.backgroundColor = colors[item];
    bubble.style.animation = "bubbleFly 10s";
    bubble.addEventListener('animationend', function () { anim.removeChild(bubble) });
}