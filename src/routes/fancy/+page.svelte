<script lang="ts">
	// Fancy page with random content
	import Button from '../../components/ui-kit/Button.svelte';
	import WeatherWidget from '../../components/WeatherWidget.svelte';
	import { City, Country } from '../../icons';

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
			<svelte:component this={randomCity.icon} />
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

	<section class="quote-list-section">
		<h2>More Quotes</h2>
		<ul>
			{#each quotes as quote}
				<li>“{quote}”</li>
			{/each}
		</ul>
	</section>

	<section class="cities-list-section">
		<h2>All Cities</h2>
		<ul>
			{#each cities as city (city.name)}
				<li><svelte:component this={city.icon} /> {city.name}, {city.country}</li>
			{/each}
		</ul>
	</section>

	<section class="interactive-section">
		<h2>Try Me!</h2>
		<Button label="Surprise!" on:click={() => alert('🎉 Surprise! You clicked the button!')} />
	</section>

	<section class="table-section">
		<h2>Sample Table</h2>
		<table>
			<thead>
				<tr><th>City</th><th>Country</th></tr>
			</thead>
			<tbody>
				{#each cities as city (city.name)}
					<tr><td>{city.name}</td><td>{city.country}</td></tr>
				{/each}
			</tbody>
		</table>
	</section>

	<section class="faq-section">
		<h2>FAQ</h2>
		<dl>
			<dt>What is this page?</dt>
			<dd>A demonstration of a fancy Svelte page with lots of content.</dd>
			<dt>How was it made?</dt>
			<dd>With SvelteKit and a little help from AI.</dd>
			<dt>Can I use this?</dt>
			<dd>Absolutely! Feel free to adapt and expand.</dd>
		</dl>
	</section>

	<div class="actions">
		<Button label="Go Home" />
	</div>
</main>

<style>
	.fancy-main {
		max-width: 700px;
		margin: 3em auto;
		background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
		border-radius: 16px;
		box-shadow: 0 4px 32px rgba(60, 60, 120, 0.1);
		padding: 2.5em 2em 2em 2em;
	}
	.quote-section {
		background: #fffbe7;
		border-radius: 8px;
		padding: 1.5em;
		margin-bottom: 2em;
		box-shadow: 0 1px 8px rgba(255, 215, 0, 0.07);
		text-align: center;
	}
	.quote-section blockquote {
		font-size: 1.3em;
		font-style: italic;
		color: #7c3aed;
	}
	.city-section {
		margin-bottom: 2em;
	}
	.city-card {
		display: flex;
		align-items: center;
		gap: 1.2em;
		background: #f1f5f9;
		border-radius: 8px;
		padding: 1em 1.5em;
		box-shadow: 0 1px 6px rgba(60, 60, 120, 0.05);
	}

	.weather-section {
		margin-bottom: 2em;
	}
	.fun-facts-section,
	.quote-list-section,
	.cities-list-section,
	.interactive-section,
	.table-section,
	.links-section,
	.faq-section {
		margin-bottom: 2em;
		background: #f8fafc;
		border-radius: 8px;
		padding: 1.2em 1em;
		box-shadow: 0 1px 6px rgba(60, 60, 120, 0.04);
	}
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
		gap: 1em;
		margin: 1em 0;
	}
	.gallery img {
		width: 100%;
		border-radius: 8px;
		box-shadow: 0 1px 4px rgba(60, 60, 120, 0.08);
	}
	.table-section table {
		width: 100%;
		border-collapse: collapse;
	}
	.table-section th,
	.table-section td {
		border: 1px solid #e0e7ff;
		padding: 0.5em 1em;
		text-align: left;
	}
	.table-section th {
		background: #e0e7ff;
	}
	.links-section ul,
	.faq-section dl {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.links-section li {
		margin-bottom: 0.5em;
	}
	.faq-section dt {
		font-weight: bold;
		margin-top: 1em;
	}
	.faq-section dd {
		margin-left: 1em;
		margin-bottom: 0.5em;
	}
	.actions {
		display: flex;
		justify-content: flex-end;
	}
	@media (max-width: 600px) {
		.fancy-main {
			padding: 1.2em 0.5em;
		}
		.city-card {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
