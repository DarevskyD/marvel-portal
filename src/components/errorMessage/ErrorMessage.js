import img from "./error.gif";
import "./errorMessage.scss";

const ErrorMessage = () => {
  return (
    <div className="error">
      <img src={img} style={{ width: "240px", height: "180px" }} alt="Error" />
    </div>
  );
};

export default ErrorMessage;
