import { Pagination } from "@mui/material";
import { ChangeEvent, FC } from "react";

type PaginationProps = {
  page: number;
  count: number;
  handleChange: (e: ChangeEvent<unknown>, page: number) => void;
};

export const PaginationComponent: FC<PaginationProps> = ({
  page,
  count,
  handleChange,
}) => (
  <Pagination
    count={count}
    page={page}
    onChange={handleChange}
    boundaryCount={0}
    siblingCount={1}
    size={"large"}
    sx={{
      "& li:first-child button": {
        borderTopLeftRadius: "6px",
        borderBottomLeftRadius: "6px",
        borderRight: "none",
      },
      "& li:last-child button": {
        borderTopRightRadius: "6px",
        borderBottomRightRadius: "6px",
        borderLeft: "none",
      },
      "& .MuiPaginationItem-ellipsis": { display: "none" },
      "& .MuiPaginationItem-text": {
        color: "primary.main",
        m: 0,
        border: "1px solid",
        borderCollapse: "collapse",
        borderColor: "gray.medium",
        borderRadius: 0,
      },
      "& .Mui-disabled": {
        color: "gray.hot",
      },
      "& .Mui-selected": {
        backgroundColor: "gray.medium",
      },
    }}
  />
);
