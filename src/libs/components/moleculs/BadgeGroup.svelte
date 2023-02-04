<script>
	/**
	 * @property {string} badgeText
	 * @property {string} contentText
	 * @property {string} className
	 */
	export let badgeText = ''
	export let contentText = ''
	export let className = ''
</script>

<div
	class="Badge-Group flex w-fit gap-3 rounded-full bg-gradient-to-br from-stone-600 to-stone-900 px-1.5 py-1.5 pr-4 {className}"
>
	<div class="Badge-Text rounded-full bg-stone-50 py-0.5 px-2.5">
		<span class="Text Sm Medium text-sm font-medium leading-5">
			{badgeText}
		</span>
	</div>

	<button class="Badge-Content flex items-center gap-1 text-stone-50">
		<span class="Text Sm Medium text-sm font-medium leading-5">
			{contentText}
		</span>
	</button>
</div>
