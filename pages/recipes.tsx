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
  {
    field: "Result 1",
    headerName: "产品 1",
    flex: 250,
    renderCell: ({ value }) => <b>{value}</b>,
  },
  { field: "Profit 1", headerName: "利益值", flex: 150 },
  { field: "Result 2", headerName: "产品 2", flex: 250 },
  { field: "Category", headerName: "类别", flex: 150 },
  { field: "Crafting Station", headerName: "合成台", flex: 150 },
  { field: "Effect 1", headerName: "描述", flex: 500 },
  ...Array(5)
    .fill(undefined)
    .map((e, i) => ({
      field: `Ingredient ${i + 1}`,
      headerName: `素材 ${i + 1}`,
      flex:200
    })),
];

const parseValue = (value: string | number): string => {
  if (value === "V") return "?";
  const num = Number(value);
  return Number.isNaN(num) ? "" : num.toString();
};
const Home: NextPage = () => (
  <Content>
    <Head>
      <title>{SITE.NAME}</title>
    </Head>
    <Grid container item xs={12}>
      <DataTable
        columns={columns}
        rows={recipes.map((e, i) => {
          const amt1 = e["Amt 1"] || 1;
          const amt2 = e["Amt 2"] || 1;

          return {
            ...e,
            "Result 1": `${e["Result 1"]}(${amt1})`,
            "Result 2": e["Result 2"] ? `${e["Result 2"]}(${amt2})` : "",
            "Value 1": parseValue(e["Value 1"]),
            "Profit 1": parseValue(e["Profit 1"]),
          };
        })}
        quickFilterField="Category"
      />
    </Grid>
  </Content>
);

export default Home;
