import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import List, { ListProps } from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon, { ListItemIconProps } from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import router from "next/router";
import { FC, useCallback, useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";

const drawerWidth = 240;

const SideMenuList = styled(List)<ListProps>(({ theme }) => ({
  backgroundColor: theme.palette.baseSecondary.main,
  color: theme.palette.baseSecondary.contrastText,
}));

const SideMenuListItemIcon = styled(ListItemIcon)<ListItemIconProps>(
  ({ theme }) => ({
    color: theme.palette.baseSecondary.contrastText,
  })
);

const SideMenu: FC = () => {
  const logout = useCallback(async () => {
    void router.push("/login");
  }, []);

  return (
    <Box width={drawerWidth} bgcolor="baseSecondary.main">
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
          width: drawerWidth,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Box color="baseSecondary.contrastText" />
      </Toolbar>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        height="calc(100% - 64px)"
      >
        <Grid item xs="auto">
          <SideMenuList>
            <Box bgcolor="baseSecondary.main">
              <ListItem button onClick={() => router.push("/")}>
                <SideMenuListItemIcon>
                  <Box component="span" width="25px">
                    <HomeIcon />
                  </Box>
                </SideMenuListItemIcon>
                <ListItemText primary="メインメニュー" />
              </ListItem>
              <ListItem button onClick={() => router.push("/juchuu")}>
                <SideMenuListItemIcon>
                  <Box component="span" width="25px">
                    <HomeIcon />
                  </Box>
                </SideMenuListItemIcon>
                <ListItemText primary="受注処理" />
              </ListItem>
            </Box>
          </SideMenuList>
        </Grid>

        <Grid item xs="auto">
          <SideMenuList>
            <Box bgcolor="baseSecondary.main">
              <ListItem button onClick={logout}>
                <SideMenuListItemIcon>
                  <Box component="span" width="25px">
                    <MeetingRoomIcon />
                  </Box>
                </SideMenuListItemIcon>
                <ListItemText primary="ログアウト" />
              </ListItem>
            </Box>
          </SideMenuList>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SideMenu;
