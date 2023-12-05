<script lang="ts">
	import MovieResults from '$lib/components/MovieResults.svelte';
	import MovieTitleSearch from '$lib/components/MovieTitleSearch.svelte';
	import supabaseClient from '$lib/supabaseClient';
	import { onMount } from 'svelte';

	import type { Movie } from '$lib/movie';
	export let Movies: Movie[] = [];

	const fetchData = async () => {
		const { data, error } = await supabaseClient.from('Movies').select(`
                    *,
                    Directors (
                    *
                    )
                `);

		if (error) {
			console.error('Error fetching data:', error.message);
		} else {
			Movies = data;
			console.log({ data });
		}
	};

	const searchData = async (event: { detail: { searchTerm: string } }) => {
		let searchTerm = '%' + event.detail.searchTerm + '%';
		const { data, error } = await supabaseClient
			.from('Movies')
			.select(
				`
                    *,
                    Directors (
                    *
                    )
                `
			)
			.ilike('Title', searchTerm);

		if (error) {
			console.error('Error fetching data:', error.message);
		} else {
			Movies = data;
			console.log({ data });
		}
	};

	onMount(() => {
		fetchData();
	});
</script>

<div class="p-8">
	<MovieTitleSearch on:searchMovieTitle={searchData} />
</div>

<div class="p-8">
	<MovieResults {Movies} />
</div>
