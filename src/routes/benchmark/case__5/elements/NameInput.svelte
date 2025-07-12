<script>
	let name = $state('');
</script>

<input bind:value={name} placeholder="Type your name" />
{#if name}
	<p>Hello, {name}!</p>
{/if}
