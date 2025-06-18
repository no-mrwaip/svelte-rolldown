<script>
	let color = $state('red');
</script>

<select bind:value={color}>
	<option value="red">Red</option>
	<option value="green">Green</option>
	<option value="blue">Blue</option>
</select>
<p style="color: {color}">This text is {color}!</p>
