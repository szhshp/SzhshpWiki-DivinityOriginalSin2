import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import {
  Grid,
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  styled,
} from "@mui/material";
import { Content } from "components/content";
import { SITE, ROUTES } from "config";
import { SLink } from "components/general";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: theme.spacing(10),
  color: theme.palette.primary.main,
  fontSize: theme.typography.h5.fontSize,
}));

const About: NextPage = () => (
  <Content>
    <Head>
      <title>{SITE.NAME}</title>
    </Head>
    <Container maxWidth={false}>
      <Grid item xs={12}>
        <Box m={3}>
          <Typography variant="h6" gutterBottom>
            {SITE.NAME}
          </Typography>
          <Box marginTop="1rem">
            官方攻略加载太慢所以我自个儿写了个网站方便搜索
          </Box>
          <Box marginTop="1rem">
            适用于
            <b>神界: 原罪2 (Divinity: Original Sin 2) </b> 和
            <b>
              神界: 原罪2 决定版(Divinity: Original Sin 2 Definitive Edition)
            </b>
          </Box>
          <Box marginTop="1rem">
            数据基于官方, 翻译将会逐渐补充, 转码和翻译可能会导致部分数据不准确
            可以通过以下方式联系我修复
          </Box>
        </Box>
        <Box m={3}>
          <Typography variant="h6" gutterBottom>
            目录
          </Typography>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {ROUTES.map((item) => (
              <Grid item xs={12} lg={3} key={item.href}>
                <SLink key={item.href} href={item.href}>
                  <Item elevation={3}>
                    <Box px={2}>{item.label}</Box>
                  </Item>
                </SLink>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box m={3}>
          <Typography variant="h6" gutterBottom>
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
      </Grid>
    </Container>
  </Content>
);

export default About;
