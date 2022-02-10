import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import List, { ListProps } from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { Auth } from 'aws-amplify';
import router from 'next/router';
import { FC, useCallback, useEffect, useState } from 'react';

import { WorkKbn } from 'common/enumtype/WorkKbn';
import { getLoginUserWorkKbn } from 'utils/awsUtils';

import { pageList } from '../../common/PageList';

const drawerWidth = 240;

const SideMenuList = styled(List)<ListProps>(({ theme }) => ({
  backgroundColor: theme.palette.baseSecondary.main,
  color: theme.palette.baseSecondary.contrastText,
}));

const SideMenuListItemIcon = styled(ListItemIcon)<ListItemIconProps>(({ theme }) => ({
  color: theme.palette.baseSecondary.contrastText,
}));

const SideMenu: FC = () => {
  const [loginUserWorkKbn, setLoginUserWorkKbn] = useState<WorkKbn>();

  useEffect(() => {
    void (async () => {
      setLoginUserWorkKbn(await getLoginUserWorkKbn());
    })();
  }, []);

  const nextPage = useCallback((path: string) => {
    void router.push(path);
  }, []);

  const logout = useCallback(async () => {
    await Auth.signOut(); // AWSサインアウト
    localStorage.clear(); // ローカルストレージ全削除
    void router.push('/'); // ログイン画面へ遷移
  }, []);

  return (
    <Box width={drawerWidth} bgcolor="baseSecondary.main">
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
          width: drawerWidth,
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Box color="baseSecondary.contrastText" />
      </Toolbar>
      <Grid container direction="column" justifyContent="space-between" height="calc(100% - 64px)">
        <Grid item xs="auto">
          <SideMenuList>
            {loginUserWorkKbn && (
              <Box bgcolor="baseSecondary.main">
                <ListItem button onClick={() => nextPage('/main')}>
                  <SideMenuListItemIcon>
                    <Box component="span" width="25px">
                      <img src="/images/home.png" alt="メインメニュー" style={{ display: 'block', maxWidth: '100%' }} />
                    </Box>
                  </SideMenuListItemIcon>
                  <ListItemText primary="メインメニュー" />
                </ListItem>
                {pageList.basic.availableWorkKbnList.indexOf(loginUserWorkKbn) >= 0 && (
                  <ListItem button onClick={() => nextPage(pageList.basic.path)}>
                    <SideMenuListItemIcon>
                      <Box component="span" width="25px">
                        <img
                          src={`/images/${pageList.basic.icon}`}
                          alt={pageList.basic.name}
                          style={{ display: 'block', maxWidth: '100%' }}
                        />
                      </Box>
                    </SideMenuListItemIcon>
                    <ListItemText primary={pageList.basic.name} />
                  </ListItem>
                )}
                {pageList.master.availableWorkKbnList.indexOf(loginUserWorkKbn) >= 0 && (
                  <ListItem button onClick={() => nextPage(pageList.master.path)}>
                    <SideMenuListItemIcon>
                      <Box component="span" width="25px">
                        <img
                          src={`/images/${pageList.master.icon}`}
                          alt={pageList.master.name}
                          style={{ display: 'block', maxWidth: '100%' }}
                        />
                      </Box>
                    </SideMenuListItemIcon>
                    <ListItemText primary={pageList.master.name} />
                  </ListItem>
                )}
                {pageList.juchuudenpyou.availableWorkKbnList.indexOf(loginUserWorkKbn) >= 0 && (
                  <ListItem button onClick={() => nextPage(pageList.juchuudenpyou.path)}>
                    <SideMenuListItemIcon>
                      <Box component="span" width="25px">
                        <img
                          src={`/images/${pageList.juchuudenpyou.icon}`}
                          alt={pageList.juchuudenpyou.name}
                          style={{ display: 'block', maxWidth: '100%' }}
                        />
                      </Box>
                    </SideMenuListItemIcon>
                    <ListItemText primary={pageList.juchuudenpyou.name} />
                  </ListItem>
                )}
                {pageList.shiiredenpyou.availableWorkKbnList.indexOf(loginUserWorkKbn) >= 0 && (
                  <ListItem button onClick={() => nextPage(pageList.shiiredenpyou.path)}>
                    <SideMenuListItemIcon>
                      <Box component="span" width="25px">
                        <img
                          src={`/images/${pageList.shiiredenpyou.icon}`}
                          alt={pageList.shiiredenpyou.name}
                          style={{ display: 'block', maxWidth: '100%' }}
                        />
                      </Box>
                    </SideMenuListItemIcon>
                    <ListItemText primary={pageList.shiiredenpyou.name} />
                  </ListItem>
                )}
                {pageList.nyuukin.availableWorkKbnList.indexOf(loginUserWorkKbn) >= 0 && (
                  <ListItem button onClick={() => nextPage(pageList.nyuukin.path)}>
                    <SideMenuListItemIcon>
                      <Box component="span" width="25px">
                        <img
                          src={`/images/${pageList.nyuukin.icon}`}
                          alt={pageList.nyuukin.name}
                          style={{ display: 'block', maxWidth: '100%' }}
                        />
                      </Box>
                    </SideMenuListItemIcon>
                    <ListItemText primary={pageList.nyuukin.name} />
                  </ListItem>
                )}
                {pageList.daily.availableWorkKbnList.indexOf(loginUserWorkKbn) >= 0 && (
                  <ListItem button onClick={() => nextPage(pageList.daily.path)}>
                    <SideMenuListItemIcon>
                      <Box component="span" width="25px">
                        <img
                          src={`/images/${pageList.daily.icon}`}
                          alt={pageList.daily.name}
                          style={{ display: 'block', maxWidth: '100%' }}
                        />
                      </Box>
                    </SideMenuListItemIcon>
                    <ListItemText primary={pageList.daily.name} />
                  </ListItem>
                )}
                {pageList.monthly.availableWorkKbnList.indexOf(loginUserWorkKbn) >= 0 && (
                  <ListItem button onClick={() => nextPage(pageList.monthly.path)}>
                    <SideMenuListItemIcon>
                      <Box component="span" width="25px">
                        <img
                          src={`/images/${pageList.monthly.icon}`}
                          alt={pageList.monthly.name}
                          style={{ display: 'block', maxWidth: '100%' }}
                        />
                      </Box>
                    </SideMenuListItemIcon>
                    <ListItemText primary={pageList.monthly.name} />
                  </ListItem>
                )}
                {pageList.seikyuu.availableWorkKbnList.indexOf(loginUserWorkKbn) >= 0 && (
                  <ListItem button onClick={() => nextPage(pageList.seikyuu.path)}>
                    <SideMenuListItemIcon>
                      <Box component="span" width="25px">
                        <img
                          src={`/images/${pageList.seikyuu.icon}`}
                          alt={pageList.seikyuu.name}
                          style={{ display: 'block', maxWidth: '100%' }}
                        />
                      </Box>
                    </SideMenuListItemIcon>
                    <ListItemText primary={pageList.seikyuu.name} />
                  </ListItem>
                )}
                {pageList.kessan.availableWorkKbnList.indexOf(loginUserWorkKbn) >= 0 && (
                  <ListItem button onClick={() => nextPage(pageList.kessan.path)}>
                    <SideMenuListItemIcon>
                      <Box component="span" width="25px">
                        <img
                          src={`/images/${pageList.kessan.icon}`}
                          alt={pageList.kessan.name}
                          style={{ display: 'block', maxWidth: '100%' }}
                        />
                      </Box>
                    </SideMenuListItemIcon>
                    <ListItemText primary={pageList.kessan.name} />
                  </ListItem>
                )}
                {pageList.management.availableWorkKbnList.indexOf(loginUserWorkKbn) >= 0 && (
                  <ListItem button onClick={() => nextPage(pageList.management.path)}>
                    <SideMenuListItemIcon>
                      <Box component="span" width="25px">
                        <img
                          src={`/images/${pageList.management.icon}`}
                          alt={pageList.management.name}
                          style={{ display: 'block', maxWidth: '100%' }}
                        />
                      </Box>
                    </SideMenuListItemIcon>
                    <ListItemText primary={pageList.management.name} />
                  </ListItem>
                )}
              </Box>
            )}
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
