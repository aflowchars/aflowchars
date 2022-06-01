<script>
	// @ts-nocheck

	// Page
	import Hero from '../pages/Home/Hero.svelte';
	import Quotes from '../pages/Home/Quotes.svelte';
	import Videos from '../pages/Home/Videos.svelte';
	import Blogs from '../pages/Home/Blogs.svelte';
	import Socials from '../pages/Home/Socials.svelte';
	import Footer from '../pages/Home/Footer.svelte';

	// Utilities
	import Divider from '../components/Divider.svelte';

	const divider = {
		videos: 'videos',
		blogs: 'blogs',
		copyright: 'copyright',
		socials: 'socials',
		right: 'check'
	};

	const dividerLink = {
		ig: {
			to1: 'https://www.instagram.com/aflowchars',
			label1: 'Instagram'
		},
		drib: {
			to2: 'https://www.dribbble.com/aflowchars',
			label2: 'Dribbble'
		},
		git: {
			to3: 'https://www.github.com/aflowchars',
			label3: 'Github'
		},
		yt: {
			to4: 'https://www.youtube.com/channel/UCE2pVVDfPcFIncIEjMPYOpQ',
			label4: 'Youtube'
		}
	};
</script>

<main class="home">
	<Hero />

	<Divider
		type="link"
		to1={dividerLink.ig.to1}
		to2={dividerLink.drib.to2}
		to3={dividerLink.git.to3}
		to4={dividerLink.yt.to4}
		label1={dividerLink.ig.label1}
		label2={dividerLink.drib.label2}
		label3={dividerLink.git.label3}
		label4={dividerLink.yt.label4}
	/>

	<Quotes />

	<Divider left={divider.videos} right={divider.right} />

	<Videos />

	<Divider left={divider.blogs} right={divider.right} />

	<Blogs />

	<Divider left={divider.socials} right={divider.right} />

	<Socials />

	<Divider left={divider.copyright} right={divider.right} />

	<Footer />
</main>
