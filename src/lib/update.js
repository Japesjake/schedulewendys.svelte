import convert from '$lib/convert.js';


function assignManagers ($data){
    let amStart = convert('06:00')
    let amEnd = convert('16:00')
    let pmStart = convert('15:00')
    let pmEnd = convert('24:00')
    for (let manager of $data.employees){
        if (manager.position == 'manager') {
            // for (let day of Object.keys(manager.days)) {
            //     if (day.assigned == false) {
            //         let times = manager.days[day]
            //     }
            // for (let slot of $data.slots)
            //     for (let day )
            // }
        }
    }
}

export default function update($data) {
    assignManagers($data)
}