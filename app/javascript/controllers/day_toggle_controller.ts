import { Controller } from "stimulus"

export default class DayToggleController extends Controller {
  static classes = ["hidden"]
  static targets = ["buttonText", "thingToHide"]
  static values = { visible: Boolean }

/* Explicit declarations do not seem to be necessary in Stimulus 2.0 with TS
  hiddenClass: string
  thingToHideTarget: HTMLElement
  buttonTextTarget: HTMLElement
  thingToHideTarget: HTMLElement
  visibleValue: boolean
*/
  toggle() {
    this.flipState()
  }

  visibleValueChanged() {
    this.adjustTarget()
    this.adjustText()
  }

  flipState() {
    this.visibleValue = !this.visibleValue
  }

  adjustTarget() {
    this.thingToHideTarget.classList.toggle(this.hiddenClass, !this.visibleValue)
  }

  // FUTURE: Add in Rails I18n and make these Hide/Show values dynamic
  newText(): string {
    return this.visibleValue ? "Hide" : "Show"
  }

  adjustText() {
    this.buttonTextTarget.innerText = this.newText()
  }
}
