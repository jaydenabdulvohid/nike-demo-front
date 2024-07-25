import { Stack } from "@mui/material";
import Head from "next/head";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nike</title>
        </Head>
        <Stack id="pc-wrap"></Stack>
        <Stack sx={{ background: "#81c784" }}>Header</Stack>

        <Stack id={"main"}>
          <Component {...props} />
        </Stack>

        <Stack sx={{ background: "#a1887f" }}>Footer</Stack>
      </>
    );
  };
};

export default withLayoutMain;
