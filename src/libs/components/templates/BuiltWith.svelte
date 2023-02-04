<script>
	import { Container, Heading, Text } from '$libs/components/atomics'

	import { SvelteKit, Tailwind, UntitledUI } from '$libs/brands'

	export const brands = [
		{ title: 'Untitled UI', logo: UntitledUI },
		{ title: 'SvelteKit', logo: SvelteKit },
		{ title: 'Tailwind', logo: Tailwind }
	]
</script>

<section class="Built-With border-b-2 border-stone-900 bg-red-300/10 py-24">
	<Container className="space-y-8">
		<!-- Header -->
		<div class="Header w-full text-center">
			<Text as="h5" size="md" weight="medium" className="text-stone-900 font-unbounded">
				Dibangun penuh hampa dengan
			</Text>
		</div>

		<!-- Brands -->
		<div class="Brands grid grid-cols-3">
			{#each brands as { title, logo }}
				<div class="flex items-center gap-2.5 place-self-center">
					<!-- Logo -->
					<svelte:component this={logo} />

					<Heading as="h5" size="sm" weight="semibold">{title}</Heading>
				</div>
			{/each}
		</div>
	</Container>
</section>

<style lang="postcss" scoped>
</style>
