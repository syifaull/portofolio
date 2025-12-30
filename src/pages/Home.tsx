import { Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        px: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{
          maxWidth: "60rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: "5rem",
        }}
      >
        <Grid
          sx={{
            width: "100%",
          }}
        >
          <Grid
            gap={5}
            container
            // sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid>
              <Typography fontSize="1.5rem">Hello world! I am </Typography>
              <Typography fontSize="4rem" fontWeight="600">
                Syifa Ulyanida{" "}
              </Typography>
              <Typography fontSize="1rem">
                Frontend Developer | React JS{" "}
              </Typography>
            </Grid>
            <Grid>
              <img
                style={{
                  borderRadius: "100%",
                  width: "12rem",
                  height: "12rem",
                }}
                src="/foto-linkedin.jpeg"
              ></img>
            </Grid>
          </Grid>
          <Grid container sx={{pt: '2rem'}}>ini harusnya isinya penjabaran kamu siapa</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
