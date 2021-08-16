import { Link } from "react-router-dom";
function PageNotFound(props) {
  return (
    <div className="center-container">
      <h1 className="center">Page not found</h1>
      <h3 className="center">
        Please back to the{" "}
        <Link className="choose" to="/">
          home page
        </Link>
      </h3>
    </div>
  );
}

export default PageNotFound;
