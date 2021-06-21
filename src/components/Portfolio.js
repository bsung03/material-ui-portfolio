import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/react-redux.jpg";
import project2 from "../images/Mixology.jpg";
import project3 from "../images/Cryptocurrency_Trading_bot.jpg";
import project4 from "../images/Critika.png";
import project5 from "../images/food.jpg";
import project6 from "../images/unity-engine.jpeg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Amazon Clone",
    description: `Full stack project for Ecommerce and online store development based off of Amazon's store platform. (ReactJs with Redux, Express, Mongodb, and Nodejs)  `,
    image: project1,
    github: "https://github.com/bsung03/Amazon-Clone"
  },
  {
    name: "Mixology",
    description: `Full stack web application utilizing machine learning to help users find cocktail recipes they might likefor the ingredients they currently have. (ReactJS, MongoDB, Python, Javascript, HTML, CSS)`,
    image: project2,
    github: "https://github.com/bsung03/mixology_2.0"
  },
  {
    name: "Cryptocurrency Trading Bot",
    description: `Trading bot utilizing deep learning to predict cryptocurrency prices and using theCoinbase API to make strategic trades to maximize profits and minimize losses (Python, Tensorflow, Keras)`,
    image: project3,
  },
  {
    name: "Critika",
    description: `Full Stack web application where individuals can get feedback on a desired medium and have equal visibility relative to other users (Angular, NodeJs, MongoDB, Express, Heroku)`,
    image: project4,
    github: "https://github.com/keithatan/Critika"
  },
  {
    name: "ML-galago-recipe-rater",
    description: `Machine learning algorithm for predicting ratings users would give to certain food recipes based on what they already like, using collaborative filtering and various clustering methods (Python)`,
    image: project5,
    github: "https://github.com/bsung03/ML-galago-recipe-rater"
  },
  {
    name: "Escape the Dungeon",
    description: `2D top down dungeon crawler game developed in Unity to create scripts for movement,combat, level progression and all other game mechanics (Unity2D, C#)`,
    image: project6,
    github: "https://github.com/bsung03/Escape-the-Dungeon"
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {
                  project.github && (
                    <Button size="small" color="primary">
                      <a href={project.github}>Github</a>
                    </Button>
                  )
                }
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
