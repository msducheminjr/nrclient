import { Controller } from "stimulus"

export default class DayToggleController extends Controller {
  static classes = ["hidden", "isClosed", "isOpen"]
  static targets = ["buttonText", "thingToHide"]
  static values = { visible: Boolean }

  hiddenClass: string
  isClosedClass: string
  isOpenClass: string
  buttonTextTarget: HTMLElement
  thingToHideTarget: HTMLElement
  visibleValue: boolean

  toggle() {
    this.flipState()
  }

  visibleValueChanged() {
    this.adjustTarget()
    this.adjustImage()
  }

  flipState() {
    this.visibleValue = !this.visibleValue
  }

  adjustTarget() {
    this.thingToHideTarget.classList.toggle(this.isClosedClass, !this.visibleValue)
  }

  adjustImage() {
    this.buttonTextTarget.classList.toggle(this.isOpenClass, this.visibleValue)
    this.buttonTextTarget.classList.toggle(this.isClosedClass, !this.visibleValue)
  }
}
