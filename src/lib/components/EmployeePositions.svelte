<script>
    import data from '$lib/stores.js'
</script>

{#each $data.employees as employee, id}
<input type='checkbox' bind:checked={$data.employees[id].positions['sandwiches']}>
Sandwiches
<br>
<input type='checkbox' bind:checked={$data.employees[id].positions['driveThru']}>
DriveThru
<br>
<input type='checkbox' bind:checked={$data.employees[id].positions['register']}>
Register
<br>
{/each}