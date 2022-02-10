import {
  Typography,
  Container,
  TextField,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

const Login: FC = () => {
  const router = useRouter();

  return (
    <Container component="main" maxWidth="xs">
      <form
        onSubmit={() => {
          void router.push("/");
        }}
        noValidate
      >
        <Grid
          container
          rowSpacing={1}
          flexDirection="column"
          justifyContent="center"
          style={{ height: "100vh" }}
        >
          <Typography component="h1">
            <img
              src="/images/logo.png"
              alt="リナビスマネージャー"
              width="100%"
            />
          </Typography>
          <Box mt={1} mb={3}>
            <Typography component="h2" variant="h4" align="center">
              宅配クリーニング管理システム
            </Typography>
          </Box>
          <Grid item>
            <TextField
              id="userId"
              label="ユーザーID"
              required
              size="small"
              fullWidth
              autoComplete="off"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id="password"
              label="パスワード"
              required
              size="small"
              fullWidth
              autoComplete="off"
              variant="outlined"
            />
          </Grid>
          <Box mt={1}>
            <Button type="submit" fullWidth variant="contained" size="large">
              ログイン
            </Button>
          </Box>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
