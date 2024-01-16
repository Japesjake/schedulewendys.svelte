import shuffle from '$lib/shuffle.js'
export default class Employee {
    constructor(name, position='manager', startTime='06:00', endTime='24:00', positions = {'sandwiches': false, 'driveThru': false, 'register': false}, togglePositions = false, assigned = false) {
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
        shuffle(daysOfWeek)
        console.log(daysOfWeek)
        let days = []
        for (let day of daysOfWeek) {
            days.push({name: day, startTime: '06:00', endTime: '17:00', assigned: false})
        }
        return days
    }
}