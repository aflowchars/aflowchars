<footer class="footer">
	<ul class="wrapper">
		<li class="year">Copywrong 2022</li>
		<li class="brand">Aflowchars</li>
		<li class="notice">Backend Soon!</li>
	</ul>
</footer>

<style type="postcss">
	.footer {
		@apply py-8;
	}

	.wrapper {
		@apply grid grid-cols-12 gap-x-16 uppercase text-xs;
	}

	.year {
		@apply col-span-4 place-self-end;
	}

	.brand {
		@apply col-span-4 place-self-center;
	}

	.notice {
		@apply col-span-4 place-self-start;
	}
</style>
