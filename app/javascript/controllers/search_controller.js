import { Controller } from "@hotwired/stimulus"
import "form-request-submit-polyfill"

export default class extends Controller {
  static targets = ["form", "input"]

  submit() {
    this.formTarget.requestSubmit()
  }
}
