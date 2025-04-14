document.addEventListener("mousemove", (event) => {
    const styles = {
        style: `--move-x: ${(event.clientX - window.innerWidth / 2)*0.005}deg;
        --move-y: ${(event.clientY - window.innerHeight / 2 )*0.01}deg;`
    }
    Object.assign(document.documentElement, styles)
})

let xDeg = document.querySelector(".x-deg")
let yDeg = document.querySelector(".y-deg")

window.addEventListener("deviceorientation", (event) => {
    let xRotate = event.gamma
    let yRotate = event.alpha
    console.log(xRotate, yRotate);

    xDeg.innerHTML = xRotate
    yDeg.innerHTML = yRotate

    const styles = {
        style: `--move-x: ${xRotate / 2}deg;
        --move-y: ${yRotate / 2}deg;`
    }
    Object.assign(document.documentElement, styles)

}, true)