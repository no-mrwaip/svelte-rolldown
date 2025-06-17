<script lang="ts">
	type Props = {
		checked?: boolean;
		disabled?: boolean;
		label?: string;
	};

	let { checked = $bindable(false), disabled = false, label = '' }: Props = $props();
</script>

<label class="ui-toggle">
	<input type="checkbox" bind:checked {disabled} />
	<span class="slider"></span>
	<span class="toggle-label">{label}</span>
</label>

<style>
	.ui-toggle {
		display: flex;
		align-items: center;
		gap: 0.5em;
		cursor: pointer;
	}
	.ui-toggle input {
		display: none;
	}
	.slider {
		width: 36px;
		height: 20px;
		background: #ccc;
		border-radius: 20px;
		position: relative;
		transition: background 0.2s;
	}
	.slider:before {
		content: '';
		position: absolute;
		left: 2px;
		top: 2px;
		width: 16px;
		height: 16px;
		background: #fff;
		border-radius: 50%;
		transition: transform 0.2s;
	}
	input:checked + .slider {
		background: #0070f3;
	}
	input:checked + .slider:before {
		transform: translateX(16px);
	}
	.toggle-label {
		font-size: 1em;
	}
</style>
