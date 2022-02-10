import PersonIcon from '@mui/icons-material/Person';
import { Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { Auth } from 'aws-amplify';
import router from 'next/router';
import React, { FC, useEffect, useState } from 'react';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

type HeaderProps = {
  title: string;
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
}));

const Header: FC<HeaderProps> = ({ title }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    void (async () => {
      try {
        // AWSの認証状態をチェック
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const user = await Auth.currentAuthenticatedUser();
        if (user) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          setUserName(user.attributes.name);
        } else {
          // 認証失敗の場合
          await Auth.signOut(); // AWSサインアウト
          localStorage.clear(); // ローカルストレージ全削除
          void router.push('/'); // ログイン画面へ遷移
        }
      } catch (e) {
        console.log(e);
        // 認証失敗の場合
        await Auth.signOut(); // AWSサインアウト
        localStorage.clear(); // ローカルストレージ全削除
        void router.push('/'); // ログイン画面へ遷移
      }
    })();
  }, []);

  return (
    <AppBar position="absolute">
      <Toolbar
        sx={{
          pr: '24px',
        }}
      >
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
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
