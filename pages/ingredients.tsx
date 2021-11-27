import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { Grid, Box } from "@mui/material";
import { Content } from "components/content";
import { SITE } from "config";
import { ingredients } from "data";

const CraftingRecipesTable = () => {
  const columns: GridColDef[] = [
    { field: "Ingredient", headerName: "名称", width: 250 },
    { field: "Base Value", headerName: "价值", width: 150 },
    { field: "Ing Cat", headerName: "类别", width: 250 },
    { field: "Notes", headerName: "描述", width: 250 },
  ];

  return (
    <Box minHeight="100vh" width="100%">
      <DataGrid
        rows={ingredients.map((e, i) => ({
          ...e,
          id: i,
        }))}
        columns={columns}
      />
    </Box>
  );
};

const Home: NextPage = () => (
  <Content>
    <Head>
      <title>{SITE.NAME}</title>
    </Head>
    <Grid container item xs={12}>
      <CraftingRecipesTable />
    </Grid>
  </Content>
);

export default Home;
