<script lang="ts" context="module">
	export const load = async ({ fetch }) => {
		const request = await fetch('/api/endpoint.json?query=getBlogPosts', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		});

		const blogPosts = await request.json();
		return {
			status: 200,
			props: {
				blogPosts
			}
		};
	};
</script>

<script>
	export let blogPosts;
</script>

{#each blogPosts as blogPost (blogPost.id)}
	<h1>{blogPost.title}</h1>
{/each}
