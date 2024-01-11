export default class Employee {
    constructor(name, position='crew', startTime='06:00', endTime='24:00', positions = {'sandwiches': false, 'driveThru': false, 'register': false}, togglePositions = false, assigned = false) {
        this.name = name
        this.id = Math.random()
        this.position = position
        this.startTime = startTime
        this.endTime = endTime
        this.positions = positions
        this.togglePositions = togglePositions
        this.days = this.week()
        this.assigned = assigned
        this.max = 40
        this.hours = 0
    }
    week () {
        let daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        let days = []
        for (let i = 0; i<daysOfWeek.length; i++) {
            days.push({name: daysOfWeek[i], startTime: '06:00', endTime: '17:00', assigned: false})
        }
        return days
    }
}

