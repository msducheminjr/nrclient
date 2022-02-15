import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

export default class extends Controller {
  static targets = ["concert"]

  connect() {
    if (this.channel) {
      return
    }
    this.started = true
    this.channel = this.createChannel(this)
  }

  createChannel(source) {
    return createConsumer().subscriptions.create("ScheduleChannel", {
      received({ soldOutConcertIds }) {
        source.updateData(soldOutConcertIds)
      }
    })
  }

  updateData(soldOutConcertIds) {
    this.concertTargets.forEach((concertElement) => {
      concertElement.dataset.concertSoldOutValue = soldOutConcertIds
        .includes(parseInt(concertElement.dataset.concertIdValue, 10))
        .toString()
    })
  }
}
