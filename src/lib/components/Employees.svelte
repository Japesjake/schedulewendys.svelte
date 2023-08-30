<script>
    import data from '$lib/stores.js'
    import Employee from '$lib/classes/Employee.js'
    function addInput (id) {
		let defaultPerson = new Employee('')
		$data.employees.splice(id + 1, 0, defaultPerson);
		$data = $data;
	}
    function removeInput (id) {
		$data.emloyees.splice(id,1);
		$data = $data
	}
</script>


<h1>Welcome Wendy's People!</h1>
<p>This is an app designed to facilitate the creation of employee schedules.</p>

{#each $data.employees as employee, id (employee.id)}
<button tabindex = -1 on:click={removeInput(id)}>-</button>
<button tabindex = -1 on:click={addInput(id)}>+</button>
<input tabindex = 0 type="text" placeholder="name" bind:value={employee.name}>
<input tabindex = 0 type="text" placeholder="lastname" bind:value={employee.lastName}>
<br>
{/each}
<button on:click={addInput($data.employees.length)}>+</button>