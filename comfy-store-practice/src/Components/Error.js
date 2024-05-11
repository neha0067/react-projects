import { useRouteError, Link, isRouteErrorResponse } from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div>
        <p>404</p>
        <h1>Page not found</h1>
        <p>Sorry, we couldn't find the page you're looking for.</p>
        <Link to="/">GO BACK HOME</Link>
      </div>
    );
  }

  return (
    <div>
      <p>There was some error.</p>
      <Link to="/">GO BACK HOME</Link>
    </div>
  );
}

export default Error;
