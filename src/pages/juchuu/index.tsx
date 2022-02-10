import { Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

import Layout from "components/common/Layout";

const Juchuu: FC = () => {
  const router = useRouter();

  return (
    <Layout title="受注処理">
      <Grid container>
        <Grid item container>
          <Grid item xs={2}>
            <Button fullWidth onClick={() => router.push("juchuu/futureshop")}>
              受注データ取込（Future Shop）
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button fullWidth onClick={() => router.push("juchuu/yahoo")}>
              受注データ取込（Yahoo）
            </Button>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={2}>
            <Button
              fullWidth
              onClick={() => router.push("juchuu/juchuusanshou")}
            >
              受注照会
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Juchuu;
