<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	let posts = data.posts;

	// Array of image URLs
	let images = [
		"/img/partners/geek_sessions_faro_logo.jpg",
		"/img/partners/local_foundation_logo.jpeg",
		"/img/partners/logo_pythonclub_trans.png",
		"/img/partners/quantitative_bio_imaging_lab_logo.jpg"
	];

	// Function to generate random positions
	function getRandomPosition() {
		const top = Math.floor(Math.random() * 80) + 10; // Random top position between 10% and 90%
		const left = Math.floor(Math.random() * 80) + 10; // Random left position between 10% and 90%
		return { top, left };
	}

	// Generate random positions for each image
	let imagePositions = images.map(() => getRandomPosition());
</script>

<Head />

<div class="pt-12">
	<h1
		class="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
	>
		Connect the dots. Add yours.
	</h1>
	<section class="bg-zinc-50 overflow-hidden relative h-screen">
		<div class="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-full flex flex-col justify-center">
			<div class="relative w-full h-full">
				<!-- Render images with random positions -->
				{#each images as image, index}
					<a href="#_" style="position: absolute; top: {imagePositions[index].top}%; left: {imagePositions[index].left}%;">
						<img src={image}
							class="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-24 w-24 object-cover hover:scale-150 transform origin-bottom" alt="#_">
					</a>
				{/each}
			</div>
		</div>
	</section>
	
	<!-- <p class="text-xl prose-xl text-gray-800 dark:text-gray-400">
		Here go our local stars.
	</p> -->
</div>

<Blogs title="Latest Posts" h2 {posts} search={false} count={3} />
