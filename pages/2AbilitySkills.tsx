import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { GridColDef } from "@mui/x-data-grid";
import { DataTable } from "components/dataTable";

import { Grid, Typography, Box } from "@mui/material";
import { Content } from "components/content";
import { SITE } from "config";
import { nonSourceAbilities, sourceAbilities } from "data";

const columns: GridColDef[] = [
  { field: "Source", headerName: "技能", width: 200 },
  { field: "Aerotheurge", headerName: "Aerotheurge", width: 200 },
  { field: "Geomancer", headerName: "Geomancer", width: 200 },
  { field: "Hydrosophist", headerName: "Hydrosophist", width: 200 },
  { field: "Pyrokinetic", headerName: "Pyrokinetic", width: 200 },
];

const Home: NextPage = () => (
  <Content>
    <Head>
      <title>{SITE.NAME}</title>
    </Head>
    <Grid container item xs={12}>
      <Box p={2}>
        <Typography variant="h5" color="initial">
          普通技能
        </Typography>
      </Box>
      <DataTable
        minHeight="50vh"
        columns={columns}
        rows={sourceAbilities.map((e, i) => ({
          ...e,
          id: i,
        }))}
      />
    </Grid>
    <Grid container item xs={12}>
      <Box p={2}>
        <Typography variant="h5" color="initial">
          源力技能
        </Typography>
      </Box>
      <DataTable
        minHeight="50vh"
        columns={columns}
        rows={sourceAbilities.map((e, i) => ({
          ...e,
          id: i,
        }))}
      />
    </Grid>
  </Content>
);

export default Home;
