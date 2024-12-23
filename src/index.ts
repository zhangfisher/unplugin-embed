import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options?: Options) => {
  return {
    name: 'unplugin-embed',
    transformInclude(id) {
      return options && typeof (options.filter) === 'function' ? options.filter(id) : id.endsWith('?embed')
    },
    transform(code) {
      const base64Code = btoa(code)
      return `export default "${base64Code}";`
    },
  }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
