<script>
	let name = '';
</script>

<input bind:value={name} placeholder="Type your name" />
{#if name}
	<p>Hello, {name}!</p>
{/if}
