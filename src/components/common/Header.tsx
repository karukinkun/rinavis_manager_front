import { Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import React, { FC, useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";

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

const Header: FC<HeaderProps> = ({ title }) => {
  const [userName, setUserName] = useState("");

  return (
    <AppBar position="absolute">
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
          {userName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
