import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { GridColDef } from "@mui/x-data-grid";
import { DataTable } from "components/dataTable";

import { Grid, Typography, Box } from "@mui/material";
import { Content } from "components/content";
import { SITE } from "config";
import {
  craftStationsAndChests,
  scrapMaterials,
  potionsAndFood,
  arrowAndGenerade,
  armorDyeing,
  armor,
  weapon,
  workbench,
  magical,
  enchantments,
  demonic,
  corpseHarvester,
  eventSpecialItems,
} from "data";

const columns: GridColDef[] = [
  { field: "RESULT", headerName: "产品", width: 200 },
  { field: "Category", headerName: "类别", width: 200 },
  { field: "Crafting Station", headerName: "合成台", width: 200 },
  ...Array(5)
    .fill(undefined)
    .map((e, i) => ({
      field: `Object ${i + 1}`,
      headerName: `素材 ${i + 1}`,
      width: 250,
    })),
  { field: "Comment", headerName: "注释", width: 200 },
];

const addCategory = (arr: any[], category: string) =>
  arr.map((e) => ({ ...e, Category: category }));

const Home: NextPage = () => (
  <Content>
    <Head>
      <title>{SITE.NAME}</title>
    </Head>
    <Grid container item xs={12}>
      <DataTable
        columns={columns}
        rows={[
          ...addCategory(craftStationsAndChests, "Craft Station & Chests"),
          ...addCategory(scrapMaterials, "Scrap Materials"),
          ...addCategory(potionsAndFood, "Potion & Food"),
          ...addCategory(arrowAndGenerade, "Arrow & Generade"),
          ...addCategory(armorDyeing, "Armor Dyeing"),
          ...addCategory(armor, "Armor"),
          ...addCategory(weapon, "Weapon"),
          ...addCategory(workbench, "Workbench"),
          ...addCategory(magical, "Magical"),
          ...addCategory(enchantments, "Enchantments"),
          ...addCategory(demonic, "Demonic"),
          ...addCategory(corpseHarvester, "Corpse Harvester"),
          ...addCategory(eventSpecialItems, "Event Special Items"),
        ]}
        quickFilterField="Category"
      />
    </Grid>
  </Content>
);

export default Home;
