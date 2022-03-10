import PersonIcon from "@mui/icons-material/Person";
import { Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import React, { FC } from "react";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

type HeaderProps = {
  title: string;
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
}));

const Header: FC<HeaderProps> = ({ title }) => (
  <AppBar
    position="absolute"
    sx={{
      height: "65px",
    }}
  >
    <Toolbar
      sx={{
        pr: "24px",
      }}
    >
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        {title}
      </Typography>
      <PersonIcon sx={{ mr: 2 }} />
      <Typography variant="h6" color="inherit" noWrap>
        振蔵 太郎
      </Typography>
    </Toolbar>
  </AppBar>
);
export default Header;
