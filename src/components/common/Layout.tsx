import Box from "@mui/material/Box";
import { ReactNode, FC } from "react";

import Navigation from "./Navigation";
import { theme } from "./Theme";

type LayoutProps = {
  children?: ReactNode;
  title: string;
};

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <>
    <Box sx={{ display: "flex" }}>
      <Navigation title={title} />
      <Box
        component="main"
        pt="90px"
        pb="20px"
        width="100%"
        bgcolor={theme.palette.grey[300]}
        sx={{
          minHeight: "100vh",
        }}
      >
        <Box px="24px">{children}</Box>
      </Box>
    </Box>
  </>
);

export default Layout;
