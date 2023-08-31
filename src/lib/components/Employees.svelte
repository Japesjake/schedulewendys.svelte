<script>
    import data from '$lib/stores.js'
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
	function toggleSandwiches (id) {
		$data.employees[id].sandwiches = $data.employees[id].sandwiches ? false: true
	}
</script>
<div style='display: flex'>
<div style='padding-left: 52px;'>Employee:</div>
<div style='padding-left: 40px;'>Manager?</div>
<div style='padding-left: 40px;'>Sandwiches?</div>
</div>
{#each $data.employees as employee, id (employee.id)}
<button tabindex = -1 on:click={removeInput(id)}>-</button>
<button tabindex = -1 on:click={addInput(id)}>+</button>
<input tabindex = 0 type="text" style='width: 7em;' placeholder="name" bind:value={employee.name}>
<input type='checkbox' on:click={toggleManager(id)}>
<input type='checkbox' on:click={toggleSandwiches(id)}>
<br>
{/each}
<button on:click={addInput($data.employees.length)}>+</button>

<style>
	input[type='checkbox'] {
		margin-left: 2em;
	}
</style>