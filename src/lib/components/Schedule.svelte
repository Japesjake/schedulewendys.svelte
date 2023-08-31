<script>
    import data from '$lib/stores'
    // import update from '$lib/update.js'
    // $: update(), $data
</script>
<br>
Schedule:<br><br>
<table>
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
            <td>time</td>
        </tr>
        {/each}
        
    </tbody>
</table>

<style>
</style>