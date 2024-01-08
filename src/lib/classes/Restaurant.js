import slots from '$lib/slots.js'

export default class Restaurant {
    constructor(name, employees) {
        this.name = name
        this.employees = employees
        this.slots = slots()
    }
}