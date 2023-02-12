import { Box, Tab } from "@mui/material";
import { ReactNode } from "react";

import { TabsBox } from "shared/ui/TabsBox";

interface TabsProps {
  children: ReactNode;
  handleChange: (e: React.SyntheticEvent, val: number) => void;
  value: number;
}

export const Tabs = ({ children, value, handleChange }: TabsProps) => (
  <Box sx={{ width: "100%", display: "flex" }}>
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
    {children}
  </Box>
);

export const Offer = () => <p>Get US $10 off with a new supplier</p>;
