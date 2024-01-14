import slots from '$lib/slots.js'
import minutesToTime from '$lib/minutesToTime.js'
import timeToMinutes from '$lib/timeToMinutes.js'


function assignManagers ($data){
    for (let slot of $data.slots) {
        for (let emp of $data.employees) {
            for (let day of emp.days) {
                if (slot.day == day.name) {
                    if (day.assigned == false) {
                        if (slot.number > 0) {
                            if (emp.position == slot.type) {
                                let length = timeToMinutes(slot.endTime) - timeToMinutes(slot.startTime)
                                if (length < emp.max * 60 - emp.hours * 60 ) {
                                    day.assigned = true
                                    day.startTime = slot.startTime
                                    day.endTime = slot.endTime
                                    slot.number -= 1
                                    // emp.hours += length
                                    // gotta make it so convert converts raw hours into minutes.
                                    console.log('ok')
                                }
                            }         
                        }
                    }
                }
            }
        }
    }
}

export default function update($data) {
    resetSlots($data)
    resetAssigned($data)
    assignManagers($data)
}

function resetSlots ($data) {
    $data.slots = slots()
}

function resetAssigned ($data) {
    for (let emp of $data.employees) {
        for (let day of emp.days) {
            day.assigned = false
        }
    }
}