<section class="socials">
	<ul class="social-media discuss">
		<li class="separate-1" />
		<li class="heading">
			<h5 class="text">Pengen Ngobrol dan Diskusi Bersama?</h5>
		</li>
		<li class="social">
			<a class="link" href="https://www.instagram.com/aflowchars">Instagram</a>
		</li>
		<li class="social">
			<a class="link" href="https://www.youtube.com/channel/UCE2pVVDfPcFIncIEjMPYOpQ">Youtube</a>
		</li>
		<li class="separate-2" />
	</ul>

	<ul class="social-media artistic">
		<li class="separate-2" />

		<li class="social">
			<a class="link" href="https://dribbble.com/aflowchars">Github</a>
		</li>
		<li class="social">
			<a class="link" href="https://github.com/aflowchars">Dribbble</a>
		</li>
		<li class="heading">
			<h5 class="text right">Pengen Lihat Karya Biasa Lainnya</h5>
		</li>
		<li class="separate-1" />
	</ul>
</section>

<style type="postcss">
	.social-media {
		@apply grid grid-cols-12 gap-x-16 place-items-center;
	}

	.discuss {
		@apply pt-40 pb-20;
	}

	.artistic {
		@apply pt-20 pb-40;
	}

	.separate-1 {
		@apply col-span-1;
	}

	.heading {
		@apply col-span-5 border-b border-black py-6;
	}

	.text {
		@apply text-3xl leading-relaxed tracking-wider;
	}

	.text.right {
		@apply text-right;
	}

	.social {
		@apply col-span-2;
	}

	.link {
		@apply text-xl;
	}

	.separate-1 {
		@apply col-span-1;
	}

	.separate-2 {
		@apply col-span-2;
	}
</style>
