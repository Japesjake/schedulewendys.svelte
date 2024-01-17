import slots from '$lib/slots.js'
import minutesToTime from '$lib/minutesToTime.js'
import timeToMinutes from '$lib/timeToMinutes.js'
// let slot of $data.slots
// let emp of $data.employees
// let day of emp.days
function assignManagers($data) {
    for (let slot of $data.slots) {
        for (let emp of $data.employees) {
            for (let day of emp.days) {
                if (slot.day == day.name) {
                    if (day.assigned == false) {
                        if (slot.number > 0) {
                            if (emp.position == slot.type) {
                                let length = timeToMinutes(slot.endTime) - timeToMinutes(slot.startTime)
                                if (length <= emp.max * 60 - emp.hours * 60) {
                                    day.assigned = true
                                    day.startTime = slot.startTime
                                    day.endTime = slot.endTime
                                    slot.number -= 1
                                    let minutes = emp.hours * 60
                                    minutes += length
                                    emp.hours = minutes / 60
                                } else {
                                    // day.startTime = '_'
                                    // day.endTime = '-'
                                }
                            }
                        }
                    }
                }
                day.startTime = "-"
            }
        }
    }
}

export default function update($data) {
    console.log('UPDATE')
    // resetTimes($data)
    // resetSlots($data)
    // resetEmployees($data)
    // assignManagers($data)
}

function resetSlots($data) {
    $data.slots = slots()
}

function resetEmployees($data) {
    for (let emp of $data.employees) {
        emp.hours = 0
        for (let day of emp.days) {
            day.assigned = false
            day.startTime = '-'
            day.endTime = '-'
        }
    }
}

function resetTimes($data) {
    for (let emp = 0; emp < $data.employees.length; emp++) {
        for (let day = 0; day < $data.employees[emp].days.length; day++) {
            $data.employees[emp].days[day].startTime = '05:00'
            $data.employees[emp].days[day].endTime = '-'
            $data = $data
        }
    }
}