<script>
    import data from '$lib/stores'
    import Times from './Times.svelte'
    import isOver from '$lib/isOver.js'
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
            {#if isOver(employee)}
            <div style = 'color:red'>    
            <td>{employee.name}</td>
            </div>
            {:else}
            <td>{employee.name}</td>
            {/if}
            {#each Object.keys($data.employees[id].days) as day}
            <td><Times id={id} day={day}/></td>
            {/each}
            {#if isOver(employee)}
            <div style='color:red'>Over max hours!</div>
            {/if}
        </tr>
        {/each}
    </tbody>
</table>

<style>
</style>