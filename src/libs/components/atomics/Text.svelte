<script>
	export let as = 'p' // span, p, h5
	export let size = '' // xl, lg, md
	export let weight = '' // medium, regular
	export let className = '' // custom className
</script>

{#if as === 'span'}
	<span
		class="Text ${(size === 'lg' && 'LG text-lg leading-7') ||
			(size === 'xl' && 'XL text-xl leading-8')} {(weight === 'regular' && 'Regular font-normal') ||
			(weight === 'semibold' && 'Semibold font-semibold')} {className}"
	>
		<slot />
	</span>
{:else if as === 'p'}
	<p
		class="Text ${(size === 'xl' && 'XL text-xl leading-8') ||
			(size === 'lg' && 'LG text-lg leading-7') ||
			(size === 'md' && 'text-base leading-6') ||
			(size === 'sm' && 'text-sm leading-5') ||
			(size === 'xs' && 'text-xs leading-4')} {(weight === 'semibold' &&
			'Semibold font-semibold') ||
			(weight === 'medium' && 'Regular font-medium') ||
			(weight === 'regular' && 'Regular font-normal')} {className}"
	>
		<slot />
	</p>
{:else if as === 'h5'}
	<h5
		class="Text ${(size === 'xl' && 'XL text-xl leading-8') ||
			(size === 'lg' && 'LG text-lg leading-7') ||
			(size === 'md' && 'text-base leading-6')} {(weight === 'semibold' &&
			'Semibold font-semibold') ||
			(weight === 'medium' && 'Regular font-medium') ||
			(weight === 'regular' && 'Regular font-normal')} {className}"
	>
		<slot />
	</h5>
{/if}
