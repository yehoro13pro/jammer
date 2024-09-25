radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < 6) {
        sender_id = 0
    }
    if (receivedNumber < 7) {
        sender_id = 1
    }
    if (receivedNumber < 8) {
        sender_id = 2
    }
    if (receivedNumber < 9) {
        sender_id = 3
    }
    if (receivedNumber < 10) {
        sender_id = 4
    }
    if (receivedNumber < 11) {
        sender_id = 5
    }
})
let sender_id = 0
radio.setGroup(42)
sender_id = 5
basic.forever(function () {
    radio.sendNumber(sender_id)
    basic.showNumber(sender_id)
})
