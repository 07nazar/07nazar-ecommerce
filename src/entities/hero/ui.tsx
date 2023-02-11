import { Box, Tab } from '@mui/material'
import { useState } from 'react'

import { TabsBox } from 'shared/ui/TabsBox'

const shopTabPanel = (array: Iarr[], value: number): JSX.Element => <h1>{array[value].title}</h1>

export function BasicTabs() {
  const [value, setValue] = useState(0)

  const handleChange = (e: React.SyntheticEvent, val: number) => {
    setValue(val)
  }

  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabsBox handleChange={handleChange} value={value}>
          <Tab label="Clothes and wear" />
          <Tab label="Home interiors" />
          <Tab label="Computer and tech" />
          <Tab label="Tools, equipments" />
          <Tab label="Sports and outdoor" />
          <Tab label="Animal and pets" />
          <Tab label="Machinery tools" />
        </TabsBox>
      </Box>
      {shopTabPanel(arr, value)}
    </Box>
  )
}

export const Offer = () => <p>Get US $10 off with a new supplier</p>
