import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["elementWithText"]
  static values = { status: Boolean, on: String, off: String }

  toggle() {
    this.flipState()
  }

  flipState() {
    this.statusValue = !this.statusValue
  }

  statusValueChanged() {
    this.updateText()
  }

  newText() {
    return this.statusValue ? this.onValue : this.offValue
  }

  updateText() {
    this.elementWithTextTarget.innerText = this.newText()
  }
}
