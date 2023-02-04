<script>
	export let as = 'h3'
	export let size = ''
	export let weight = ''
	export let className = ''
</script>

{#if as == 'h1'}
	<h1
		class="Display font-unbounded {(size == 'xl' && ' XL text-6xl leading-tight -tracking-wide') ||
			(size === 'lg' && 'LG text-5xl leading-tight') ||
			(size === 'md' && 'MD text-4xl leading-tight -tracking-wide') ||
			(size === 'sm' && 'SM text-3xl leading-tight')} {weight == 'semibold' &&
			'Semibold font-semibold'} {className}"
	>
		<slot />
	</h1>
{:else if as == 'h3'}
	<h3
		class="Display font-unbounded {(size == 'xl' && ' XL text-6xl leading-tight -tracking-wide') ||
			(size === 'md' && 'MD text-4xl leading-tight -tracking-wide') ||
			(size === 'lg' && 'LG text-5xl leading-tight') ||
			(size === 'sm' && 'SM text-3xl leading-tight')} {weight == 'semibold' &&
			'Semibold font-semibold'} {className}"
	>
		<slot />
	</h3>
{:else if as == 'h5'}
	<h5
		class="Display font-unbounded {(size == 'xl' && ' XL text-6xl leading-tight -tracking-wide') ||
			(size === 'lg' && 'LG text-5xl leading-tight') ||
			(size === 'md' && 'MD text-4xl leading-tight -tracking-wide') ||
			(size === 'sm' && 'SM text-3xl leading-tight')} {weight == 'semibold' &&
			'Semibold font-semibold'} {className}"
	>
		<slot />
	</h5>
{/if}
