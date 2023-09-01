function assignManagers($data){
    let managers = []
    for (let employee of $data.employees) {
        if (employee.position == 'manager') {
            managers.push(employee)
        }
    }
    console.log(managers)
}
export default function update($data) {
    assignManagers($data)
}