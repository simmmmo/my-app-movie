<script lang="ts">
	import {
		Heading,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import type { Movie } from '$lib/movie';
	export let Movies: Movie[] = [];
</script>

<Heading>Movie Results</Heading>

<Table striped={true}>
	<TableHead>
		<TableHeadCell>MovieNo</TableHeadCell>
		<TableHeadCell>Title</TableHeadCell>
		<TableHeadCell>RunTime</TableHeadCell>
		<TableHeadCell>DirectorId</TableHeadCell>
	</TableHead>
	<TableBody>
		{#each Movies as Movie}
			<TableBodyRow>
				<TableBodyCell>{Movie.MovieNo}</TableBodyCell>
				<TableBodyCell>{Movie.Title}</TableBodyCell>
				<TableBodyCell>{Movie.RunTime}</TableBodyCell>
				<TableBodyCell>{Movie.Directors.Name}</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
