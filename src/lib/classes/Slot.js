export default class Slot {
    constructor(startTime, endTime, number, day, type) {
        this.type = type
        this.startTime = startTime
        this.endTime = endTime
        this.number = number
        this.day = day
    }
}