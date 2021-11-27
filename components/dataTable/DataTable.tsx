/* react component named dataTable */

import React from "react";
import { GridRowData, GridColumns, DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";

/* props includes rows and cols */
export const DataTable = ({
  rows,
  columns,
}: {
  rows: GridRowData[];
  columns: GridColumns;
}): JSX.Element => (
  <Box minHeight="100vh" width="100%">
    <DataGrid
      rows={rows.map((e, i) => ({
        ...e,
        id: i,
      }))}
      columns={columns}
    />
  </Box>
);
