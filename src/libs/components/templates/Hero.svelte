<script>
	import { Aflowchars } from '$libs/brands'
	import { Text, Button, Heading, Container } from '$libs/components/atomics'
	import { BadgeGroup } from '$libs/components/moleculs'
	import { CardHero } from '$libs/components/organisms'

	import { PaintBrushIcon, PlayCircleIcon } from '$libs/icons/linear'
</script>

<div
	class="Hero relative flex h-screen w-full flex-col items-center justify-center gap-16 overflow-hidden border-b-2 border-stone-900"
>
	<Aflowchars
		className="Aflowchars-Logo w-96 h-96 absolute -bottom-1/4 opacity-5 -translate-y-1/4 right-0 z-10 stroke-[1.5px]"
	/>

	<!-- Gradient -->
	<div
		class="absolute inset-0 -z-0 h-screen w-full bg-gradient-to-tl from-stone-100/100 via-stone-50/80 to-stone-200/100"
	/>

	<!-- Main -->
	<Container className="z-10">
		<section class="relative z-10 flex flex-col items-center">
			<BadgeGroup className="mb-8" badgeText="Tulisan terbaru" contentText="Gas halaman tulisan" />

			<!-- Hero Text -->
			<div class="mb-12 flex flex-col items-center border-b-2 border-stone-900 text-center">
				<Heading as="h1" size="xl" weight="semibold" className="font-unbounded max-w-4xl pb-6">
					Halo Nama Saya Apenk, Hanya Orang Bodoh
				</Heading>

				<Text size="xl" weight="regular" className="max-w-3xl mb-16 text-stone-500">
					Seorang Frontend nanggung yang cuma bisa slicing UI, hobi ngopi dan udud samsu. Part-time
					as a frontend, Full-time for loving MU.
				</Text>
			</div>

			<!-- Hero Actions -->
			<div class="flex gap-8">
				<Button hierarcy="outline" icon={true} label="Video">
					<PlayCircleIcon className="w-6 h-6 stroke-2 " />
				</Button>

				<Button hierarcy="primary" icon={true} label="Tulisan">
					<PaintBrushIcon className="w-6 h-6 stroke-2" />
				</Button>
			</div>
		</section>
	</Container>

	<!-- Card Image -->
	<CardHero />
</div>
