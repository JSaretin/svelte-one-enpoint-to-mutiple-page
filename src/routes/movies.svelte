<script lang="ts" context="module">
	export const load = async ({ fetch }) => {
		const request = await fetch('/api/endpoint.json?query=getMovies', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		});

		const movies = await request.json();
		return {
			status: 200,
			props: {
				movies
			}
		};
	};
</script>

<script>
	export let movies;
</script>

{#each movies as movie (movie.id)}
	<h1>{movie.title}</h1>
{/each}
