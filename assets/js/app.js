document.addEventListener("mousemove", (event) => {
    const styles = {
        style: `--move-x: ${(event.clientX - window.innerWidth / 2)}deg;
        --move-y: ${(event.clientY - window.innerHeight / 2)}deg;`
    }
    Object.assign(document.documentElement, styles)
})

