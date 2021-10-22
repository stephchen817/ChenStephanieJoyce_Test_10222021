import React, { Component } from "react";
import "./../Styles/main.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@material-ui/core/Container";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { Typography } from "@material-ui/core";
import { MuiThemeProvider, useTheme, makeStyles, withStyles } from "@material-ui/core";
import "@fontsource/montserrat";
import UST from "../Images/UST.png";

const list_item = styled("li")(({ theme }) => ({
  margin: theme.spacing(3),
}));

const WhiteTypography = withStyles({
  root: { color: "#4D3A4D" },
})(Typography);

const useStyles = makeStyles((theme) => ({
  Box: {
    backgroundColor:'none',
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    color:'#4F043E',
  },
  listElements:{
    fontFamily: 'Montserrat',
    fontWeight: 500,
    color: '#4D3A4D'
  }
}));
function Education() {
  const classes = useStyles();
  const theme = useTheme();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Java" },
    { key: 1, label: "Python" },
    { key: 2, label: "Kotlin" },
    { key: 3, label: "PHP" },
    { key: 4, label: "SQL" },
    { key: 5, label: "HTML/CSS" },
    { key: 6, label: "ReactJS" },
    { key: 7, label: "AngularJS" },
    { key: 8, label: "Spring" },
  ]);
  return (
    <div className="educ">
      <MuiThemeProvider theme={theme}>
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
              <div style={{ marginBottom: 70, marginTop: 30 }}>
                <Button
                  component={Link}
                  to="/"
                  variant="text"
                  size="large"
                  style={{
                    color: "#4F043E",
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
                    color: "#4F043E",
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
                    color: "#4F043E",
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
                    color: "#4F043E",
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
            style={{
              fontFamily: "Montserrat",
              fontWeight: "800",
              marginBottom: 20,
            }}
          >
            my credentials
          </WhiteTypography>
          <Container>
            <Grid container>
              <Grid
                container
                item
                xs={6}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box elevation={0} className={classes.Box}>
                  <div style={{ marginLeft: 90, marginBottom: 30 }}>
                    <Avatar src={UST} style={{ width: 200, height: 200 }} />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      style={{ fontFamily: "Montserrat", fontWeight: "600" }}
                    >
                      BS Computer Science, Major in Core Computer Science
                    </Typography>
                    <Typography
                      variant="h7"
                      style={{ fontFamily: "Montserrat", fontWeight: "400" }}
                    >
                      Cum Laude, August 2017 - August 2021
                    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid
                container
                item
                xs={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box elevation={0} className={classes.Box}>
                  <List
                    disablePadding="true"
                    className={classes.listElements}
                    sx={{ fontFamily: "Montserrat", fontWeight: "500" }}
                  >
                    <ListItem>
                      <ListItemText
                        primary="Dean's Lister - 4th Year, 2nd Semester"
                        secondary="A.Y. 2020-2021"
                      />
                    </ListItem>
                  </List>
                  <List
                    disablePadding="true"
                    className={classes.listElements}
                    sx={{ fontFamily: "Montserrat", fontWeight: "500" }}
                  >
                    <ListItem>
                      <ListItemText
                        primary="Dean's Lister - 4th Year, 1st Semester"
                        secondary="A.Y. 2020-2021"
                      />
                    </ListItem>
                  </List>
                  <List
                    className={classes.listElements}
                    disablePadding="true"
                    sx={{ fontFamily: "Montserrat", fontWeight: "500" }}
                  >
                    <ListItem>
                      <ListItemText
                        primary="Dean's Lister - 3rd Year, 2nd Semester"
                        secondary="A.Y. 2019-2020"
                      />
                    </ListItem>
                  </List>
                  <List
                    className={classes.listElements}
                    disablePadding="true"
                    sx={{ fontFamily: "Montserrat", fontWeight: "500" }}
                  >
                    <ListItem>
                      <ListItemText
                        primary="Dean's Lister - 2nd Year, 2nd Semester"
                        secondary="A.Y. 2018-2019"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid
                container
                item
                xs={3}
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Box elevation={0} className={classes.Box}>
                  <List
                    className={classes.listElements}
                    disablePadding="true"
                    sx={{ fontFamily: "Montserrat", fontWeight: "500" }}
                  >
                    <ListItem>
                      <ListItemText
                        primary="Dean's Lister - 2nd Year, 1st Semester"
                        secondary="A.Y. 2018-2019"
                      />
                    </ListItem>
                  </List>
                  <List
                    className={classes.listElements}
                    disablePadding="true"
                    sx={{ fontFamily: "Montserrat", fontWeight: "500" }}
                  >
                    <ListItem>
                      <ListItemText
                        primary="Dean's Lister - 1st Year, 2nd Semester"
                        secondary="A.Y. 2017-2018"
                      />
                    </ListItem>
                  </List>
                  <List
                    className={classes.listElements}
                    disablePadding="true"
                    sx={{ fontFamily: "Montserrat", fontWeight: "500" }}
                  >
                    <ListItem>
                      <ListItemText
                        primary="Dean's Lister - 1st Year, 1st Semester"
                        secondary="A.Y. 2017-2018"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid container item xs={12}>
                <WhiteTypography
                  variant="h4"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    marginTop: 20,
                  }}
                >
                  {" "}
                  skills:
                </WhiteTypography>
                <Box
                  elevation={0}
                  sx={{
                    direction: "row",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    listStyle: "none",
                    p: 0.75,
                    m: 2.5,
                    height: 50,
                    width: 900,
                  }}
                  component="ul"
                >
                  {chipData.map((data) => {
                    return (
                      <list_item key={data.key}>
                        <Chip label={data.label} sx={{ marginRight: 1 }} />
                      </list_item>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </MuiThemeProvider>
    </div>
  );
}

export default Education;
