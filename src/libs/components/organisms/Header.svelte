<script>
	import { blur, fly } from 'svelte/transition'
	import { Aflowchars } from '$libs/brands'
	import { Bars3Icon, BriefcaseIcon, XMarkIcon } from '$libs/icons/linear'

	let showHeader = false
</script>

<header
	class="Header fixed top-4 left-1/2 z-[60] flex h-fit w-full max-w-lg -translate-x-1/2 justify-center rounded-full bg-stone-100 bg-gradient-to-tr p-2 shadow-sm"
>
	<div
		class="Header-Wrap container mx-auto flex items-center justify-between rounded-full border-2 border-stone-900 p-2 px-4"
	>
		<button on:click={() => (showHeader = !showHeader)} class="border-r-2 border-stone-900 pr-2">
			{#if !showHeader}
				<Bars3Icon className="Bars2-Icon w-6 h-6 stroke-[1.5px]" />
			{/if}
			{#if showHeader}
				<XMarkIcon className="XMark-Icon w-6 h-6 stroke-[1.5px]" />
			{/if}
		</button>

		<Aflowchars className="Aflowchars-Logo w-8 h-8 stroke-[1.5px]" />

		<button class="border-l-2 border-stone-900 pl-2">
			<BriefcaseIcon className="Briefcase-Icon w-6 h-6 stroke-[1.5px]" />
		</button>
	</div>
</header>
{#if showHeader}
	<section class="fixed top-0 left-0 z-50 h-screen w-full">
		<div
			transition:fly={{ duration: 500, y: 0, opacity: 0 }}
			class="absolute z-0 h-full w-full bg-stone-900/60 backdrop-blur-sm"
		/>

		<div class="h-full w-full p-40 pt-32 pb-0">
			<div
				transition:fly={{ duration: 500, y: 480, opacity: 50 }}
				class="relative z-10 h-full w-full rounded-t-[3rem] bg-stone-100 p-4 pb-0 shadow-2xl"
			>
				<div class="h-full w-full rounded-t-[3rem] border-2 border-b-0 border-stone-900 p-24">
					<h1>Halo</h1>
				</div>
			</div>
		</div>
	</section>
{/if}
