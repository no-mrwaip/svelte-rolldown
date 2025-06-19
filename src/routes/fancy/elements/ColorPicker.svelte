<script>
	import { PlayingCard } from 'odd-components';

	/** @type {PlayingCard['$$prop_def']['card'][]} */
	let my_deck = [];

	/** @type PlayingCard['$$prop_def']['card']['suit'][] */
	const suits = ['CLUBS', 'SPADES', 'HEARTS', 'DIAMONDS'];
	/** @type PlayingCard['$$prop_def']['card']['value'][] */
	const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

	/** @param {number} size */
	const deckMaker = (size) => {
		/** @type typeof my_deck*/
		let deck = [];
		let suitIdx, valueIdx;

		for (let i = 0; i < size; i++) {
			suitIdx = Math.floor(Math.random() * suits.length);
			valueIdx = Math.floor(Math.random() * values.length);

			deck.push({ value: values[valueIdx], suit: suits[suitIdx] });
		}
		return deck;
	};

	my_deck = deckMaker(99);
</script>

<div class="main">
	<div class="cover"></div>
	<div class="cards">
		{#each my_deck as card (card)}
			<div class="card-wrapper">
				<PlayingCard {card} />
			</div>
		{/each}
	</div>
</div>

<style>
	.main {
		height: 100%;
		width: 100%;
		position: relative;
		overflow: hidden;
	}
	.cover {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 10;
		background-color: #fff0d8;
		opacity: 1;
		mix-blend-mode: hue;
	}
	.cards {
		position: relative;
		transform-style: preserve-3d;
		perspective: 1000px;
	}
	.card-wrapper {
		display: inline-block;
		margin: 5px;
		transform: translateZ(calc(var(--depth, 0) * -10px));
		will-change: transform;
	}
</style>
