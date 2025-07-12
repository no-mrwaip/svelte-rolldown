<script lang="ts">
	import tippy from 'tippy.js';
	import type { Attachment } from 'svelte/attachments';

	let content = $state('Hello!');

	function tooltip(content: string): Attachment {
		return (element) => {
			const tooltip = tippy(element, { content });
			return tooltip.destroy;
		};
	}
</script>

<div class="container">
	<input bind:value={content} placeholder="Type your magical message..." />
	<button {@attach tooltip(content)}> Hover me </button>
</div>

<style>
	:global {
		[data-tippy-root] {
			--bg: #666;
			background-color: var(--bg);
			color: white;
			border-radius: 0.2rem;
			padding: 0.2rem 0.6rem;
			filter: drop-shadow(1px 1px 3px rgb(0 0 0 / 0.1));

			* {
				transition: none;
			}
		}

		[data-tippy-root]::before {
			--size: 0.4rem;
			content: '';
			position: absolute;
			left: calc(50% - var(--size));
			top: calc(-2 * var(--size) + 1px);
			border: var(--size) solid transparent;
			border-bottom-color: var(--bg);
		}
	}

	.container {
		font-family: 'Disney', cursive;
		background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
		padding: 20px;
		border-radius: 15px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		text-align: center;
		width: 350px;
		margin: auto;
		color: #333;
	}

	input {
		width: 80%;
		padding: 10px;
		border: 2px solid #c2e9fb;
		border-radius: 10px;
		font-size: 1.2rem;
		margin-bottom: 15px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	input:focus {
		outline: none;
		border-color: #a1c4fd;
		box-shadow: 0 0 8px rgba(161, 196, 253, 0.8);
	}

	button {
		background: #ff6f61;
		color: #fff;
		border: none;
		border-radius: 10px;
		padding: 10px 20px;
		font-size: 1.2rem;
		cursor: pointer;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	button:hover {
		transform: scale(1.1);
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
	}

	button:active {
		transform: scale(0.95);
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
	}
</style>
