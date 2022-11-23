import { purple, yellow } from "@material-ui/core/colors";
import { title } from "styles/jss/nextjs-material-kit.js";
import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles.js";

const productStyle = {
  section: {
    padding: "50px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "0.1rem",
    marginTop: "1rem",
    minHeight: "32px",
    textDecoration: "none",
    color: "#4caf50"
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#4caf50",
    marginTop: "0"
  },
  titlesection: {
    color: "#000000"
  },
  description: {
    color: "#999",
    marginBottom: "2rem",
  },
  profilePic: {
    width: "165px"
  },
  ...imagesStyles,
};

export default productStyle;
