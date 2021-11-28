import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { GridColDef } from "@mui/x-data-grid";
import { DataTable } from "components/dataTable";

import { Grid } from "@mui/material";
import { Content } from "components/content";
import { SITE } from "config";
import { ingredients } from "data";

const columns: GridColDef[] = [
  { field: "Ingredient", headerName: "名称", width: 250 },
  { field: "Ing Cat", headerName: "类别", width: 250 },
  { field: "Base Value", headerName: "价值", width: 150 },
  { field: "Notes", headerName: "描述", width: 250 },
];

const Home: NextPage = () => (
  <Content>
    <Head>
      <title>{SITE.NAME}</title>
    </Head>
    <Grid container item xs={12}>
      <DataTable
        columns={columns}
        rows={ingredients}
        quickFilterField="Ing Cat"
      />
    </Grid>
  </Content>
);

export default Home;
