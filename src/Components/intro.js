import React from "react";
import "./../Styles/main.css";
import Container from "@material-ui/core/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import {
  MuiThemeProvider,
  useTheme,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/800.css";

const WhiteTypography = withStyles({
  root: { color: "#FFFFFF" },
})(Typography);

const useStyles = makeStyles((theme) => ({
  container: {
    height: 1000,
  },
  intro: {
    marginTop: 300,
  },
}));
function Intro() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className="intro">
      <MuiThemeProvider theme={theme}>
        <Container className={classes.container}>
          <Grid container>
            <Grid
              container
              item
              xs={12}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <div className={classes.header} style={{ marginTop: 30 }}>
              <Button
                  component={Link}
                  to="/"
                  variant="text"
                  size="large"
                  style={{
                    color: "#FFFFFF",
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
                    color: "#FFFFFF",
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
                    color: "#FFFFFF",
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
                    color: "#FFFFFF",
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
          <Grid container className={classes.intro}>
            <Grid
              container
              item
              xs={12}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <WhiteTypography
                variant="h1"
                style={{ fontFamily: "Montserrat", fontWeight: "800" }}
              >
                Hi there!
              </WhiteTypography>
              <WhiteTypography
                variant="h4"
                style={{ fontFamily: "Montserrat", fontWeight: "600" }}
              >
                I am Stephanie, an aspiring full-stack developer.
              </WhiteTypography>
              <WhiteTypography
                variant="h4"
                style={{ fontFamily: "Montserrat", fontWeight: "600" }}
              >
                Find out more about me through this website!
              </WhiteTypography>
              <Button
                variant="text"
                size="large"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  marginRight: 60,
                }}
              ></Button>
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  );
}

export default Intro;
