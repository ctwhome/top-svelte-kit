<script>
	import '../global.css'

	import { navigating } from '$app/stores'
	import PageNavIndicator from '$lib/components/PageNavIndicator.svelte'
	import Header from '$lib/components/Header.svelte'
	import AlertList from '$lib/alert/AlertList.svelte'
	import ModalBackdrop from '$lib/components/modal/ModalBackdrop.svelte'
</script>

{#if $navigating}
	<PageNavIndicator />
{/if}

<div class="h-screen drawer w-full">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="flex flex-col drawer-content">
		<!-- Navbar -->
		<div class="w-full navbar bg-base-300">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
			<a href="/" class="flex-1 px-2 mx-2">Navbar Title</a>
			<div class="flex-none hidden lg:block">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					<li><a href="/">Navbar Item 1</a></li>
					<li><a href="/">Navbar Item 2</a></li>
				</ul>
			</div>
		</div>
		<Header />
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
			<!-- Sidebar content here -->
			<li><a href="/">Sidebar Item 1</a></li>
			<li><a href="/">Sidebar Item 2</a></li>
		</ul>
	</div>
</div>

<AlertList />

<!-- <Footer/> -->
