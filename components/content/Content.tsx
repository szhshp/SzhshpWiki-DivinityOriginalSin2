import React, { ReactElement } from "react";
import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { SITE } from "config";
import HomeIcon from "@mui/icons-material/Home";
import { SLink } from "components/general/SLink";

const Topbar = (): ReactElement => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <SLink href="/" sx={{ color: "white" }}>
            <HomeIcon />
          </SLink>
        </IconButton>

        {[
          { href: "/crafting", label: "Crafting" },
          {
            href: "/ingredient",
            label: "Ingredients",
          },
        ].map((item) => (
          <Typography key={item.href} variant="h6" noWrap component="div">
            <SLink href={item.href} sx={{ color: "white" }}>
              <Box px={2}>{item.label}</Box>
            </SLink>
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  </Box>
);

export const Content = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => (
  <Grid container>
    <Topbar />
    <Grid item xs={12}>
      {children}
    </Grid>
  </Grid>
);
