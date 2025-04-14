let canvas = document.querySelector(".rain");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

let rainControllet = document.querySelector(".btn-rain")

function random(min = 0, max = 10) {
    return ((Math.random() * (max-min)) + min)
}

function RainDrop(x, y, endy, speed, opacity) {
    this.x = x
    this.y = y
    this.endy = endy
    this.speed = speed
    this.opacity = opacity
    

    this.draw = () => {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y - this.endy);

        ctx.lineWidth = 10;
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.stroke();
    }
    this.update = () => {
        let rainEnd = window.innerHeight
        if (this.y >= rainEnd) {
            this.y = this.endy
        }
        else {
            this.y = this.y + this.speed
        }
        this.draw()
    }
}



let rainArray = []


for (let i = 0; i < 100; i++) {
  let x = random(0, window.innerWidth)
  let y = random(0,200)
  let endY = random(2,10)
  let speed = random(1,10)
  let opacity = Math.random()

  let drop = new RainDrop(x, y, endY, speed, opacity)

  rainArray.push(drop)
}
for (let i=0; i < rainArray.length; i++) {
    
    const drop = rainArray[i]
    drop.draw()
    drop.update()
}

let animation = null
let isAnimationRun = false

function animateRain() {

    animation = requestAnimationFrame(animateRain)


    ctx.clearRect(0,0,window.innerWidth, window.innerHeight)

    isAnimationRun = true


    for (let i = 0; i < rainArray.length; i++) {
        const drop = rainArray[i]
        drop.update()
    }
}



animateRain()

rainControllet.onclick = () => {
    if (isAnimationRun === true){
        ctx.clearRect(0,0,window.innerWidth, window.innerHeight)
        cancelAnimationFrame(animation)
        isAnimationRun = false
        rainControllet.innerHTML = "Запустить <br/> дождь (егор) "
        

    }
    else {
        animateRain()
        rainControllet.innerHTML = "Остановить <br/> дождь((Н)егор)"
    }
}

