import CssParent from "./css_parent"

export default class extends CssParent {
  static classes = ["on", "off"]
  static targets = ["elementToChange"]

  updateCssClass() {
    console.log('Update CSS class')
    for (const oneCssClass of this.onClasses) {
      `toggle one class ${oneCssClass} from onClasses`
      this.elementToChangeTarget.classList.toggle(oneCssClass, this.statusValue)
    }
    for (const oneCssClass of this.offClasses) {
      `toggle one class ${oneCssClass} from onClasses`
      this.elementToChangeTarget.classList.toggle(oneCssClass, !this.statusValue)
    }
  }
}