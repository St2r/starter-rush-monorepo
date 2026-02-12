import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const antfuPath = require.resolve('@antfu/eslint-config', {
  paths: ['./common/autoinstallers/eslint/node_modules'],
})
const antfu = (await import(antfuPath)).default

export default antfu({
  ignores: ['./packages', './common/scripts'],
  type: 'lib',
})
