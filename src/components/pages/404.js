import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
  const styleParagraph = {
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "32px",
    textAlign: "center",
    marginBottom: "20px",
  };

  const styleLink = {
    display: "block",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "32px",
    marginBottom: "40px",
    textAlign: "center",
    color: "#9f0013"
  };

  return (
    <div>
      <ErrorMessage />
      <p style={styleParagraph}>The page does not exist</p>
      <Link to="/" style={styleLink}>
        Back to home page
      </Link>
    </div>
  );
};

export default Page404;
