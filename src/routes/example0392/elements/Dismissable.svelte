<script>
	let visible = $state(true);
</script>

{#if visible}
	<p>This can be dismissed.</p>
	<button onclick={() => (visible = false)}>Dismiss</button>
{:else}
	<button onclick={() => (visible = true)}>Show Again</button>
{/if}
