import { Helmet } from "react-helmet"

const NotFound = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <Helmet>
                <title>404: Not Found</title>
                <meta name="description" content="404: Not Found" />
            </Helmet>
            <h1>404: Not Found</h1>
        </div>
    )
}

export default NotFound
