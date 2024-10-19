import { makeInstaller} from '@lin-ui/utils'
import components  from './components'
import '@lin-ui/theme/index.css'

const installer = makeInstaller(components)

export * from '@lin-ui/components'
export default installer