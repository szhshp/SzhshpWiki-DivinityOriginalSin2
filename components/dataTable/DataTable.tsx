/* react component named dataTable */

import React from "react";
import { GridRowData, GridColumns, DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";

/* props includes rows and cols */
export const DataTable = ({
  rows,
  columns,
  quickFilterField,
}: {
  rows: GridRowData[];
  columns: GridColumns;
  quickFilterField?: string;
}): JSX.Element => {
  /* use state for search */
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("");
  const categroies = Array.from(new Set(rows.map((e) => e[quickFilterField])));

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
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
        </Grid>
        {quickFilterField && (
          <Grid item xs={12}>
            <Box component="form" noValidate p={2}>
              <RadioGroup
                row
                aria-label="gender"
                value={category}
                onChange={(e) => {
                  setCategory((e.target as HTMLInputElement).value);
                }}
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  sx={{ paddingLeft: "0.5rem" }}
                  value=""
                  control={<Radio size="small" />}
                  label="All"
                />
                {categroies.map((value) => (
                  <FormControlLabel
                    sx={{ paddingLeft: "0.5rem" }}
                    key={value}
                    value={value}
                    control={<Radio size="small" />}
                    label={value}
                  />
                ))}
              </RadioGroup>
            </Box>
          </Grid>
        )}
      </Grid>
      <Box minHeight="100vh" width="100%">
        <DataGrid
          density="compact"
          disableColumnFilter
          disableColumnMenu
          rows={rows
            .map((e, i) => ({
              ...e,
              id: i,
            }))
            .filter((row) => {
              if (category && category.length > 0) {
                return row[quickFilterField] === category;
              }
              return true;
            })
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
