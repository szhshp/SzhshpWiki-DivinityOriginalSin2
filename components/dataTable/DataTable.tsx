/* react component named dataTable */

import React from "react";
import { GridRowData, GridColumns, DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

/* props includes rows and cols */
export const DataTable = ({
  rows,
  columns,
}: {
  rows: GridRowData[];
  columns: GridColumns;
}): JSX.Element => {
  /* use state for search */
  const [search, setSearch] = React.useState("");
  return (
    <>
      <Box
        component="form"
        pt={2}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
      >
        <TextField
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      <Box minHeight="100vh" width="100%">
        <DataGrid
          rows={rows
            .map((e, i) => ({
              ...e,
              id: i,
            }))
            .filter((row) => {
              if (search.length === 0) return true;
              let found = false;
              columns.forEach(({ field }) => {
                if (
                  row[field]
                    .toString()
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                ) {
                  found = true;
                }
              });

              return found;
            })}
          columns={columns}
        />
      </Box>
    </>
  );
};
