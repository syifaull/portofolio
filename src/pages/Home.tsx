import { SchoolOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";

const Home = () => {
  const education = [
    {
      year: "2022",
      degree: "Immersive Program in Frontend Engineering",
      school: "Alterra Academy",
      desc: "Intensive 3-month program designed to train future frontend engineers in the fundamentals of software development",
    },
    {
      year: "2016 – 2022",
      degree: "Bachelor of Physics",
      school: "University of Lampung",
      desc: "Thesis: Automatization of Weight and Height Measurement using Ultrasonic Sensor HC-SR04, and Load Cell based on Arduino Uno on Posyandu (Pos Pelayanan Terpadu)",
    },
  ];

  const experience = [
    {
      year: "2023 - Now",
      work: "PT. United Tractors Tbk.",
      role: "Frontend Developer (Web)",
      desc: "Develop frontend development for multiple corporate finance-related applications",
    },
  ];

  const projects = [
    {
      name: "CLA",
      description:
        "CLA (Corporate Letter Assignment) is an application that manages performance evaluation and bonus calculation by processing company KPIs against preset annual targets, providing accurate and automated achievement summaries.",
      linkWeb: "https://app.unitedtractors.com/ut-net/login",
      stack: [
        {
          name: "React",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png?20220125121207",
        },
        {
          name: "Redux",
          iconUrl: "",
        },
        {
          name: "Material UI",
          iconUrl: "",
        },
      ],
      urlImage: "/cla-face.png",
    },
  ];

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
          <Grid container sx={{ pt: "3rem" }}>
            <Typography>
              Frontend engineer experience in designing and building responsive
              web design with CSS and JS Framework. Worked through over two
              years of experience, learning new technologies and working with
              dedicated teams to build applications suited to the user’s needs.
            </Typography>
          </Grid>
          <Grid sx={{ pt: "3rem" }}>
            <Typography>Education</Typography>
            <Grid>
              <Box sx={{ position: "relative" }}>
                {education.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      gap: 3,
                      mb: 4,
                      mt: 2,
                      position: "relative",
                    }}
                  >
                    <SchoolOutlined
                      fontSize="medium"
                      sx={{ color: "#8eb69b" }}
                    />

                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {item.degree}
                      </Typography>

                      <Typography variant="body2" sx={{ color: "#8eb69b" }}>
                        {item.school} • {item.year}
                      </Typography>

                      {item.desc && (
                        <Typography variant="body2" mt={1}>
                          {item.desc}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>

          <Grid sx={{ pt: "3rem" }}>
            <Typography>Experience</Typography>
            <Grid>
              <Box sx={{ position: "relative" }}>
                {experience?.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      gap: 3,
                      mb: 4,
                      mt: 2,
                      position: "relative",
                    }}
                  >
                    <img
                      src="/logo-ut.png"
                      height="50rem"
                      style={{ paddingTop: "6px" }}
                    ></img>

                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {item.role}
                      </Typography>

                      <Typography variant="body2" sx={{ color: "#8eb69b" }}>
                        {item.work} • {item.year}
                      </Typography>

                      {item.desc && (
                        <Typography variant="body2" mt={1}>
                          {item.desc}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>

          <Grid sx={{ pt: "3rem" }}>
            <Typography>Projects</Typography>
            <Grid
              container
              gap={2}
              sx={{
                pt: "1rem",
                width: "100%",
                // display: "flex",
                justifyContent: "space-between",
              }}
            >
              {projects?.map((item, index) => (
                <Grid>
                  <Card sx={{ maxWidth: 300 }} key={index}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image={item?.urlImage}
                      sx={{ m: 1 }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item?.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {item?.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {item?.stack?.map((item, index) => (
                        <>
                          <Chip key={index} label={item?.name} />
                        </>
                      ))}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
