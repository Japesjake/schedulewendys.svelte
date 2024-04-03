import { writable } from 'svelte/store'
import { browser } from '$app/environment'
import Employee from './classes/Employee.js'
import Restaurant from './classes/Restaurant.js'

let data = new Restaurant('Sarasota', [new Employee('John Jaquith'), new Employee('Hannah'), new Employee('Sharon')]);
let initialValue = browser ? JSON.parse(localStorage.getItem('data')) ?? data : data;
data = writable(initialValue)
data.subscribe((value) => {
    if (browser) {
        localStorage.setItem('data', JSON.stringify(value))
    }
})
export default data