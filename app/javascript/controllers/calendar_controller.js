import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["calendarDay"]

  everyDayUnselected() {
    return this.calendarDayTargets.every((target) => {
      return target.dataset.cssToggleStatusValue === "false"
    })
  }

  filter() {
    const everyDayUnselected = this.everyDayUnselected()
    this.calendarDayTargets.forEach((target) => {
      const show = everyDayUnselected || target.dataset.cssToggleStatusValue === "true"
      const schedule = document.getElementById(target.dataset.scheduleId)
      schedule.classList.toggle("hidden", !show)
    })
  }

  showAll() {
    this.calendarDayTargets.forEach((target) => {
      target.dataset.cssToggleStatusValue = "false"
      const schedule = document.getElementById(target.dataset.scheduleId)
      schedule.classList.toggle("hidden", false)
    })
  }
}
