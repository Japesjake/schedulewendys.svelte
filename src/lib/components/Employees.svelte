<script>
    import data from '$lib/stores.js'
	import Times from '$lib/components/Times.svelte'
	import Schedule from '$lib/components/Schedule.svelte'
    import Employee from '$lib/classes/Employee.js'
    import update from '$lib/update.js'
	function addInput (id) {
		let defaultPerson = new Employee('')
		$data.employees.splice(id + 1, 0, defaultPerson);
		$data = $data;
	}
    function removeInput (id) {
		$data.employees.splice(id,1);
		$data = $data
	}
</script>
Employees:<br><br>
<section>
{#each $data.employees as employee, id (employee.id)}
<div style='float:left; padding-top: 1.5em'>
<button tabindex = -1 on:click={removeInput(id)}>-</button>
<button tabindex = -1 on:click={addInput(id)}>+</button>
<input tabindex = 0 type="text" style='width: 7em;' placeholder="name" bind:value={employee.name}>
<select bind:value={employee.position}>
    <option>manager</option>
    <option>crew</option>
</select>
Max Hours:
<input tabindex = 0 type="text" style="width: 16px;" bind:value={employee.max}>
</div>
<div>
<table>
<thead>
	<tr>
		<th>Mon</th>
		<th>Tue</th>
		<th>Wed</th>
		<th>Thur</th>
		<th>Fri</th>
		<th>Sat</th>
		<th>Sun</th>
	</tr>
</thead>
<tbody>
	<tr>
		{#each $data.employees[id].days as day}
		<td><input type='checkbox' bind:checked={day.available}></td>
		{/each}
	</tr>
</tbody>
</table>
</div>
{/each}
</section>

<button on:click={addInput($data.employees.length)}>+</button>
<br>