import React from "react";
import "./../Styles/main.css";
import Container from "@material-ui/core/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CHEN from "./../Images/CHEN.JPG";
import {
  MuiThemeProvider,
  useTheme,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import "@fontsource/montserrat";

const WhiteTypography = withStyles({
  root: { color: "#410045" },
})(Typography);
const useStyles = makeStyles((theme) => ({
  paper: {
    direction: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
  },
  container: {
    height: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
}));
function About() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className="About">
      <MuiThemeProvider theme={theme}>
        <Container fluid="true" className={classes.container}>
          <Grid container>
            <Grid
              container
              item
              xs={12}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <div style={{ marginBottom: 70, marginTop: 30 }}>
                <Button
                  component={Link}
                  to="/"
                  variant="text"
                  size="large"
                  style={{
                    color: "#410045",
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
                    color: "#410045",
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
                    color: "#410045",
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
                    color: "#410045",
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
          <Grid container spacing={2}>
            <Grid
              container
              item
              xs={12}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Box sx={{ backgroundColor: "none" }}>
                <Avatar
                  className={classes.avatar}
                  src={CHEN}
                  sx={{ width: 300, height: 300, marginTop: 10 }}
                />
              </Box>
              <Box sx={{ backgroundColor: "none" }}>
                <WhiteTypography
                  variant="h2"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "800",
                    marginBottom: 30,
                  }}
                >
                  my contact info
                </WhiteTypography>
                <List
                  disablePadding="true"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    color: "#410045",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#AF3F78" }}>
                        <EmailOutlinedIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="stephaniechen.817@gmail.com" />
                  </ListItem>
                </List>
                <List
                  disablePadding="true"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    color: "#410045",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#AF3F78" }}>
                        <LocalPhoneOutlinedIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="09985498874" />
                  </ListItem>
                </List>
                <List
                  disablePadding="true"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    color: "#410045",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#AF3F78" }}>
                        <GitHubIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="www.github.com/stephchen817" />
                  </ListItem>
                </List>
                <List
                  disablePadding="true"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    color: "#410045",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#AF3F78" }}>
                        <LinkedInIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="www.linkedin.com/in/stephanie-joyce-chen" />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  );
}

export default About;
