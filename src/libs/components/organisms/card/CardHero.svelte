<script>
	import { Text } from '$libs/components/atomics'
</script>

<section class="Card-Hero">
	<!-- Divider -->
	<div class="absolute inset-0 h-2 w-full bg-gradient-to-tl from-stone-900 to-stone-600" />

	<!-- Avatar -->
	<img class="h-20 w-20 object-cover" src="/hero-apenk-photo.png" alt="Apenk-Profile" />

	<!-- Text -->
	<div class="flex max-w-3xl flex-col justify-center gap-2">
		<Text as="p" size="lg" weight="semibold" className="font-unbounded"
			>Afochar<br /> Syabnirusmanto
		</Text>

		<Text as="span" size="sm" weight="regular" className="text-stone-500">Frontend Developer</Text>
	</div>
</section>

<style lang="postcss" scoped>
	.Card-Hero {
		/* Position */
		@apply absolute bottom-1/3 left-12 z-10 flex h-fit w-fit rotate-45 gap-4 overflow-hidden;

		/* Rounded */
		@apply rounded-xl rounded-b-none border-2 border-stone-800;

		/* Background */
		@apply bg-gradient-to-br from-stone-200 to-stone-50 px-8 pt-8 pb-4 shadow-sm;
	}
</style>
