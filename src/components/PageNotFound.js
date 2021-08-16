import { Link } from "react-router-dom";
function PageNotFound(props) {
  return (
    <div>
      <h1 className="center">Page not found</h1>
      <h3>
        Please back to <Link to="/">home page</Link>
      </h3>
    </div>
  );
}

export default PageNotFound;
