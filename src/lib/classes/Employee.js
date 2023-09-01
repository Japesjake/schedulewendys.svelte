export default class Employee {
    constructor(name, position='crew', startTime='06:00', endTime='17:00', positions = {'sandwiches': false, 'driveThru': false, 'register': false}, togglePositions = false) {
        this.name = name
        this.id = Math.random()
        this.position = position
        this.startTime = startTime
        this.endTime = endTime
        this.positions = positions
        this.togglePositions = togglePositions
        this.days = this.week()
    }
    week () {
        let daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        let days = {}
        for (let i = 0; i<daysOfWeek.length; i++) {
            days[daysOfWeek[i]] = {startTime: '06:00', endTime: '17:00'}
        }
        return days
    }
}

