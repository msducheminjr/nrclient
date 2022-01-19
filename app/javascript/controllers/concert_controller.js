import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["tickets"]

  static values = { id: Number, soldOut: Boolean, ticketsRemaining: Number }

  soldOutValueChanged() {
    if (this.soldOutValue) {
      this.ticketsTarget.innerText = "Sold Out"
    } else {
      const ticketAgreement = this.ticketsRemainingValue === 1 ? "Ticket" : "Tickets"
      const ticketsRemaining = `${this.ticketsRemainingValue} ${ticketAgreement} Remaining`
      this.ticketsTarget.innerText = ticketsRemaining
    }
  }
}
