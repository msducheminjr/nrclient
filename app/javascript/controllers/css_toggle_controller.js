import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = ["css"]
  static targets = ["elementToChange"]
  static values = { status: Boolean }

  toggle() {
    this.flipState()
  }

  flipState() {
    this.statusValue = !this.statusValue
  }

  statusValueChanged() {
    this.updateCssClass()
  }

  updateCssClass() {
    for (const oneCssClass of this.cssClasses) {
      this.elementToChangeTarget.classList.toggle(oneCssClass, !this.statusValue)
    }
  }
}
