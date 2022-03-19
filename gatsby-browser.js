import "./src/styles/global.css"

function resizeFullHeight() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

resizeFullHeight()
window.addEventListener("resize", () => {
  resizeFullHeight()
})
