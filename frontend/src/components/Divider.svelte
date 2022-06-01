<script>
	// @ts-nocheck

	export let left = '';
	export let right = '';
	export let type = '';
	export let to1 = '';
	export let to2 = '';
	export let to3 = '';
	export let to4 = '';
	export let label1 = '';
	export let label2 = '';
	export let label3 = '';
	export let label4 = '';
</script>

{#if type === 'link'}
	<div class="divider social">
		<ul class="list">
			<li class="item">
				<a class="link" href={to1}>{label1}</a>
			</li>

			<li class="item">
				<a class="link" href={to2}>{label2}</a>
			</li>

			<li class="item line" />

			<li class="item">
				<a class="link" href={to3}>{label3}</a>
			</li>

			<li class="item">
				<a class="link" href={to4}>{label4}</a>
			</li>
		</ul>
	</div>
{:else}
	<div class="divider">
		<ul class="list">
			<li class="item">
				{left}
			</li>

			<li class="item line" />

			<li class="item">
				{right}
			</li>
		</ul>
	</div>
{/if}

<style type="postcss">
	.divider {
		@apply w-full;
	}

	.list {
		@apply flex items-center space-x-4 text-xs uppercase;
	}

	.line {
		@apply h-[0.5px] w-full bg-black;
	}
</style>
