<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Aflowchars</title>
</svelte:head>

<header class="header">
	<nav class="navbar">
		<a class="link" href="/">Menu</a>
		<a class="logo" href="/about">
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M25.3333 15.7183C21.25 17.1969 18.5187 10.4364 16.4444 15.7183C13.6667 22.7914 10.75 12.9695 6.66666 15.7183"
					stroke="black"
				/>
				<path
					d="M30 16C30 19.5609 28.6431 22.9879 26.2056 25.5837C23.768 28.1794 20.4329 29.7488 16.8791 29.9724C13.3252 30.196 9.81975 29.057 7.07606 26.7872C4.33238 24.5174 2.55669 21.2874 2.11039 17.7547C1.6641 14.2219 2.58074 10.6518 4.67376 7.77101C6.76678 4.89021 9.87888 2.91522 13.3767 2.24798C16.8744 1.58074 20.495 2.27141 23.5016 4.17941C26.5081 6.08741 28.6746 9.06936 29.5602 12.5183"
					stroke="black"
				/>
				<line x1="11.3333" y1="10.8333" x2="16" y2="10.8333" stroke="black" />
				<line x1="16" y1="20.1667" x2="20.6667" y2="20.1667" stroke="black" />
			</svg>
		</a>
		<a class="link" href="/settings">Search</a>
	</nav>
</header>

<slot />

<style>
	.header {
		@apply container mx-auto;
	}
	.navbar {
		@apply flex items-center justify-between py-7 border-b border-black uppercase text-xs;
	}
</style>
