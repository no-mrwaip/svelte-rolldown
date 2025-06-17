<script>
	let hovered = false;
</script>

<div
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
	style="padding:1em;border:1px solid #ddd;border-radius:8px;width:fit-content;"
>
	{#if hovered}
		<span>👋 You are hovering!</span>
	{:else}
		<span>Hover over me</span>
	{/if}
</div>
