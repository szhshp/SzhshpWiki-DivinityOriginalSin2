import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { GridColDef } from "@mui/x-data-grid";
import { DataTable } from "components/dataTable";

import { Grid } from "@mui/material";
import { Content } from "components/content";
import { SITE } from "config";
import { craftablesByIngredients } from "data";

const columns: GridColDef[] = [
  { field: "Ingredient", headerName: "名称", width: 250 },
  {
    field: "__00",
    headerName: "产品1",
    width: 400,
  },
  ...Array(27)
    .fill(undefined)
    .map((e, i) => ({
      field: `__${i}`,
      headerName: `产品${i + 2}`,
      width: 400,
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
        rows={craftablesByIngredients.map((e, i) => ({
          ...e,
          id: i,
        }))}
      />
    </Grid>
  </Content>
);

export default Home;
