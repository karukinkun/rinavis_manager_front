import {
  Alert,
  Box,
  Button,
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

  const meisaiListColumns: GridColDef[] = useMemo(
    () => [
      {
        field: "no",
        headerName: "No",
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
    []
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
            meisaiType: "こたつ布団掛_ｸﾞﾚｰ",
            meisaiMemo:
              "これはテストテキストです。これはテストテキストです。これはテストテキストです。 これはテストテキストです。 ",
          },
          {
            no: 2,
            tagNo: "0000002",
            status: "遅延",
            locationName: "0000001",
            lotNo: "0000001",
            meisaiType: "こたつ布団掛_ｸﾞﾚｰ",
            meisaiMemo:
              "これはテストテキストです。これはテストテキストです。これはテストテキストです。 これはテストテキストです。 ",
          },
          {
            no: 3,
            tagNo: "0000003",
            status: "遅延",
            locationName: "0000001",
            lotNo: "0000001",
            meisaiType: "こたつ布団掛_ｸﾞﾚｰ",
            meisaiMemo:
              "これはテストテキストです。これはテストテキストです。これはテストテキストです。 これはテストテキストです。 ",
          },
          {
            no: 4,
            tagNo: "0000004",
            status: "遅延",
            locationName: "0000001",
            lotNo: "0000001",
            meisaiType: "こたつ布団掛_ｸﾞﾚｰ",
            meisaiMemo:
              "これはテストテキストです。これはテストテキストです。これはテストテキストです。 これはテストテキストです。 ",
          },
          {
            no: 5,
            tagNo: "0000005",
            status: "遅延",
            locationName: "0000001",
            lotNo: "0000001",
            meisaiType: "こたつ布団掛_ｸﾞﾚｰ",
            meisaiMemo:
              "これはテストテキストです。これはテストテキストです。これはテストテキストです。 これはテストテキストです。 ",
          },
          {
            no: 6,
            tagNo: "0000006",
            status: "遅延",
            locationName: "0000001",
            lotNo: "0000001",
            meisaiType: "こたつ布団掛_ｸﾞﾚｰ",
            meisaiMemo:
              "これはテストテキストです。これはテストテキストです。これはテストテキストです。 これはテストテキストです。 ",
          },
          {
            no: 7,
            tagNo: "0000007",
            status: "遅延",
            locationName: "0000001",
            lotNo: "0000001",
            meisaiType: "こたつ布団掛_ｸﾞﾚｰ",
            meisaiMemo:
              "これはテストテキストです。これはテストテキストです。これはテストテキストです。 これはテストテキストです。 ",
          },
          {
            no: 8,
            tagNo: "0000008",
            status: "遅延",
            locationName: "0000001",
            lotNo: "0000001",
            meisaiType: "こたつ布団掛_ｸﾞﾚｰ",
            meisaiMemo:
              "これはテストテキストです。これはテストテキストです。これはテストテキストです。 これはテストテキストです。 ",
          },
          {
            no: 9,
            tagNo: "0000009",
            status: "遅延",
            locationName: "0000001",
            lotNo: "0000001",
            meisaiType: "こたつ布団掛_ｸﾞﾚｰ",
            meisaiMemo:
              "これはテストテキストです。これはテストテキストです。これはテストテキストです。 これはテストテキストです。 ",
          },
          {
            no: 10,
            tagNo: "0000010",
            status: "遅延",
            locationName: "0000001",
            lotNo: "0000001",
            meisaiType: "こたつ布団掛_ｸﾞﾚｰ",
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
          <Box mb={2}>
            <Typography component="h3">
              検索項目
            </Typography>
          </Box>
          <Paper>
            <Box p={3}>
              <Grid container>
                <Grid item container xs>
                  <Grid item container>
                    <Grid item xs={3}>
                      <TextField label="管理番号" />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField label="EC受注番号" />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField label="EC顧客番号" />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField label="氏名" />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField label="電話番号" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Box mb={2}>
            <Typography component="h3">基本情報</Typography>
          </Box>
          <Paper>
            <Box p={3}>
              <Grid container>
                <Grid item container xs={12}>
                  <Grid item xs={12}>
                    <Alert severity="warning">受注アラート</Alert>
                  </Grid>
                </Grid>

                <Grid item container xs>
                  <Grid item container>
                    <Grid item xs={3}>
                      <TextField
                        label="ステータス"
                        select
                        SelectProps={{
                          native: true,
                        }}
                      >
                        <>
                          <option value=""> </option>
                          <option value="0">受注</option>
                          <option value="1">キャンセル済み</option>
                          <option value="1">削除済み</option>
                          <option value="1">集荷キット発送済み</option>
                          <option value="1">着荷済み</option>
                          <option value="1">CL完了</option>
                          <option value="1">出荷検品済み</option>
                          <option value="1">出荷完了</option>
                        </>
                      </TextField>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        label="受注分類"
                        select
                        SelectProps={{
                          native: true,
                        }}
                      >
                        <>
                          <option value=""> </option>
                          <option value="0">衣類</option>
                          <option value="1">布団</option>
                        </>
                      </TextField>
                    </Grid>
                  </Grid>
                  <Grid item container>
                    <Grid item xs={3}>
                      <TextField label="受注日時" />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField label="ロケーション" />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField label="作業会社名" />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        label="依頼工程
                      "
                        select
                        SelectProps={{
                          native: true,
                        }}
                      >
                        <>
                          <option value=""> </option>
                          <option value="0">衣類</option>
                          <option value="1">布団</option>
                        </>
                      </TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="受注メモ①" multiline minRows={2} />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="受注メモ②" multiline minRows={2} />
                    </Grid>

                    <Grid item xs="auto">
                      <Button>受注アラート設定</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Box mb={2}>
            <Typography component="h3">注文者情報</Typography>
          </Box>
          <Paper>
            <Box p={3}>
              <Grid container>
                <Grid item xs={12}>
                  <Alert severity="warning">顧客アラート</Alert>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <TextField label="EC顧客番号" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField label="氏名" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField label="氏名カナ" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField label="郵便番号" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField label="住所（都道府県）" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField label="住所（市区町村）" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="住所（番地/建物）" />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField label="電話番号" />
                  </Grid>
                  <Grid item xs={7}>
                    <TextField label="メールアドレス" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="顧客メモ" multiline minRows={2} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs="auto">
                    <Button>顧客アラート設定</Button>
                  </Grid>
                  <Grid item xs="auto">
                    <Button>受注履歴</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Box mb={2}>
            <Typography component="h3">お届け先情報</Typography>
          </Box>
          <Paper>
            <Box p={3}>
              <Grid container>
                <Grid item container>
                  <Grid item xs={4}>
                    <TextField label="EC顧客番号" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField label="氏名" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField label="氏名カナ" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField label="郵便番号" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField label="住所（都道府県）" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField label="住所（市区町村）" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="住所（番地/建物）" />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField label="電話番号" />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={8}>
          <Box mb={2}>
            <Typography component="h3">注文内容</Typography>
          </Box>
          <Paper>
            <Box p={3}>
              <Grid container>
                <Grid item container>
                  <Grid item xs={3}>
                    <TextField label="商品コード" />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField label="商品名称" />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField label="受注点数" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField label="受注メモ①" multiline minRows={2} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField label="受注メモ②" multiline minRows={2} />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Box mb={2}>
            <Typography component="h3">オプション内容</Typography>
          </Box>
          <Paper>
            <Box p={3}>
              <Grid container>
                <Grid item container xs={12}>
                  <Grid item xs={6}>
                    <Typography component="p">はっ水加工</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField />
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={6}>
                    <Typography component="p">汗抜き加工</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField />
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={6}>
                    <Typography component="p">カビ抜き加工</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField />
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={6}>
                    <Typography component="p">ハンガー回収袋</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      select
                      SelectProps={{
                        native: true,
                      }}
                    >
                      <>
                        <option value="0">無し</option>
                        <option value="1">有り</option>
                      </>
                    </TextField>
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={6}>
                    <Typography component="p">衣類カバー</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      select
                      SelectProps={{
                        native: true,
                      }}
                    >
                      <>
                        <option value="0">無し</option>
                        <option value="1">有り</option>
                      </>
                    </TextField>
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={6}>
                    <Typography component="p">抗ウイルス加工</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      select
                      SelectProps={{
                        native: true,
                      }}
                    >
                      <>
                        <option value="0">無し</option>
                        <option value="1">有り</option>
                      </>
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={8}>
          <Box mb={2}>
            <Typography component="h3">明細内容</Typography>
          </Box>
          <Paper>
            <Box p={3}>
              <Grid container>
                <Grid item container justifyContent="flex-end">
                  <Grid item xs="auto">
                    <Button>明細編集開始</Button>
                  </Grid>
                  <Grid item xs="auto">
                    <Button>明細編集完了</Button>
                  </Grid>
                  <Grid item xs="auto">
                    <Button>明細追加</Button>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <DataGrid
                    getRowId={(row) => row.no as number}
                    showCellRightBorder
                    editMode="row"
                    rows={meisaiList.dataList}
                    columns={meisaiListColumns}
                    rowsPerPageOptions={[20]}
                    rowCount={10}
                    pageSize={10}
                    rowHeight={30}
                    hideFooter
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Box mb={2}>
            <Typography component="h3">料金内容</Typography>
          </Box>
          <Paper>
            <Box p={3}>
              <Grid container>
                <Grid item container xs={12}>
                  <Grid item xs={5}>
                    <Typography component="p">支払方法</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography component="p">請求合計金額</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField />
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={4}>
                    <Typography component="p">商品合計金額</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField />
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={4}>
                    <Typography component="p">消費税合計</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField />
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={4}>
                    <Typography component="p">その他手数料</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField />
                  </Grid>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={4}>
                    <Typography component="p">ポイント利用額</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid item container justifyContent="flex-end">
          <Grid item xs="auto">
            <Button>クリア</Button>
          </Grid>
          <Grid item xs="auto">
            <Button>削除</Button>
          </Grid>
          <Grid item xs="auto">
            <Button>登録</Button>
          </Grid>
          <Grid item xs="auto">
            <Button>再洗登録</Button>
          </Grid>
          <Grid item xs="auto">
            <Button>受注票印刷</Button>
          </Grid>
          <Grid item xs="auto">
            <Button>メール送信へ</Button>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Juchuusanshou;
