export default class Employee {
    constructor(name, position='crew', startTime='06:00', endTime='17:00') {
        this.name = name
        this.id = Math.random()
        this.postion = position
        this.startTime = startTime
        this.endTime = endTime
    }
}