import Tabs from '@mui/material/Tabs'
import { ReactNode, FC } from 'react'

interface ITabsBox {
  children: ReactNode
  value: number
  handleChange: (e: React.SyntheticEvent, val: number) => void
}

export const TabsBox: FC<ITabsBox> = ({ children, handleChange, value }) => (
  <Tabs
    value={value}
    textColor="primary"
    onChange={handleChange}
    aria-label="basic tabs example"
    orientation="vertical">
    {children}
  </Tabs>
)
