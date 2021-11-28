import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { GridColDef } from "@mui/x-data-grid";
import { DataTable } from "components/dataTable";

import { Grid } from "@mui/material";
import { Content } from "components/content";
import { SITE } from "config";
import { status } from "data";

const columns: GridColDef[] = [
  { field: "Status", headerName: "名称", width: 250 },
  {
    field: "Resist",
    headerName: "护甲",
    width: 200,
  },
  { field: "Effect", headerName: "效果", width: 500 },
];

const Status: NextPage = () => (
  <Content>
    <Head>
      <title>{SITE.NAME}</title>
    </Head>
    <Grid container item xs={12}>
      <DataTable
        columns={columns}
        rows={status.map((e, i) => {
          let resist = "";

          switch (e.Resist) {
            case "M":
              resist = "Magic Armor";
              break;
            case "P":
              resist = "Physical Armor";
              break;
            case "-":
              resist = "Not Resistible";
              break;
            default:
          }

          return {
            ...e,
            Resist: resist,
            id: i,
          };
        })}
        quickFilterField="Resist"
      />
    </Grid>
  </Content>
);

export default Status;
