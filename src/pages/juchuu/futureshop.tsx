import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridValueFormatterParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import moment from "moment";
import { FC, useEffect, useMemo, useState } from "react";

import { PageResponse } from "api/page/page.dto";
import ConfirmDialog from "components/common/ConfirmDialog";
import Layout from "components/common/Layout";
import { theme } from "components/common/Theme";

const Futureshop: FC = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [createdHistory, setCreatedHistoryList] = useState<PageResponse<any>>({
    totalRowCount: 0,
    dataList: [],
  });
  const [juchuuList, setJuchuuList] = useState<PageResponse<any>>({
    totalRowCount: 0,
    dataList: [],
  });

  // const columns: GridColDef[] = ;

  const createdHistoryColumns: GridColDef[] = [
    {
      field: "id",
      headerName: "id",
      flex: 1,
      hide: true,
    },
    {
      field: "createdHistoryAtLast",
      headerName: "最終取込日時",
      width: 180,
      valueGetter: ({ value }: GridValueGetterParams<Date>) =>
        moment(value).format("YYYY/MM/DD/ HH:mm"),
    },
    {
      field: "operator",
      headerName: "担当者",
      width: 200,
    },
    {
      field: "uploadCount",
      headerName: "取込件数",
      width: 90,
      align: "right",
    },
    {
      field: "excludeCount",
      headerName: "除外件数",
      width: 90,
      align: "right",
    },
    {
      field: "targetPeriod",
      headerName: "取込対象期間",
      flex: 1,
      valueGetter: ({ value }: GridValueGetterParams<Date>) =>
        moment(value).format("YYYY/MM/DD/ HH:mm"),
    },
  ];

  // const baseProps = {
  //   width: 80,
  //   editable: true,
  //   hideSortIcons: true,
  //   sortable: false,
  // };

  const baseProps = {
    width: 150,
    editable: true,
    hideSortIcons: true,
    sortable: false,
  };

  const juchuuListColumns: GridColDef[] = useMemo(
    () => [
      {
        ...baseProps,
        field: "status",
        headerName: "除外",
        type: "boolean",
        width: 60,
        valueFormatter: (data: GridValueFormatterParams) =>
          data.value ? "する" : "しない",
      },
      {
        ...baseProps,
        field: "errorMsg",
        headerName: "エラー内容",
        width: 250,
      },
      {
        ...baseProps,
        field: "ecOrderNo",
        headerName: "EC受注番号",
      },
      {
        ...baseProps,
        field: "ecCustomerNo",
        headerName: "EC顧客番号",
      },
      {
        ...baseProps,
        field: "customerName",
        headerName: "注文者氏名",
      },
      {
        ...baseProps,
        field: "quantity",
        headerName: "購入数量",
        width: 100,
        align: "right",
      },
      {
        ...baseProps,
        field: "options",
        headerName: "オプション内容",
        width: 250,
      },
      {
        ...baseProps,
        field: "paymentType",
        headerName: "支払方法種別",
      },
      {
        ...baseProps,
        field: "total",
        headerName: "料金総額（税込）",
        valueFormatter: (data: GridValueFormatterParams) =>
          data.value ? `${data.value.toLocaleString()}円` : undefined,
        align: "right",
      },
      {
        ...baseProps,
        field: "tax",
        headerName: "消費税額",
        valueFormatter: (data: GridValueFormatterParams) =>
          data.value ? `${data.value.toLocaleString()}円` : undefined,
        align: "right",
      },
      {
        ...baseProps,
        field: "deliveryName",
        headerName: "お届け先氏名",
      },
      {
        ...baseProps,
        field: "ShipPrefecture",
        headerName: "お届け先（都道府県）",
      },
      {
        ...baseProps,
        field: "ShipCity",
        headerName: "お届け先（市区町村）",
      },
      {
        ...baseProps,
        field: "ShipAddress",
        headerName: "お届け先（番地/建物）",
      },
    ],
    [baseProps]
  );

  const rows = useMemo(
    () => [
      {
        id: 1,
        isPaid: false,
        errorMsg: "EC番号重複",
        ecOrderNo: "000000000001",
        ecCustomerNo: "000000000001",
        customerName: "テスト太郎",
        deliveryName: "テスト次郎",
        quantity: 1,
        options: "商品点数追加：0点(0)/集荷キット：集荷キット不要(0)",
        paymentType: "クレジットカード",
        total: 9999999,
        tax: 999999,
        ShipPrefecture: "大阪府",
        ShipCity: "大阪市北区",
        ShipAddress: "堂島２丁目３−５ 大阪堂島ビル 6F",
        errorField: "ecOrderNo",
      },
      {
        id: 2,
        isPaid: false,
        errorMsg: "EC番号重複",
        ecOrderNo: "000000000001",
        ecCustomerNo: "000000000001",
        customerName: "テスト太郎",
        deliveryName: "テスト次郎",
        quantity: 1,
        options: "商品点数追加：0点(0)/集荷キット：集荷キット不要(0)",
        paymentType: "クレジットカード",
        total: 9999999,
        tax: 999999,
        ShipPrefecture: "大阪府",
        ShipCity: "大阪市北区",
        ShipAddress: "堂島２丁目３−５ 大阪堂島ビル 6F",
        errorField: "ecOrderNo",
      },
      {
        id: 3,
        isPaid: false,
        errorMsg: "商品数2点以上あり",
        ecOrderNo: "000000000002",
        ecCustomerNo: "000000000003",
        customerName: "テスト太郎",
        deliveryName: "テスト次郎",
        quantity: 1,
        options: "商品点数追加：0点(0)/集荷キット：集荷キット不要(0)",
        paymentType: "クレジットカード",
        total: 9999999,
        tax: 999999,
        ShipPrefecture: "大阪府",
        ShipCity: "大阪市北区",
        ShipAddress: "堂島２丁目３−５ 大阪堂島ビル 6F",
        errorField: "quantity",
      },
      {
        id: 4,
        isPaid: false,
        errorMsg: "商品数2点以上あり",
        ecOrderNo: "000000000003",
        ecCustomerNo: "000000000003",
        customerName: "テスト太郎",
        deliveryName: "テスト次郎",
        quantity: 1,
        options: "商品点数追加：0点(0)/集荷キット：集荷キット不要(0)",
        paymentType: "クレジットカード",
        total: 9999999,
        tax: 999999,
        ShipPrefecture: "大阪府",
        ShipCity: "大阪市北区",
        ShipAddress: "堂島２丁目３−５ 大阪堂島ビル 6F",
        errorField: "quantity",
      },
    ],
    []
  );

  useEffect(() => {
    void (() => {
      try {
        const createdHistoryResult = [
          {
            id: 1,
            createdHistoryAtLast: new Date(),
            operator: "ふり蔵 太郎",
            uploadCount: 1,
            excludeCount: 2,
            targetPeriod: new Date(),
          },
        ];
        setCreatedHistoryList({
          totalRowCount: createdHistoryResult.length,
          dataList: createdHistoryResult,
        });
      } catch (e: unknown) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <Layout title="受注データ取込（Future Shop）">
      <Grid container rowSpacing={3}>
        <Grid item container xs="auto">
          <Grid item xs="auto">
            <TextField
              variant="outlined"
              fullWidth
              autoComplete="off"
              type="file"
            />
          </Grid>
          <Grid item xs="auto">
            <Button
              type="submit"
              onClick={() => {
                setJuchuuList({
                  totalRowCount: rows.length,
                  dataList: rows,
                });
              }}
              disabled={juchuuList.totalRowCount > 0}
            >
              取込開始
            </Button>
          </Grid>
        </Grid>
        <Grid item xs>
          <Paper>
            <Box p={2}>
              <Grid container rowSpacing={1}>
                <Grid item container justifyContent="space-between">
                  <Grid item xs="auto">
                    <Typography variant="body1" component="h4">
                      受注データ取込履歴
                    </Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <Button size="small">履歴確認</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>

                <Grid item container columnSpacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2" component="span">
                      最終取込日時：
                      {moment(new Date()).format("YYYY/MM/DD/ HH:mm")}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" component="span">
                      担当者：ふり蔵太郎
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container columnSpacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2" component="span">
                      取込件数：98件
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" component="span">
                      除外件数：2件
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item container>
                  <Grid item xs={12}>
                    <Typography variant="body2" component="span">
                      取込対象期間：
                      {`${moment(new Date()).format(
                        "YYYY/MM/DD/ HH:mm"
                      )} ～ ${moment(new Date()).format("YYYY/MM/DD/ HH:mm")}`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        {juchuuList.totalRowCount > 0 && (
          <Grid item xs={12} container>
            <Grid item xs>
              <Typography component="h3">取込結果</Typography>
              <Box my={1}>
                <Divider />
              </Box>
            </Grid>

            <Grid item container>
              <Grid item xs>
                <Card>
                  <CardContent>
                    <Box mb={4}>
                      <Typography variant="body2" component="h4">
                        取込予定件数
                      </Typography>
                    </Box>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{ fontWeight: 700 }}
                      textAlign="center"
                    >
                      100
                      <Box component="span" fontSize="18px">
                        件
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs>
                <Card>
                  <CardContent>
                    <Box mb={4}>
                      <Typography variant="body2" component="h4">
                        取込件数
                      </Typography>
                    </Box>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{ fontWeight: 700 }}
                      textAlign="center"
                    >
                      <Box component="span" color={theme.palette.primary.main}>
                        97
                      </Box>
                      <Box component="span" fontSize="18px">
                        件
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs>
                <Card>
                  <CardContent>
                    <Box mb={4}>
                      <Typography variant="body2" component="h4">
                        除外件数
                      </Typography>
                    </Box>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{ fontWeight: 700 }}
                      textAlign="center"
                    >
                      <Box component="span" color={theme.palette.warning.main}>
                        0
                      </Box>
                      <Box component="span" fontSize="18px">
                        件
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs>
                <Card>
                  <CardContent>
                    <Box mb={4}>
                      <Typography variant="body2" component="h4">
                        エラー件数
                      </Typography>
                    </Box>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{ fontWeight: 700 }}
                      textAlign="center"
                    >
                      <Box component="span" color={theme.palette.error.main}>
                        3
                      </Box>
                      <Box component="span" fontSize="18px">
                        件
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs>
                <Card>
                  <CardContent>
                    <Box mb={4}>
                      <Typography variant="body2" component="h4">
                        顧客登録件数
                      </Typography>
                    </Box>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{ fontWeight: 700 }}
                      textAlign="center"
                    >
                      4
                      <Box component="span" fontSize="18px">
                        件
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid item xs={12} container justifyContent="center">
              <Grid item xs={12}>
                <Typography
                  component="p"
                  variant="h5"
                  textAlign="center"
                  sx={{
                    lineHeight: 1.8,
                  }}
                >
                  「
                  <Box fontWeight={700} component="span">
                    juchuutest.csv
                  </Box>
                  」の取込みでエラーが発生しました。
                  <br />
                  下記一覧より修正して再度取込みを行ってください。
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="submit"
                  fullWidth
                  sx={{
                    padding: "10px",
                  }}
                >
                  修正内容で再取込
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    padding: "10px",
                  }}
                  onClick={() => setIsOpenDialog(true)}
                >
                  取込中止
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                "& .errorField": {
                  backgroundColor: theme.palette.error.light,
                  color: theme.palette.error.main,
                },
              }}
            >
              <DataGrid
                showCellRightBorder
                editMode="row"
                rows={rows}
                columns={juchuuListColumns}
                rowsPerPageOptions={[4]}
                rowCount={4}
                pageSize={4}
                rowHeight={35}
                getCellClassName={(params: GridCellParams<string>) =>
                  params.row.errorField === params.field ? "errorField" : ""
                }
              />
            </Grid>
          </Grid>
        )}
      </Grid>

      <ConfirmDialog
        isOpen={isOpenDialog}
        onClose={() => {
          setIsOpenDialog(false);
        }}
        title="取込み処理"
        content="受注データの取込をキャンセルします。よろしいでしょうか？"
        action={() => {
          setJuchuuList({ totalRowCount: 0, dataList: [] });
        }}
      />
    </Layout>
  );
};

export default Futureshop;
