import { Helmet } from 'react-helmet'
import Blogs from '../components/Blogs'
import Navbar from '../components/Navbar'

const BlogsPage = () => {
    return (
        <div className='py-10'>
            <Helmet>
                <title>Blogs | Chums AI</title>
                <meta name="description" content="Blogs" />
            </Helmet>
            <Navbar/>
            <Blogs/>
        </div>
    )
}

export default BlogsPage
