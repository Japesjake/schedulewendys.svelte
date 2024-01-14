import slots from '$lib/slots.js'
import convert from '$lib/convert.js'


function assignManagers ($data){
    for (let slot of $data.slots) {
        for (let emp of $data.employees) {
            for (let day of emp.days) {
                if (slot.day == day.name) {
                    if (day.assigned == false) {
                        if (slot.number > 0) {
                            if (emp.position == slot.type) {
                                let length = convert(slot.endTime) - convert(slot.startTime)
                                // if (emp.hours + l)
                                day.assigned = true
                                day.startTime = slot.startTime
                                day.endTime = slot.endTime
                                slot.number -= 1   
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