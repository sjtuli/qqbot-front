module.exports = {
  printWidth: 180,
  semi: true,
  vueIndentScriptAndStyle: true,
  useTabs: true,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto',
}
