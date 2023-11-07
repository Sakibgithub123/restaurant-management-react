import { useRouteError } from "react-router-dom";
import notfoundimg from "../../assets/Banner-img/notFound.webp"

const ErrorPage = () => {
    const error=useRouteError()
    return (
        <div id="error-page">
      <h1 className="text-2xl">Oops!</h1>
      <p >
        <i className="text-3xl">{error.statusText || error.message}</i>
        <div className="flex flex-row justify-center items-center">
        <img src={notfoundimg} alt="" />
        </div>
      </p>
    </div>
    );
};

export default ErrorPage;