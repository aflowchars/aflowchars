<script>
	const videos = {
		tag: 'UI Design',
		img: 'assets/images/videos-photo.png',
		alt: 'belajar-figma-photo',
		title: 'Belajar UI Design Dasar dengan Figma',
		hours: 2,
		minutes: 10,
		total: 9
	};
</script>

<div class="videos">
	<div class="wrapper">
		<div class="item-1">
			<div class="card-video">
				<div class="wrapper-videos">
					<div class="heading left">
						<span class="text">{videos.tag}</span>
						<img src="assets/icons/close.svg" alt="icon-close" />
					</div>

					<div class="photo">
						<img src={videos.img} alt={videos.alt} />
					</div>

					<div class="cta left">
						<button class="btn">Lihat Video Lainnya</button>
					</div>
				</div>
			</div>
		</div>

		<div class="divider-2">
			<div class="line" />
			<img src="favicon.svg" alt="Logo" />
			<div class="line" />
		</div>

		<div class="item-3">
			<h5 class="heading right">
				<a class="title" href="/videos/belajar-figma"> {videos.title} </a>
			</h5>

			<div class="info">
				<div class="duration">
					<h6 class="tag">Durasi</h6>
					<p>{videos.hours} Jam {videos.minutes} Menit</p>
				</div>
				<div class="total">
					<h6 class="tag">Jumlah</h6>
					<p>{videos.total} Video Total</p>
				</div>
			</div>
			<div class="cta right">
				<button class="btn">Lihat Sekarang</button>
			</div>
		</div>
		<div class="col-span-1">&nbsp;</div>
	</div>
</div>

<style type="postcss">
	.videos {
		@apply container mx-auto;
	}

	.wrapper {
		@apply grid grid-cols-12 gap-x-16;
	}

	.item-1 {
		@apply col-span-6 py-40;
	}

	.card-video {
		@apply border border-black;
	}

	.heading.left {
		@apply flex items-center justify-between py-4 px-6 border-b border-black;
	}

	.text {
		@apply text-xs;
	}

	.photo {
		@apply px-6 pt-6 pb-8;
	}

	.cta.left {
		@apply w-full;
	}

	.cta.left .btn {
		@apply text-center w-full bg-black text-white text-xs py-3;
	}

	.divider-2 {
		@apply col-span-1 h-full flex flex-col items-center space-y-4;
	}

	.line {
		@apply w-[0.5px] h-1/2 bg-black;
	}

	.item-3 {
		@apply col-span-4 self-center py-40;
	}

	.heading.right {
		@apply text-2xl font-light mb-8;
	}

	.title {
		@apply tracking-wider leading-relaxed;
	}

	.info {
		@apply mb-8 flex items-center space-x-12;
	}

	.tag {
		@apply text-[10px] uppercase;
	}

	.cta.right .btn {
		@apply py-3 border-b border-black;
	}
</style>
