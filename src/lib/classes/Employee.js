export default class Employee {
    constructor(name, position='crew', startTime='06:00', endTime='17:00', positions = {'sandwiches': false, 'driveThru': false, 'register': false}, togglePositions = false) {
        this.name = name
        this.id = Math.random()
        this.postion = position
        this.startTime = startTime
        this.endTime = endTime
        this.positions = positions
        this.togglePositions = togglePositions
    }
}