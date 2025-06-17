<script>
	let a = 3,
		b = 4;
	$: sum = a + b;
</script>

<input type="number" bind:value={a} min="0" /> +
<input type="number" bind:value={b} min="0" /> =
<strong>{sum}</strong>
