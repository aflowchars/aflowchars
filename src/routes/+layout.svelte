<script>
	import { Header } from '$libs/components/organisms'
</script>

<div class="aflowchars relative flex flex-col items-center justify-center">
	<Header />

	<main class="Main w-full">
		<slot />
	</main>
</div>
