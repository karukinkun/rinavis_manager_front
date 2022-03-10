import {
  Alert,
  Box,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC, useEffect, useMemo, useState } from "react";

import { PageResponse } from "api/page/page.dto";
import Layout from "components/common/Layout";

const Juchuusanshou: FC = () => {
  const [meisaiList, setMeisaiList] = useState<PageResponse<any>>({
    totalRowCount: 0,
    dataList: [],
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const baseProps = {
    width: 250,
    editable: true,
    hideSortIcons: true,
    sortable: false,
  };
  const meisaiListColumns: GridColDef[] = useMemo(
    () => [
      {
        ...baseProps,
        field: "edaban",
        headerName: "No",
        width: 60,
      },
      {
        field: "tagNo",
        headerName: "タグ番号",
      },
      {
        field: "status",
        headerName: "ステータス",
      },
      {
        field: "locationName",
        headerName: "ロケーション",
      },
      {
        field: "lotNo",
        headerName: "ロット番号",
      },
      {
        field: "meisaiType",
        headerName: "明細種別",
      },
      {
        field: "meisaiMemo",
        headerName: "明細メモ",
        flex: 1,
      },
    ],
    [baseProps]
  );

  useEffect(() => {
    void (() => {
      try {
        const rows = [
          {
            no: 1,
            tagNo: "0000001",
            status: "遅延",
            locationName: "0000001",
            lotNo: "0000001",
            meisaiTypeName: "こたつ布団掛_ｸﾞﾚｰ",
            meisaiMemo:
              "これはテストテキストです。これはテストテキストです。これはテストテキストです。 これはテストテキストです。 ",
          },
        ];
        setMeisaiList({
          totalRowCount: rows.length,
          dataList: rows,
        });
      } catch (e: unknown) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <Layout title="受注照会">
      <Grid container>
        <Grid item xs={12}>
          <Alert severity="warning">出荷済み</Alert>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Box p={3} pt={5}>
              <Grid container>
                <Grid item container>
                  <Grid
                    item
                    sx={{
                      width: "120px",
                    }}
                  >
                    <Typography variant="subtitle1" component="h3">
                      基本情報
                    </Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item container xs>
                    <Grid item xs={2}>
                      <TextField label="管理番号" />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField label="EC受注番号" />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        size="small"
                        fullWidth
                        autoComplete="off"
                        variant="outlined"
                        select
                        InputProps={{
                          startAdornment: <></>,
                        }}
                        SelectProps={{
                          native: true,
                        }}
                      >
                        <>
                          <option value=""> </option>
                          <option value="0">完了</option>
                          <option value="1">完了</option>
                        </>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="住所" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="電話番号" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="メールアドレス" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="顧客メモ" multiline rows={2} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper>
            <Box p={3}>
              <Grid container rowSpacing={7}>
                <Grid item container>
                  <Grid
                    item
                    sx={{
                      width: "120px",
                    }}
                  >
                    <Typography variant="subtitle1" component="h3">
                      注文者
                    </Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item container xs>
                    <Grid item xs={12}>
                      <TextField label="EC顧客番号" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="氏名" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="カナ" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="住所" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="電話番号" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="メールアドレス" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="顧客メモ" multiline rows={2} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid
                    item
                    sx={{
                      width: "120px",
                    }}
                  >
                    <Typography variant="subtitle1" component="h3">
                      お届け先
                    </Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item container xs>
                    <Grid item xs>
                      <TextField label="氏名" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="カナ" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="住所" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="電話番号" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="メールアドレス" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper>
            <Box p={3}>
              <Grid container rowSpacing={7}>
                <Grid item container>
                  <Grid
                    item
                    sx={{
                      width: "120px",
                    }}
                  >
                    <Typography variant="subtitle1" component="h3">
                      配送日
                    </Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item container xs>
                    <Grid item xs>
                      <TextField label="受注日" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="出荷予定日" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="お届け予定日" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="お届け時間帯" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="運送会社" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="伝票種別" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={2}>
                    <Typography variant="subtitle1" component="h3" />
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item container xs>
                    <Grid item xs>
                      <TextField label="EC顧客番号" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="氏名" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="カナ" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="住所" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="電話番号" />
                    </Grid>
                    <Grid item xs>
                      <TextField label="メールアドレス" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={7}>
        <Grid item xs={12}>
          <DataGrid
            getRowId={(row) => row.no as number}
            showCellRightBorder
            editMode="row"
            rows={meisaiList.dataList}
            columns={meisaiListColumns}
            rowsPerPageOptions={[4]}
            rowCount={4}
            pageSize={4}
            rowHeight={35}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Juchuusanshou;
