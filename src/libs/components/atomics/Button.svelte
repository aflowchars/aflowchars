<script>
	import { Text } from '$libs/components/atomics'

	export let hierarcy = ''
	export let icon = false
	export let label = ''
</script>

{#if hierarcy === 'primary'}
	<button class="Button Primary px-7 py-4">
		{#if icon}
			<span class="Icon text-stone-50">
				<slot />
			</span>
		{/if}
		<Text as="span" size="lg" weight="semibold" className="text-stone-50">
			{label}
		</Text>
	</button>
{/if}

{#if hierarcy === 'outline'}
	<button class="Button Outline px-7 py-4">
		{#if icon}
			<span class="Icon">
				<slot />
			</span>
		{/if}
		<Text as="span" size="lg" weight="semibold">
			{label}
		</Text>
	</button>
{/if}

<style lang="postcss" scoped>
	.Button.Primary {
		/* Base */
		@apply flex items-center gap-3 rounded-full;

		/* Bg */
		@apply bg-gradient-to-tr from-stone-700 to-stone-900;

		/* Hover */
		@apply hover:from-stone-900/90 hover:to-stone-700/90;

		/* Ring */
		@apply ring-2 ring-transparent;

		/* Animation */
		@apply transition-all duration-500 ease-in-out;
	}

	.Button.Outline {
		/* Base */
		@apply flex items-center gap-3;

		/* Hover */
		@apply hover:bg-gradient-to-tr hover:from-stone-900/5 hover:to-stone-700/5;

		/* Focus */
		@apply rounded-full ring-2 ring-stone-900;
	}
</style>
