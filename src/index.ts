import fs from 'node:fs'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options?: Options) => {
  return {
    name: 'unplugin-embed',
    load(id) {
      const isEmbed = options && typeof (options.filter) === 'function' ? options.filter(id) : id.endsWith('?embed')
      if (isEmbed) {
        const file = id.slice(0, -6)
        const content = fs.readFileSync(file, 'base64')
        return `export default "${content}";`
      }
    },
  }
}
export const unplugin = createUnplugin(unpluginFactory)

export default unplugin
