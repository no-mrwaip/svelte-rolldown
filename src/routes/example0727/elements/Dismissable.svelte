<script>
	let visible = true;
</script>

{#if visible}
	<p>This can be dismissed.</p>
	<button on:click={() => (visible = false)}>Dismiss</button>
{:else}
	<button on:click={() => (visible = true)}>Show Again</button>
{/if}
