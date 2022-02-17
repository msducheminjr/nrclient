import CssParent from "./css_parent"

export default class extends CssParent {
  static classes = ["css"]
  static targets = ["elementToChange"]

  updateCssClass() {
    for (const oneCssClass of this.cssClasses) {
      this.elementToChangeTarget.classList.toggle(oneCssClass, this.statusValue)
    }
  }
}
