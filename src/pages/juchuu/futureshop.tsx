import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { FC, useMemo } from "react";

import Layout from "components/common/Layout";
import moment from "moment";

import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import { theme } from "components/common/Theme";

const rows: GridRowsProp = [
  {
    id: 1,
    ecOrderNo: "000000000001",
    ecCustomerNo: "000000000001",
    customerName: "テスト太郎",
    deliveryName: "テスト次郎",
    options: "商品点数追加：0点(0)/集荷キット：集荷キット不要(0)",
    paymentType: "クレジットカード",
    total: 9999999,
    tax: 999999,
    ShipPrefecture: "大阪府",
    ShipCity: "大阪市北区",
    ShipAddress: "堂島２丁目３−５ 大阪堂島ビル 6F",
  },
  {
    id: 2,
    ecOrderNo: "000000000001",
    ecCustomerNo: "000000000001",
    customerName: "テスト太郎",
    deliveryName: "テスト次郎",
    options: "商品点数追加：0点(0)/集荷キット：集荷キット不要(0)",
    paymentType: "クレジットカード",
    total: 9999999,
    tax: 999999,
    ShipPrefecture: "大阪府",
    ShipCity: "大阪市北区",
    ShipAddress: "堂島２丁目３−５ 大阪堂島ビル 6F",
  },
  {
    id: 2,
    ecOrderNo: "000000000001",
    ecCustomerNo: "000000000001",
    customerName: "テスト太郎",
    deliveryName: "テスト次郎",
    options: "商品点数追加：0点(0)/集荷キット：集荷キット不要(0)",
    paymentType: "クレジットカード",
    total: 9999999,
    tax: 999999,
    ShipPrefecture: "大阪府",
    ShipCity: "大阪市北区",
    ShipAddress: "堂島２丁目３−５ 大阪堂島ビル 6F",
  },
];

const Futureshop: FC = () => {
  const columns: GridColDef[] = [
    {
      field: "ecOrderNo",
      headerName: "EC受注番号",
      width: 150,
      editable: true,
    },
    { field: "ecCustomerNo", headerName: "EC顧客番号", width: 150 },
    { field: "customerName", headerName: "注文者氏名", width: 150 },
    { field: "options", headerName: "オプション内容", width: 250 },
    { field: "paymentType", headerName: "支払方法種別", width: 150 },
    {
      field: "total",
      headerName: "料金総額（税込）",
      width: 150,
      valueFormatter: (data: GridValueFormatterParams) =>
        data.value ? `${data.value.toLocaleString()}円` : undefined,
    },
    {
      field: "tax",
      headerName: "消費税額",
      width: 150,
      valueFormatter: (data: GridValueFormatterParams) =>
        data.value ? `${data.value.toLocaleString()}円` : undefined,
    },
    { field: "deliveryName", headerName: "お届け先氏名", width: 150 },
    { field: "ShipPrefecture", headerName: "お届け先（都道府県）", width: 150 },
    { field: "ShipCity", headerName: "お届け先（市区町村）", width: 150 },
    { field: "ShipAddress", headerName: "お届け先（番地/建物）", width: 150 },
  ];

  return (
    <Layout title="受注データ取込（Future Shop）">
      <Grid item container rowSpacing={3}>
        <Grid item xs="auto">
          <TextField
            variant="outlined"
            fullWidth
            autoComplete="off"
            type="file"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" size="small">
                    アップロード
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} container rowSpacing={3}>
          <Grid item xs>
            <Typography component="h3">取込結果</Typography>
            <Box my={1}>
              <Divider />
            </Box>
          </Grid>

          <Grid item container columnSpacing={2} alignItems="stretch">
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
                      正常件数
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ fontWeight: 700 }}
                    textAlign="center"
                  >
                    <Box component="span" color={theme.palette.success.main}>
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
                      異常件数
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
            <Grid item xs>
              <Card>
                <CardContent>
                  <Box mb={4}>
                    <Typography variant="body2" component="h4">
                      受注登録件数
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

          <Grid item xs>
            <Typography component="h3">異常データ</Typography>
            <Box my={1}>
              <Divider />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <DataGrid
              rows={rows}
              columns={columns}
              rowsPerPageOptions={[4]}
              rowCount={4}
              pageSize={4}
            />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Futureshop;
