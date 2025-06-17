<script lang="ts">
	type Props = {
		value?: string;
		placeholder?: string;
		type?: 'text' | 'password' | 'email' | 'search' | 'number';
		disabled?: boolean;
	};

	let { value = '', placeholder = '', type = 'text', disabled = false }: Props = $props();
</script>

<input {value} {placeholder} {type} {disabled} class="ui-input" />

<style>
	.ui-input {
		padding: 0.5em 1em;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1em;
		outline: none;
		transition: border 0.2s;
	}
	.ui-input:focus {
		border-color: #0070f3;
	}
</style>
