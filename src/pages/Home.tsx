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
import { education, experience, projects, stacks } from "../constant/constant";

const Home = () => {
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
            <Grid
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
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
            <Grid sx={{ pt: "3rem" }}>
              <Typography>Stacks</Typography>
              <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Grid
                  container
                  sx={{
                    pt: "1rem",
                    width: "100%",
                    justifyContent: "space-between",
                    px: "5rem",
                  }}
                >
                  {stacks?.map((item, index) => (
                    <Grid
                      width={55}
                      minHeight={55}
                      sx={{ m: "2rem" }}
                      key={index}
                    >
                      <img src={item?.logoUrl} />
                      <Typography variant="body2" sx={{ textAlign: "center" }}>
                        {item?.name}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
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
