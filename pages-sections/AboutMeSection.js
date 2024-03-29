import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GitHub from "@material-ui/icons/GitHub";
import Twitter from "@material-ui/icons/Twitter";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AboutMeSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
            <img
                src="/img/twprofile.png"
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid +
                  " " +
                  classes.profilePic
                }
              />
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <div className={classes.titlesection}>
            <h1 className={classes.title}>traderwally7 </h1>
            <h2 className={classes.subtitle}>(a.k.a. coderwally)</h2>
            <h5 className={classes.description}>
              Solidity / ReactJS / Next.js / Javascript
            </h5>
          </div>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Button color="github" round
                          href="https://github.com/coderwally"
                          target="_blank">
                <GitHub className={classes.icons} />My Github
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
          <Button color="twitter" round
                        href="https://twitter.com/traderwally7"
                        target="_blank">
                <Twitter className={classes.icons} />My Twitter
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
