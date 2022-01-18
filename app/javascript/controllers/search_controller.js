import { Controller } from "@hotwired/stimulus"
import "form-request-submit-polyfill"

export default class extends Controller {
  static targets = ["form", "input", "results"]

  basicSubmit() {
    if (this.inputTarget.value === "") {
      this.reset()
    } else {
      this.formTarget.requestSubmit()
    }
  }

  submit() {
    this.debounce(this.basicSubmit.bind(this))()
  }

  debounce(functionToDebounce, wait = 300) {
    let timeoutId = null

    return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        timeoutId = null
        functionToDebounce(...args)
      }, wait)
    }
  }

  resetOnOutsideClick(event) {
    if (!this.element.contains(event.target)) {
      this.reset()
    }
  }

  reset() {
    this.resultsTarget.classList.add("hidden")
    this.resultsTarget.innerText = ""
    this.inputTarget.value = ""
  }
}
