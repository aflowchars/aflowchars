<script>
</script>

<section class="hero">
	<div class="heading">
		<div class="tag">Ora Ono Opo Opo</div>
		<div class="main">Cuma Murid Kehidupan Yang Belajar Berjalan Santai</div>
	</div>

	<div class="card">
		<div class="wrapper">
			<div class="top">
				<span>Intro</span>
				<img src="assets/icons/close.svg" alt="icon-close" />
			</div>

			<div class="photo">
				<img src="assets/images/hero-photo.png" alt="Apenk" />
			</div>

			<div class="description">
				<h5>Afochar Syabnirusmanto</h5>
				<p>(a.k.a apenk)</p>
			</div>

			<div class="job">
				<span>UI Designer</span>
			</div>
		</div>
	</div>

	<div class="next">
		<span>Lanjut</span>
		<img src="assets/icons/chevron-down.svg" alt="icon-chevron-down" />
	</div>
</section>

<style type="postcss">
	/* Hero */
	.hero {
		@apply container mx-auto pt-24 flex flex-col items-center justify-center;
	}

	.heading {
		@apply flex flex-col items-center justify-center space-y-2 mb-16;
	}

	.tag {
		@apply text-xs uppercase;
	}

	.main {
		@apply text-4xl w-8/12 text-center leading-relaxed tracking-widest font-light;
	}

	.card {
		@apply w-56 border border-black;
	}

	.card .wrapper {
		@apply flex flex-col items-center justify-center;
	}

	.card .wrapper .top {
		@apply flex items-center justify-between border-b p-4 border-black w-full;
	}

	.card .wrapper .photo {
		@apply pt-8 pb-4;
	}

	.card .wrapper .photo img {
		@apply w-16 h-16;
	}

	.card .wrapper .description {
		@apply text-center mb-12;
	}

	.card .wrapper .description h5 {
		@apply font-medium text-sm;
	}

	.card .wrapper .description p {
		@apply text-xs;
	}

	.card .wrapper .job {
		@apply bg-black text-white w-full text-center py-3 text-xs;
	}

	.hero .next {
		@apply flex flex-col items-center mt-12 mb-24;
	}
</style>
