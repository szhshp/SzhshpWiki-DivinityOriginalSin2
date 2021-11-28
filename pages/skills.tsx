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
  { field: "Skill", headerName: "技能", width: 250 },
  { field: "Ability 1", headerName: "类别 1", width: 150 },
  { field: "Ability 2", headerName: "类别 2", width: 150 },
  { field: "Lvl", headerName: "等级", width: 150 },
  { field: "AP", headerName: "消耗 AP", width: 150 },
  { field: "Source", headerName: "消耗源力", width: 150 },
  { field: "CD", headerName: "冷却时间", width: 150 },
  { field: "Rng", headerName: "距离", width: 150 },
  { field: "Rad", headerName: "范围", width: 150 },
  { field: "Description", headerName: "描述", width: 350 },
  /* 状态描述 */
];

const Home: NextPage = () => (
  <Content>
    <Head>
      <title>{SITE.NAME}</title>
    </Head>
    <Grid container item xs={12}>
      <DataTable
        columns={columns}
        rows={skills.map((e, i) => ({
          ...e,
          id: i,
        }))}
      />
    </Grid>
  </Content>
);

export default Home;
