// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

/*
  This listens for the turbo:before-stream-render event and performs the animation
  before removing the turbo frame from the DOM. The default behavior would remove
  the element from the DOM before performing the animation.

  This looks for the data-animate-out attribute and prevents the default. Then
  when the animationend event is fired the target frame gets removed.

  In order for this to work, the element with the data-animate-out must have the
  animate__animated class and the top-level element in the turbo frame.
*/
document.addEventListener("turbo:before-stream-render", (event) => {
  if (event.target.action === "remove") {
    const targetFrame = document.getElementById(event.target.target)
    if (targetFrame.dataset.animateOut) {
      event.preventDefault()
      const elementBeingAnimated = targetFrame
      elementBeingAnimated.classList.add(targetFrame.dataset.animateOut)
      elementBeingAnimated.addEventListener("animationend", () => {
        targetFrame.remove()
      })
    }
  }
})