<script>
    import data from '$lib/stores'
    import Times from './Times.svelte'
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
            <Times id={id} schedule=true />
        </tr>
        {/each}
    </tbody>
</table>

<style>
</style>