import $data from '$lib/stores.js'
export default function toggleAvailable(employees) {
    for (let emp of employees) {
        for (let day of emp.days) {
            if (day.available == false && !day.startTimeStore) {
                day.startTimeStore = day.startTime
                day.endTimeStore = day.endTime
                day.startTime = 'off'
                day.endTime = 'off'
            } else if (day.available == false && day.startTimeStore) {
                day.startTime = 'off'
                day.endTime = 'off'
            } else if (day.available == true && day.startTimeStore) {
                day.startTime = day.startTimeStore
                day.endTime = day.endTimeStore
                day.startTimeStore = false
                day.endTimeStore = false
            }
        }
    }
}