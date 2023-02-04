<script>
	import { Badge, Text } from '$libs/components/atomics'
</script>

<div class="Card-Blog group relative">
	<div
		class="absolute left-2 -bottom-2 -z-20 h-full w-full rounded-2xl border-2 border-stone-900 bg-white transition-colors duration-500 ease-in-out group-hover:bg-stone-900"
	/>
	<div class="Card relative z-10 w-full rounded-2xl border-4 border-stone-900 bg-stone-50 p-4 pb-8">
		<a href="/" class="absolute inset-0 z-10 h-full w-full">&nbsp;</a>

		<!-- Photo -->
		<div class="Photo h-72 w-full rounded-t-2xl border-2 border-stone-900">
			<img
				class="Image h-full w-full rounded-t-2xl object-cover"
				src="/anete-lusina--4Wi_ii6StY-unsplash.jpg"
				alt="anete-lusina--4Wi_ii6StY-unsplash"
			/>
		</div>

		<!-- Category -->
		<div class="relative z-20 flex gap-2 pt-8 pb-6">
			<Badge>Tailwind</Badge>
			<Badge>Svelte</Badge>
		</div>

		<div class="Divider mb-4 h-0.5 w-full bg-stone-900" />

		<!-- Link Heading -->
		<Text as="h5" size="xl" weight="semibold" className="mb-2 font-unbounded">
			What is a UI Kit? Examples and Why You Should Use One
		</Text>

		<!-- Text -->
		<Text size="md" weight="regular" className="line-clamp-3 text-stone-600">
			You don't need a huge library with 100s of fonts and expensive premium typefaces. Here's our
			pick for the best quality FREE fonts for modern UI design.
		</Text>

		<!-- Author -->
		<div class="mt-6 flex gap-3">
			<img class="h-10 w-10 rounded-full object-cover" src="/hero-apenk-photo.png" alt="Apenk Ni" />

			<div class="Text space-y-1 text-stone-600">
				<Text size="sm" weight="semibold" className="text-stone-900">Afochar Syabnirusmanto</Text>
				<div class="flex items-center gap-1">
					<Text as="p" size="xs" weight="regular">23 Jan 2023</Text>
					<Text as="p" size="xs" weight="regular">&bullet;</Text>
					<Text as="p" size="xs" weight="regular">10 Comments</Text>
				</div>
			</div>
		</div>
	</div>
</div>
