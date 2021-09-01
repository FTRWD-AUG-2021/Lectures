const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth
canvas.height = 500;

const ctx = canvas.getContext('2d');

const right = new Image();
right.src = `./idle.png`

const left = new Image();
left.src = `./idleLeft.png`

let ninja = {
    img: right
}

let x = 20
let y = 30
let sx = 0;
let sy = 0;
let swidth = ninja.img.width / 10;
let sheight = ninja.img.height
let frames = 0;
let speed = 5;

function animate() {
    window.requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frames++

    if (frames % speed === 0) { //This is the speed of change of ninja pic
        sx += ninja.img.width / 10;
        if (sx > ninja.img.width - (ninja.img.width / 10)) {
            sx = 0
        }
        //ctx.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
    }
    ctx.drawImage(ninja.img, sx, sy, swidth, sheight, x, y, 100, 150)

}

animate()


window.onkeydown = function (e) {
    console.log(e.key)
    switch (e.key) {
        case 'ArrowLeft':
            x -= 10
            ninja.img = left
            break
        case 'ArrowRight':
            x += 10
            ninja.img = right
            break
        case 'ArrowUp':
            y -= 10
            break
        case 'ArrowDown':
            y += 10
            break

    }
}