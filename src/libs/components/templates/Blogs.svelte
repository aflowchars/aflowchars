<script>
	import { Badge, Container, Heading, Text } from '$libs/components/atomics'
	import { CardBlog } from '$libs/components/organisms'
</script>

<div class="Video-Blogs relative border-b-2 border-stone-900 py-40">
	<Container>
		<div class="Header mx-auto mb-24 max-w-5xl">
			<div class="Text flex flex-col items-center space-y-4 text-center">
				<Badge>Tulisan</Badge>
				<Heading as="h1" size="lg" weight="semibold">Ketikan Ketikan Kecil</Heading>

				<Text as="p" size="lg" weight="regular" className="w-9/12 text-stone-500">
					Disini saya akan membagikan video sekaligus tulisan saya, karena saya sadari belajar itu
					ada yang enjoy menggunakan video, ada juga tulisan..
				</Text>
			</div>
		</div>

		<div class="Video-Blogs grid grid-cols-3 gap-x-12 gap-y-16">
			{#each [1, 2, 3, 4, 5] as blog}
				<CardBlog />
			{/each}

			<a href="/">
				<div
					class="group flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-stone-900 to-stone-700 text-white hover:bg-gradient-to-tl"
				>
					<span
						class="flex items-center gap-4 border-b-4 border-transparent pb-4 font-unbounded text-4xl transition-all duration-500 ease-in-out group-hover:border-white"
					>
						See all
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="4"
							stroke="currentColor"
							class="h-8 w-8"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
							/>
						</svg>
					</span>
				</div>
			</a>
		</div>
	</Container>
</div>
