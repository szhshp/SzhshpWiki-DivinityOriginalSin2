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

        <Typography variant="h6" noWrap component="div">
          <SLink href="/" sx={{ color: "white" }}>
            {SITE.NAME}
          </SLink>
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <SLink href="/about" sx={{ color: "white" }}>
            About
          </SLink>
        </Typography>
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
