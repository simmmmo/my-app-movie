<script lang="ts">
	import { Heading, Search, Button } from 'flowbite-svelte';
	import { createEventDispatcher } from 'svelte';
	let searchTerm: string = '';
	const dispatch = createEventDispatcher();

	function searchMovieHandler() {
		dispatch('searchMovieTitle', { searchTerm: searchTerm });
		console.log('search movie', searchTerm);
	}
</script>

<Heading>Movie Title Search</Heading>
<Search
	id="searchMovie"
	name="searchMovie"
	bind:value={searchTerm}
	placeholder="Search Movie Title"
>
	<Button on:click={searchMovieHandler}>Search</Button>
</Search>
