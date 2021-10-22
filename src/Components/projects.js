import React, { Component } from "react";
import "./../Styles/main.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@material-ui/core/Container";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  MuiThemeProvider,
  useTheme,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import "@fontsource/montserrat/800.css";

function Projects() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const WhiteTypography = withStyles({
    root: { color: "#5B4271" },
  })(Typography);

  return (
    <div className="projects">
      <Container style={{ height: 1000 }}>
        <Grid container>
          <Grid
            container
            item
            xs={12}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <div style={{marginBottom:70, marginTop:30}}>
              <Button
                component={Link}
                to="/"
                variant="text"
                size="large"
                style={{
                  color: "#4C2647",
                  fontFamily: "Montserrat",
                  fontWeight: "300",
                  fontSize: 20,
                  marginRight: 60,
                  textTransform: "none",
                }}
              >
                home
              </Button>
              <Button
                component={Link}
                to="/proj"
                variant="text"
                size="large"
                style={{
                  color: "#4C2647",
                  fontFamily: "Montserrat",
                  fontWeight: "300",
                  fontSize: 20,
                  marginRight: 60,
                  textTransform: "none",
                }}
              >
                projects
              </Button>
              <Button
                component={Link}
                to="/educ"
                variant="text"
                size="large"
                style={{
                  color: "#4C2647",
                  fontFamily: "Montserrat",
                  fontSize: 20,
                  fontWeight: "300",
                  marginRight: 60,
                  textTransform: "none",
                }}
              >
                credentials
              </Button>
              <Button
                component={Link}
                to="/about"
                variant="text"
                size="large"
                style={{
                  color: "#4C2647",
                  fontFamily: "Montserrat",
                  fontWeight: "300",
                  fontSize: 20,
                  marginRight: 60,
                  textTransform: "none",
                }}
              >
                about
              </Button>
            </div>
          </Grid>
        </Grid>
        <WhiteTypography
          variant="h2"
          style={{ fontFamily: "Montserrat", fontWeight: "800" }}
        >
          {" "}
          my projects{" "}
        </WhiteTypography>
        <Container
          style={{
            marginTop: 80,
            direction: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                }}
              >
                U2 Electrical Inventory System
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                }}
              >
                Front-end Developer (June 2020 - October 2021)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: "Montserrat", fontWeight: "300" }}>
                I worked with a team to develop an inventory system for U2
                Electrical. We used ReactJS with Material-UI and React Bootstrap
                for the front-end, while we used ReactJS for the back-end with
                MongoDB as our database.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                }}
              >
                Undergraduate Thesis
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                }}
              >
                Image Retrieval using Image Captioning with Visual Attention
                (January 2020 - December 2020)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: "Montserrat", fontWeight: "300" }}>
                Our thesis aimed to improve precision of image retrieval using
                image captioning with visual attention using Python as
                programming language. Although I focused on the documentation
                part, I was able to grasp a lot of concepts and I am familiar
                with the implementation.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                }}
              >
                UNOSoft Labs - Symlify
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                }}
              >
                Support Back-end Developer (June 2020 - August 2020)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: "Montserrat", fontWeight: "300" }}>
                Worked with a team and under a mentor in developing an online
                order management platform designed for small business online
                sellers in social media using Kotlin with Spring for the
                back-end, and Angular JS for front-end.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{
                  width: "33%",
                  flexShrink: 0,
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                }}
              >
                T.I.P.S.
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontFamily: "Montserrat",
                  fontWeight: "500",
                }}
              >
                Full Stack Developer (January 2020 - June 2020)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: "Montserrat", fontWeight: "300" }}>
                I worked with my software engineering group to develop an
                inventory and POS system for Tinapayan Festival Bakeshoppe. We
                used PHP with Bootstrap and a bit of jQuery for the front-end,
                and PHP for the back-end with XAMPP as our database.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Container>
    </div>
  );
}

export default Projects;
