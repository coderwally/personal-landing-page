import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Favorite from "@material-ui/icons/Favorite";
import GitHub from "@material-ui/icons/GitHub";
import Twitter from "@material-ui/icons/Twitter";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";



const useStyles = makeStyles(styles);

export default function ProductSectionCustom() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h1 className={classes.title}>traderwally7</h1>
          <h5 className={classes.description}>
            Solidity / ReactJS / Next.js / Javascript
          </h5>
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
