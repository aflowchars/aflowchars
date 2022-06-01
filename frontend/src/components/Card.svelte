<script>
	// @ts-nocheck

	export let tag, image, title, preview;
</script>

<div class="item">
	<div class="heading">
		<span class="tag">{tag}</span>
		<img src="assets/icons/close.svg" alt="icon-close" />
	</div>

	<div class="photo">
		<img src={image} alt="Apenk" />
	</div>

	<div class="content">
		<h5 class="title">
			<a class="text" href="/blogs/kerning">{title}</a>
		</h5>
		<p class="preview">
			{preview}
		</p>
	</div>

	<div class="cta">
		<button class="btn">Lanjutkan Baca</button>
	</div>
</div>

<style type="postcss">
	.item {
		@apply col-span-4 border border-black;
	}

	.heading {
		@apply flex items-center justify-between p-4 border-b border-black;
	}

	.tag {
		@apply text-xs;
	}

	.photo {
		@apply px-4 py-6;
	}

	.content {
		@apply px-4 mb-8;
	}

	.title {
		@apply mb-2;
	}

	.text {
		@apply font-normal text-base;
	}

	.preview {
		@apply text-sm leading-relaxed font-light;
	}

	.cta {
		@apply w-full;
	}

	.btn {
		@apply text-center w-full bg-black text-white text-xs py-3;
	}
</style>
