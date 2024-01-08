import Slot from './Slot.js'

export default class Restaurant {
    constructor(name, employees) {
        this.name = name
        this.employees = employees
        this.slots = this.slots()
    }
    slots () {
        let slots = []
        let daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        for (let day of daysOfWeek) {
            slots.push(new Slot('06:00', '16:00', 1, day, 'manager'))
            slots.push(new Slot('08:00', '16:00', 2, day, 'crew'))
            slots.push(new Slot('11:00', '16:00', 5, day, 'crew'))
            slots.push(new Slot('14:30', '24:30', 1, day, 'manager'))
            slots.push(new Slot('06:00', '16:00', 1, day, 'crew'))
        }
        return slots
    }
}