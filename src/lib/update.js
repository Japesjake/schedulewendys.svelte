import convert from '$lib/convert.js';


function assignManagers ($data){
    for (let slot of $data.slots) {
        for (let emp of $data.employees) {
            for (let day of emp.days) {
                if (slot.day == day.name) {
                    if (day.assigned == false) {
                        if (slot.number > 0) {
                            day.assigned = true
                            day.startTime = slot.startTime
                            day.Endtime = slot.Endtime
                            slot.number -= 1                        }
                    }
                }
            }
        }
    }
}

export default function update($data) {
    assignManagers($data)
}