import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import {
  Grid,
  Container,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Content } from "components/content";
import { SITE } from "config";
import { SLink } from "components/general";
import { Chip } from "@material-ui/core";

const About: NextPage = () => (
  <Content>
    <Head>
      <title>{SITE.NAME}</title>
    </Head>
    <Container maxWidth="xl">
      <Grid item xs={12}>
        <Box m={3}>
          <Typography variant="h4" gutterBottom>
            About
          </Typography>
          <Box marginTop="1rem">官方攻略加载太慢所以我自个儿写了个方便搜索</Box>
          <Box marginTop="1rem">数据基于官方, 翻译将会逐渐手动补充</Box>
        </Box>
        <Box m={3}>
          <Typography variant="h4" gutterBottom>
            Contacts
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {[
              {
                media: "Github",
                link: "https://github.com/szhshp",
                title: "@szhshp",
              },
              {
                media: "Blog",
                link: "https://szhshp.org",
                title: "https://szhshp.org",
              },
            ].map(({ media, link, title }) => (
              <ListItem
                key={title}
                disableGutters
                secondaryAction={<SLink href={link}>{title}</SLink>}
              >
                <ListItemText primary={media} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box m={3}>
          <Typography variant="h4" gutterBottom>
            Powered By
          </Typography>
          <Box marginTop="1rem">
            {["react", "typescript", "@mui", "@next", "@emotion"].map(
              (name) => (
                <Chip key={name} label={name} />
              )
            )}
          </Box>
        </Box>
      </Grid>
    </Container>
  </Content>
);

export default About;
