<script>
    import data from '$lib/stores'
    import Times from './Times.svelte'
</script>
<br>
Schedule:<br><br>
<table style = 'white-space:nowrap'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
        </tr>
    </thead>
    <tbody>
        {#each $data.employees as employee, id (employee.id)}
        <tr>    
            <td>{employee.name}</td>
            {#each Object.keys($data.employees[id].days) as day}
            <td><Times id={id} schedule={true} day={day}/></td>
            {/each}
        </tr>
        {/each}
    </tbody>
</table>

<style>
</style>