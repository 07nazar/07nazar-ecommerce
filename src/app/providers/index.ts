import { ReactNode } from 'react'

import { withRouter } from './withRouter'
import { withTheme } from './withTheme'

export const withProviders = (component: () => ReactNode) => withTheme(withRouter(component))
