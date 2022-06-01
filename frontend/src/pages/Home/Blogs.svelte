<script>
	import Card from '../../components/Card.svelte';

	const blogs = [
		{
			id: 1,
			tag: 'UI Design',
			image: 'assets/images/blogs-1.jpg',
			title: 'Kerning? Keren Ning Pusing',
			preview:
				'Sebagian dari kita sering bertanya-tanya, kok desainnya bisa rapi begitu ya? Kok minimalis? Loh kok beda dengan yang kubuat ...'
		},
		{
			id: 2,
			tag: 'Frontend',
			image: 'assets/images/blogs-2.jpg',
			title: 'Mengapa Tailwind CSS Populer?',
			preview:
				'Mungkin Bootstrap masih menjadi raja, tapi jikalau raja sudah tak ada pesaingnya, kan hampa. Maka dari itu Tailwind CSS, membawa segalanya ...'
		},
		{
			id: 3,
			tag: 'UX Design',
			image: 'assets/images/blogs-3.jpg',
			title: 'Warna? Kok Bisa Ya???',
			preview:
				'Pengen tahu efek nyata dari warna? Coba atur HP anda jadi hitam putih pada pengaturan warna. Ada fitur dark mode? Silahkan dicoba juga ...'
		}
	];
</script>

<section class="blogs">
	<div class="heading">
		<h5 class="text">
			Suka menulis, semoga rubrik ini mampu berbagi manfaat kepada pembaca dari penulis yang bodoh
			kuadrat level empat
		</h5>
		<button class="cta">Lihat Semua</button>
	</div>

	<div class="card-blogs">
		{#each blogs as blog}
			<Card tag={blog.tag} image={blog.image} title={blog.title} preview={blog.preview} />
		{/each}
	</div>
</section>

<style type="postcss">
	.blogs {
		@apply container mx-auto py-40;
	}

	.heading {
		@apply flex flex-col items-center justify-center;
	}

	.text {
		@apply text-2xl w-9/12 font-light text-center leading-relaxed;
	}

	.cta {
		@apply py-3 my-8 border-b border-black;
	}

	.card-blogs {
		@apply grid grid-cols-12 gap-x-16 py-20;
	}
</style>
