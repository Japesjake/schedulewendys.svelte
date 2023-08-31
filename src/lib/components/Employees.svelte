<script>
    import data from '$lib/stores.js'
	import Times from '$lib/components/Times.svelte'
	import Schedule from '$lib/components/Schedule.svelte'
    import Employee from '$lib/classes/Employee.js'
    function addInput (id) {
		let defaultPerson = new Employee('')
		$data.employees.splice(id + 1, 0, defaultPerson);
		$data = $data;
	}
    function removeInput (id) {
		$data.employees.splice(id,1);
		$data = $data
	}
	function toggleManager (id) {
		$data.employees[id].manager = $data.employees[id].manager ? false: true
	}
	function togglePositions (id) {
		$data.employees[id].togglePositions = $data.employees[id].togglePositions ? false: true
	}
</script>
Employees:<br><br>
{#each $data.employees as employee, id (employee.id)}
<button tabindex = -1 on:click={removeInput(id)}>-</button>
<button tabindex = -1 on:click={addInput(id)}>+</button>
<input tabindex = 0 type="text" style='width: 7em;' placeholder="name" bind:value={employee.name}>
<button on:click={togglePositions(id)}>Positions</button>
<select bind:value={$data.employees[id].postion}>
	<option value='crew'>Crew</option>
	<option value='manager'>Manager</option>
</select>
<Times id={id} schedule=false/>
<br>
{#if $data.employees[id].togglePositions}
	<input type='checkbox' bind:checked={$data.employees[id].positions['sandwiches']}>
	Sandwiches
	<br>
	<input type='checkbox' bind:checked={$data.employees[id].positions['driveThru']}>
	DriveThru
	<br>
	<input type='checkbox' bind:checked={$data.employees[id].positions['register']}>
	Register
	<br>
{/if}
{/each}
<button on:click={addInput($data.employees.length)}>+</button>
<br>

{#each $data.employees as employee}
{employee.actualStartTime}
{employee.actualEndTime}
{/each}
<br>
<Schedule />
<br>