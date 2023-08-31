export default class Employee {
    constructor(name, position='crew') {
        this.name = name
        this.id = Math.random()
        this.postion = position
    }
}