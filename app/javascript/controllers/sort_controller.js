import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["sortElement"]

  initialize() {
    const target = this.element
    const observer = new MutationObserver((mutations) => {
      observer.disconnect()
      Promise.resolve().then(start)
      this.sortTargets()
    })
    function start() {
      observer.observe(target, { childList: true, subtree: true })
    }
    start()
  }

  sortTargets() {
    if (this.targetsAlreadySorted()) {
      return
    }
    this.sortElementTargets
      .sort((a, b) => {
        return this.sortValue(a) - this.sortValue(b)
      })
      .forEach((element) => this.element.append(element))
  }

  targetsAlreadySorted() {
    let [first, ...rest] = this.sortElementTargets
    for (const next of rest) {
      if (this.sortValue(first) > this.sortValue(next)) {
        return false
      }
      first = next
    }
    return true
  }

  sortValue(element) {
    return parseInt(element.dataset.sortValue, 10)
  }

}
