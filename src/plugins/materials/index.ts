import type { App, Component } from 'vue'

const modules = import.meta.glob<{ default: Component }>('./**/*.vue', { eager: true })

const components: Record<string, Component> = {}

Object.entries(modules).forEach(([path, module]) => {
  const match = path.match(/\/(.+)\.vue$/)
  if (!match) return

  const key = match[1]
  if (!key) return
  components[key] = module.default
})

// グローバル登録
export default {
  install(app: App) {
    Object.entries(components).forEach(([key, component]) => {
      app.component(key, component)
    })
  },
}
