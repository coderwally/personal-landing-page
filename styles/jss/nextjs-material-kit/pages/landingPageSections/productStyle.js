import { title } from "styles/jss/nextjs-material-kit.js";

const productStyle = {
  section: {
    padding: "50px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "0",
    minHeight: "32px",
    textDecoration: "none",
    color: "#4caf50"
  },
  description: {
    color: "#999",
    marginBottom: "2rem",
  },
};

export default productStyle;
