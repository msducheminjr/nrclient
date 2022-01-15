import { Controller } from "@hotwired/stimulus"

export default class CssParent extends Controller {
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
}
