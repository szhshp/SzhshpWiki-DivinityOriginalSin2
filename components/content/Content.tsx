import React, { ReactElement, useState } from "react";
import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { SLink } from "components/general/SLink";
import { ROUTES } from "config";
import { Menu as MenuIcon } from "@mui/icons-material";

const Topbar = (): ReactElement => {
  const [drawOpen, setDrawOpen] = useState(true);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer anchor="left" open={drawOpen} onClose={() => setDrawOpen(false)}>
        <List sx={{ width: "240px" }}>
          {ROUTES.map((item) => (
            <ListItem button key={item.href}>
              <ListItemButton role={undefined} dense>
                <SLink href={item.href}>
                  <Box px={2} py={1}>
                    {item.label}
                  </Box>
                </SLink>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

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
