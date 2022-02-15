import { Box, Button, Grid, Typography } from "@mui/material";
import { FC } from "react";

import Layout from "components/common/Layout";

const JuchuuDenpyou: FC = () => {
  return (
    <Layout title="受注処理">
      <Grid container columnSpacing={2}>
        <Grid item xs={2}>
          <Button variant="contained" fullWidth>
            受注データ取込（Future Shop） asd
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" fullWidth>
            受注データ取込（Yahoo）
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default JuchuuDenpyou;
