<script>
	let now = new Date().toLocaleTimeString();
	$: now = new Date().toLocaleTimeString();
</script>
<div class="clock">Current time: {now}</div>
<style>
.clock { font-size: 1.2em; color: #7c3aed; margin-bottom: 1em; }
</style>
