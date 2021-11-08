import img from './error.gif';

const ErrorMessage = () => {
  return(
    <img src={img} style={{width: "240px", height: "180px"}} alt="Error"/>
  )
}

export default ErrorMessage;