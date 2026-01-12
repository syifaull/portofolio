import { SchoolOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Collapse,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

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
    {
      name: "Web Risk",
      description:
        "Web Risk App is a risk assessment application that analyzes potential threats across multiple categories, including supply chain and operational areas.",
      linkWeb: "https://app.unitedtractors.com/corporategovernance",
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
      urlImage: "/webrisk-face.png",
    },
    {
      name: "E-PKPS",
      description:
        "E-PKPS Project is an application that digitizes NAK submission, cashflow analysis, and multi-level approval processes, enabling faster and more accurate credit evaluations for improved customer support. Provides customer data, credit limit, credit scoring, and e-pipeline status",
      linkWeb: "https://app.unitedtractors.com/e-pkps/login",
      stack: [
        {
          name: "React",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png?20220125121207",
        },
        {
          name: "Tanstack Query",
          iconUrl: "",
        },
        {
          name: "Material UI",
          iconUrl: "",
        },
      ],
      urlImage: "/pkps-face.png",
    },
    {
      name: "E-Pipeline",
      description:
        "E-Pipeline is a web-based application that facilitates the submission and management of financing credit applications through partner banks and leasing institutions, providing a more efficient and transparent process for both internal teams and financial partners",
      linkWeb: "https://app.unitedtractors.com/e-pipeline/login",
      stack: [
        {
          name: "React",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png?20220125121207",
        },
        {
          name: "Tanstack Query",
          iconUrl: "",
        },
        {
          name: "Material UI",
          iconUrl: "",
        },
      ],
      urlImage: "/pipeline-face.png",
    },
  ];

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
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
            <Grid gap={5} container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography fontSize="1.5rem" color="#6b7280">
                  Hello world! I am
                </Typography>

                <Typography fontSize="4rem" fontWeight={700}>
                  Syifa <span style={{ color: "#3b82f6" }}>Ulyanida</span>
                </Typography>

                <Typography fontSize="1rem" color="#64748b">
                  Frontend Developer • React JS
                </Typography>
              </motion.div>
              <Grid>
                <motion.img
                  src="/foto-linkedin.jpeg"
                  style={{
                    borderRadius: "100%",
                    width: "12rem",
                    height: "12rem",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </Grid>
            </Grid>
            <Grid container sx={{ pt: "3rem" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography>
                  Frontend engineer experience in designing and building
                  responsive web design with CSS and JS Framework. Worked
                  through over two years of experience, learning new
                  technologies and working with dedicated teams to build
                  applications suited to the user’s needs.
                </Typography>
              </motion.div>
            </Grid>
            <Grid sx={{ pt: "3rem" }}>
              <Typography>Education</Typography>
              <Grid>
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {education.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 3,
                          mb: 4,
                          mt: 2,
                        }}
                      >
                        <SchoolOutlined sx={{ color: "#38bdf8", mt: "4px" }} />

                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            color="#e5e7eb"
                          >
                            {item.degree}
                          </Typography>

                          <Typography variant="body2" color="#94a3b8">
                            {item.school} • {item.year}
                          </Typography>

                          {item.desc && (
                            <Typography variant="body2" mt={1} color="#cbd5f5">
                              {item.desc}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </motion.div>
              </Grid>
            </Grid>

            <Grid sx={{ pt: "3rem" }}>
              <Typography>Experience</Typography>
              <Grid>
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {experience.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 3,
                          mb: 4,
                          mt: 2,
                        }}
                      >
                        <img
                          src="/logo-ut.png"
                          height="40"
                          style={{ marginTop: "6px" }}
                        />

                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            color="#e5e7eb"
                          >
                            {item.role}
                          </Typography>

                          <Typography variant="body2" color="#94a3b8">
                            {item.work} • {item.year}
                          </Typography>

                          {item.desc && (
                            <Typography variant="body2" mt={1} color="#cbd5f5">
                              {item.desc}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </motion.div>
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
                  justifyContent: "space-between",
                }}
              >
                {projects?.map((item, index) => (
                  <Grid>
                    <Card
                      sx={{
                        maxWidth: 300,
                        transition: "all 0.3s",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: 6,
                        },
                      }}
                      key={index}
                    >
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
                        <Collapse collapsedSize={100} sx={{ overflow: "auto" }}>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            {item?.description}
                          </Typography>
                        </Collapse>
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
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        <Typography>made with ❤︎ by Syifa</Typography>
      </Grid>
    </>
  );
};

export default Home;
