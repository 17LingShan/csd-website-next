import { useNavigationStore } from '~~/stores/navigation'
import { CustomPageMeta } from '~~/types'

export default defineNuxtRouteMiddleware((to) => {
  const { update } = useNavigationStore()
  const meta = to.meta as CustomPageMeta
  if (meta.navigationOptions) {
    update(meta.navigationOptions)
  }
})
