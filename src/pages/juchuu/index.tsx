import { Button, Grid } from "@mui/material";
import { FC } from "react";
import { useRouter } from "next/router";

import Layout from "components/common/Layout";

const Juchuu: FC = () => {
  const router = useRouter();

  return (
    <Layout title="受注処理">
      <Grid container columnSpacing={2}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => router.push("juchuu/futureshop")}
          >
            受注データ取込（Future Shop）
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

export default Juchuu;
