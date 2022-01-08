import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = ["hidden"]
  static targets = ["elementToHide", "elementWithText"]
  static values = { visible: Boolean }

  toggle() {
    this.flipState()
  }

  flipState() {
    this.visibleValue = !this.visibleValue
  }

  visibleValueChanged() {
    this.updateHiddenClass()
    this.updateText()
  }

  updateHiddenClass() {
    this.elementToHideTarget.classList.toggle(this.hiddenClass, !this.visibleValue)
  }

  newText() {
    return this.visibleValue ? "Hide" : "Show"
  }

  updateText() {
    this.elementWithTextTarget.innerText = this.newText()
  }
}
