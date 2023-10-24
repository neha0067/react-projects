import { useRouteError, Link, isRouteErrorResponse } from "react-router-dom"

function Error() {

  const error = useRouteError()
  

  if(isRouteErrorResponse(error) && error.status === 404){
    return (
      <main>
        <div>
          <p>404</p>
          <h1>Page not found</h1>
          <p>Sorry, we couldn't find the page you're looking for.</p> 
          <div>
            <Link to='/' className="btn btn-secondary">GO BACK HOME</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main>
      <div>
        <p>There was some error.</p>
        <div>
          <Link to='/'>GO BACK HOME</Link>
        </div>
      </div>
    </main>
  )
}

export default Error