import Box from '@mui/material/Box';
import { ReactNode, FC } from 'react';

import Header from './Header';
import SideMenu from './SideMenu';

type LayoutProps = {
  children?: ReactNode;
  title: string;
};

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <>
    <Box sx={{ display: 'flex' }}>
      <Header title={title} />
      <SideMenu />
      <Box
        component="main"
        pt="90px"
        pb="20px"
        width="100%"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[200],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Box px="24px">{children}</Box>
      </Box>
    </Box>
  </>
);

export default Layout;
