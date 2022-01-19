import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["concert"]

  connect() {
    setInterval(() => this.updateData(), 1000 * 60)
  }

  async updateData() {
    const response = await fetch("/sold_out_concerts")
    const jsonString = await response.text()
    const jsonObject = JSON.parse(jsonString)
    const soldOutConcertIds = jsonObject["sold_out_concert_ids"].map((id) => id.toString())
    this.concertTargets.forEach((concertElement) => {
      concertElement.dataset.concertSoldOutValue = soldOutConcertIds.includes(
        concertElement.dataset.concertIdValue
      )
    })
  }
}
