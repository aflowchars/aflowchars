<script>
	import '../app.css'
	import { Hero, BuiltWith, Projects, Blogs } from '$libs/components/templates'
	import { Container, Heading, Text } from '$libs/components/atomics'
	import Badge from '$libs/components/atomics/Badge.svelte'

	const showcaseData = [
		{
			src: 'https://cdn.dribbble.com/userupload/4098051/file/original-a43ae8fb303bc6bbaf582fe79feb4dce.jpg?compress=1&resize=1024x768',
			title: 'Ruang - Finding Good Property',
			date: '12-40 Jan 23'
		},
		{
			src: 'https://cdn.dribbble.com/userupload/4293760/file/original-7fbd1c31eb0253ed13e6e7098b45429e.png?compress=1&resize=1024x768',
			title: 'Gamepedia - Esport source',
			date: '32-12 Feb 23'
		},
		{
			src: 'https://cdn.dribbble.com/userupload/4298549/file/original-f32f5252ef7b9839b2cff0648ddc3a3d.png?compress=1&resize=1024x768',
			title: 'Sportia - Live Score Dashboard',
			date: '32-12 Feb 23'
		},
		{
			src: 'https://cdn.dribbble.com/userupload/4244088/file/original-70602240e4cd0f7759ffb7ca3b656e82.png?compress=1&resize=1024x768',
			title: 'Polisia - Editor Photo Online',
			date: '32-12 Feb 23'
		},
		{
			src: 'https://cdn.dribbble.com/userupload/3560523/file/original-2394ea4c26b560c5c6a2535c7d78ba93.png?compress=1&resize=1024x768',
			title: 'Nija Works - Agency Studio',
			date: '32-12 Feb 23'
		},
		{
			src: 'https://cdn.dribbble.com/userupload/3014610/file/original-4a4917069382e9832b08e03f68d3ebf9.png?compress=1&resize=1024x768',
			title: 'Undro - Workout Program',
			date: '32-12 Feb 23'
		}
	]
</script>

<svelte:head>
	<title>Aflowchars</title>
</svelte:head>

<Hero />

<BuiltWith />

<Blogs />

<Projects />

<div class="space-y-24 border-b-2 border-stone-900 py-32">
	<Container className="space-y-4 flex flex-col items-center">
		<Badge>Projek Terkini</Badge>
		<Heading as="h3" size="lg" className="text-center w-8/12">Projek Terbaru Bosque</Heading>
	</Container>

	<div class="relative grid grid-cols-3 place-content-center gap-0 border-2 border-stone-900">
		{#each showcaseData as { src, date, title }, index}
			<a href="/">
				<div
					class="group relative flex min-h-[32rem] w-full rounded-2xl border-dotted border-stone-900 p-8"
				>
					<div
						class="flex h-full w-full {index % 2 === 0
							? 'flex-col'
							: 'flex-col-reverse'} justify-between transition-all duration-500 ease-in-out"
					>
						<div class="aspect-video w-full overflow-hidden">
							<img
								class="h-full w-full scale-100 object-cover object-left-top transition-transform duration-500 ease-in-out group-hover:scale-105"
								{src}
								alt="Halo"
							/>
						</div>

						<div>
							<Heading
								as="h3"
								size="sm"
								className="pb-2 mb-2 border-b-4 w-fit border-transparent group-hover:border-stone-900"
								>{title}</Heading
							>
							<Text>{date}</Text>
						</div>
					</div>
				</div>
			</a>
		{/each}

		<div class="absolute top-1/2 z-20 h-0.5 w-full -translate-y-1/2 bg-stone-900" />
		<div class="absolute left-1/3 z-20 h-full w-0.5 -translate-x-1/3 bg-stone-900" />
		<div class="absolute right-1/3 z-20 h-full w-0.5 -translate-x-1/3 bg-stone-900" />
	</div>

	<div class="mx-8 rounded-full border-2 border-stone-900 p-2 ">
		<button
			class="group flex w-full items-center justify-between rounded-full py-8 px-16 transition-all duration-500 ease-in-out hover:bg-stone-900 hover:text-white"
		>
			<Heading as="h5" size="sm">Lihat Semua</Heading>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-14 w-14 group-hover:rotate-90"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
				/>
			</svg>
		</button>
	</div>
</div>
