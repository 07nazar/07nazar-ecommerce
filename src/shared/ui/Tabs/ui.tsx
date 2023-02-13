import { Box, Tabs } from "@mui/material";
import { FC, ReactNode, SyntheticEvent } from "react";

interface TabsProps {
  children?: ReactNode;
  value: number;
  onChange: (e: SyntheticEvent, val: number) => void;
  orientation?: "vertical" | "horizontal";
  color?: "blue" | "black";
  border?: boolean;
  underline?: boolean;
}

export const TabsComponent: FC<TabsProps> = ({
  children,
  onChange,
  value,
  orientation = "horizontal",
  color = "blue",
  border = false,
  underline = false,
}): JSX.Element => (
  <Box
    sx={{
      color: color === "blue" ? "gray.deep" : "gray.dark",
      borderBottom: border ? 1 : 0,
      borderColor: border ? "gray.medium" : "",
    }}
  >
    <Tabs
      sx={{
        "& button": {
          borderRadius: "6px",
          transition: "0.5s ease",
          textTransform: "none",
          minHeight: "40px",
          padding: "11px 10px 10px",
          alignItems: orientation === "vertical" ? "flex-start" : "center",
        },
        "& button:hover": { backgroundColor: "gray.pale" },
        "& button.Mui-selected": {
          backgroundColor: color === "black" ? "#E5F1FF" : "",
          color: color === "blue" ? "primary.main" : "app.black",
        },
      }}
      TabIndicatorProps={{
        hidden: !underline,
      }}
      textColor="inherit"
      orientation={orientation}
      value={value}
      onChange={onChange}
    >
      {children}
    </Tabs>
  </Box>
);
