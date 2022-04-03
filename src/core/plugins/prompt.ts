const isBrowser = () => typeof window !== "undefined"
let deferredPrompt: any
isBrowser() &&
  window.addEventListener("beforeinstallprompt", e => {
    console.info("beforeinstallprompt")
    e.preventDefault()
    deferredPrompt = e
  })

export const clickButton = () => {
  if (deferredPrompt) {
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then(() => {
      console.info("after clicking")
      deferredPrompt = null
    })
  }
}
