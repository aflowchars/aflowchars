module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	semi: false,
	tailwindConfig: './tailwind.config.cjs',
	plugins: [require('prettier-plugin-svelte'), require('prettier-plugin-tailwindcss')],
	pluginSearchDirs: false,
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
}
