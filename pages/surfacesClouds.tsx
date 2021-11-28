import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { GridColDef } from "@mui/x-data-grid";
import { DataTable } from "components/dataTable";

import { Grid } from "@mui/material";
import { Content } from "components/content";
import { SITE } from "config";
import { surfacesClouds } from "data";

const columns: GridColDef[] = [
  { field: "Name", headerName: "名称", width: 250 },
  { field: "S/C", headerName: "类别", width: 100 },
  { field: "Dur", headerName: "持续回合", width: 120 },
  { field: "Elemental Interactions", headerName: "元素交互", width: 400 },
  { field: "Description", headerName: "描述", width: 400 },
  { field: "Vaporize/Spike", headerName: "汽化反应", width: 400 },
];

const SurfacesClouds: NextPage = () => (
  <Content>
    <Head>
      <title>{SITE.NAME}</title>
    </Head>
    <Grid container item xs={12}>
      <DataTable
        columns={columns}
        rows={surfacesClouds.map((e, i) => ({
          ...e,
          id: i,
        }))}
        quickFilterField="S/C"
      />
    </Grid>
  </Content>
);

export default SurfacesClouds;
