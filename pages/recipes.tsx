import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { GridColDef } from "@mui/x-data-grid";

import { Grid } from "@mui/material";
import { Content } from "components/content";
import { DataTable } from "components/dataTable";
import { SITE } from "config";
import { recipes } from "data";

const columns: GridColDef[] = [
  { field: "Result 1", headerName: "名称", width: 250 },
  { field: "Category", headerName: "类别", width: 150 },
  { field: "Effect 1", headerName: "效果", width: 500 },
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
      <DataTable
        columns={columns}
        rows={recipes.map((e, i) => ({
          ...e,
          id: i,
        }))}
        quickFilterField="Category"
      />
    </Grid>
  </Content>
);

export default Home;
