import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { GridColDef } from "@mui/x-data-grid";
import { DataTable } from "components/dataTable";

import { Grid } from "@mui/material";
import { Content } from "components/content";
import { SITE } from "config";
import { skills } from "data";

const columns: GridColDef[] = [
  { field: "Skill", headerName: "技能", width: 200 },
  { field: "Ability 1", headerName: "类别 1", width: 150 },
  { field: "Ability 2", headerName: "类别 2", width: 150 },
  { field: "Lvl", headerName: "等级", width: 100 },
  { field: "AP", headerName: "AP", width: 100 },
  { field: "Source", headerName: "源力", width: 100 },
  { field: "CD", headerName: "CD", width: 100 },
  { field: "Rng", headerName: "距离", width: 100 },
  { field: "Rad", headerName: "范围", width: 100 },
  { field: "Description", headerName: "描述", width: 350 },
  /* 状态描述 */
];

const Home: NextPage = () => (
  <Content>
    <Head>
      <title>{SITE.NAME}</title>
    </Head>
    <Grid container item xs={12}>
      <DataTable columns={columns} rows={skills} quickFilterField="Ability 1" />
    </Grid>
  </Content>
);

export default Home;
