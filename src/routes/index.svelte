<script lang="ts">
	import Seo from '$lib/components/SEO.svelte'
import IconLogo from '~icons/emojione-v1/bookmark'
	export let user
</script>

<div class="bg-red-500 p-2">Change the styles here with super fast HRM</div>

<Seo title="Home" />

<div class="flex flex-col justify-center items-center relative">
	<!-- App logo and tagline -->
	<div class="w-full text-center mb-4 flex flex-col place-items-center">
		<div class="banner flex flex-col place-items-center mt-32 mb-2">

      <IconLogo class="w-20 h-20"/>
			<h3 class="text-6xl text-red-500"><strong>Top SvelteKit</strong></h3>
			<h3 class="px-3 py-1 text-2xl uppercase">Starter Recipe</h3>
			<small class="uppercase font-semibold text-gray-800 mt-4">
				Typescript - TailwindCSS - DaisyUI- <small class="bg-green-700 text-white px-2"
					>Supabase</small
				></small
			>
			Authentication + Profile
		</div>
		<p class="mb-6">
			<strong>Svelte Starter Kit</strong> is an opinionated boilerplate based off of SvelteKit, with
			all the bells and whistles you want ready, up and running when starting any Full-stack Svelte/Javascript
			project.
		</p>
		{#if user && !user.guest}
			<a
				class="bg-gray-500 border border-gray-600 text-white px-4 py-2 rounded shadow"
				href="/profile"
				title="View Profile">View Profile</a
			>
		{:else}
			<a
				class="bg-gray-500 border border-gray-600 text-white px-4 py-2 rounded shadow"
				href="/auth"
				title="Sign Up or Sign In">Get Started</a
			>
		{/if}
	</div>
</div>
