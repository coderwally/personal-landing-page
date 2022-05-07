import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import FooterCustom from "components/Footer/FooterCustom.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSectionCustom from "pages-sections/LandingPage-Sections/ProductSectionCustom.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Parallax filter responsive image="/img/forest-landing-bg.jpg">
        <div className={classNames(classes.main, classes.mainRaisedCenter)}>
            <div className={classes.container}>
                <ProductSectionCustom />
            </div>
        </div>
      </Parallax>
      {<FooterCustom />}
    </div>
  );
}
