<script lang="ts">
	// Fancy page with random content
	import WeatherWidget from '../../components/WeatherWidget.svelte';
	import { City, Country } from '../../icons';
	import ClockWidget from './elements/ClockWidget.svelte';
	import ItemList from './elements/ItemList.svelte';
	import ClickCounter from './elements/ClickCounter.svelte';
	import NameInput from './elements/NameInput.svelte';
	import SecretToggle from './elements/SecretToggle.svelte';
	import ColorPicker from './elements/ColorPicker.svelte';
	import FunFacts from './elements/FunFacts.svelte';
	import Dismissable from './elements/Dismissable.svelte';
	import SquaresList from './elements/SquaresList.svelte';
	import HoverBox from './elements/HoverBox.svelte';
	import SumInputs from './elements/SumInputs.svelte';

	const quotes = [
		'The best way to predict the future is to invent it.',
		'Simplicity is the soul of efficiency.',
		'Creativity is intelligence having fun.',
		'Do not wait to strike till the iron is hot; but make it hot by striking.',
		'The only limit to our realization of tomorrow is our doubts of today.'
	];
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

	const cities = [
		{ name: 'Tokyo', country: 'Japan', icon: City },
		{ name: 'Paris', country: 'France', icon: City },
		{ name: 'New York', country: 'USA', icon: City },
		{ name: 'Sydney', country: 'Australia', icon: City },
		{ name: 'Cairo', country: 'Egypt', icon: City }
	];
	const randomCity = cities[Math.floor(Math.random() * cities.length)];
</script>

<main class="fancy-main">
	<h1>🌟 Welcome to the Fancy Page! 🌟</h1>
	<section class="quote-section">
		<blockquote>“{randomQuote}”</blockquote>
		<footer>— Random Inspiration</footer>
	</section>

	<section class="city-section">
		<h2>Featured City</h2>
		<div class="city-card">
			<randomCity.icon />
			<div>
				<strong>{randomCity.name}</strong>
				<p><Country /> {randomCity.country}</p>
			</div>
		</div>
	</section>

	<section class="weather-section">
		<h2>Weather Widget</h2>
		<WeatherWidget />
	</section>

	<!-- Additional fancy content -->
	<section class="fun-facts-section">
		<h2>Fun Facts</h2>
		<ul>
			<li>Did you know? Honey never spoils.</li>
			<li>Bananas are berries, but strawberries are not.</li>
			<li>Octopuses have three hearts.</li>
			<li>There are more stars in the universe than grains of sand on Earth.</li>
			<li>Wombat poop is cube-shaped.</li>
			<li>Venus is the only planet that spins clockwise.</li>
			<li>Some turtles can breathe through their butts.</li>
			<li>Hot water freezes faster than cold water under certain conditions.</li>
			<li>The unicorn is the national animal of Scotland.</li>
			<li>Oxford University is older than the Aztec Empire.</li>
		</ul>
	</section>

	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>

	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>
	<section class="gallery-section">
		<h2>Gallery</h2>
		<div class="gallery">
			<img src="/favicon.png" alt="Sample 1" />
			<img src="/favicon.png" alt="Sample 2" />
			<img src="/favicon.png" alt="Sample 3" />
			<img src="/favicon.png" alt="Sample 4" />
			<img src="/favicon.png" alt="Sample 5" />
			<img src="/favicon.png" alt="Sample 6" />
			<img src="/favicon.png" alt="Sample 7" />
			<img src="/favicon.png" alt="Sample 8" />
			<img src="/favicon.png" alt="Sample 9" />
			<img src="/favicon.png" alt="Sample 10" />
		</div>
	</section>

	<section class="widgets-section">
		<h2>Interactive Widgets</h2>
		<div class="widgets-grid">
			<ClockWidget />
			<ItemList items={[10, 20, 30, 40, 50]} />
			<ClickCounter />
			<NameInput />
			<SecretToggle />
			<ColorPicker />
			<FunFacts />
			<Dismissable />
			<SquaresList />
			<HoverBox />
			<SumInputs />
		</div>
	</section>
</main>

<style>
	.fancy-main {
		font-family: Arial, sans-serif;
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}

	.quote-section {
		background: #f9f9f9;
		padding: 20px;
		border-left: 5px solid #007acc;
		margin-bottom: 20px;
	}

	.city-section,
	.weather-section,
	.fun-facts-section,
	.gallery-section,
	.widgets-section {
		margin-bottom: 40px;
	}

	.city-card {
		display: flex;
		align-items: center;
		background: #fff;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}

	.city-card svelte:component {
		width: 50px;
		height: 50px;
		margin-right: 10px;
	}

	.widgets-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 10px;
	}
</style>
