import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { Grid, Box } from "@mui/material";
import { Content } from "components/content";
import { SITE } from "config";
import { crafting } from "data";

const columns: GridColDef[] = [
  { field: "Result 1", headerName: "名称", width: 250 },
  { field: "Category", headerName: "类别", width: 200 },
  { field: "Effect 1", headerName: "效果", width: 250 },
  ...Array(5)
    .fill(undefined)
    .map((e, i) => ({
      field: `Ingredient ${i + 1}`,
      headerName: `素材 ${i + 1}`,
      width: 250,
    })),
];

const Home: NextPage = () => (
  <Content>
    <Head>
      <title>{SITE.NAME}</title>
    </Head>
    <Grid container item xs={12}>
      <Box minHeight="100vh" width="100%">
        <DataGrid
          rows={crafting.map((e, i) => ({
            ...e,
            id: i,
          }))}
          columns={columns}
        />
      </Box>
    </Grid>
  </Content>
);

export default Home;
