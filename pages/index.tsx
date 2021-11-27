import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Grid } from "@mui/material";
import { Content } from "components/content";
import { SITE } from "config";

const Home: NextPage = ({  }) => (
  <Content>
    <Head>
      <title>{SITE.NAME}</title>
    </Head>
    <Grid container item xs={12}>
    </Grid>
  </Content>
);

export default Home;
