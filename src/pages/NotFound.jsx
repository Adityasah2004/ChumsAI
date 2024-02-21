import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <Helmet>
                <title>404: Not Found</title>
                <meta name="description" content="404: Not Found" />
            </Helmet>
            <h1>
                Oops! Page not found. The page you are looking for does not exist. &nbsp;
                <Link to="/" className="text-blue-500">
                    Go back to the homepage
                </Link>
            </h1>
            
        </div>
    )
}

export default NotFound
