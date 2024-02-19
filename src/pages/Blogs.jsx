import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";
import '../styles/Blogs.css';

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    // const [currentPostIndex, setCurrentPostIndex] = useState(0);

    useEffect(() => {
        const fetchMediumPosts = async () => {
            const mediumUsername = "chumsai";

            try {
                const response = await axios.get(
                    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`
                );
                const { items } = response.data;
                setPosts(items);
            } catch (error) {
                console.error("Error fetching Medium posts:", error);
                setPosts([]);
            }
        };

        fetchMediumPosts();
    }, []);
    return (
        <section className="blogs-section">
            <Helmet>
                <title>Blogs | Chums AI</title>
                <meta name="description" content="Blogs" />
            </Helmet>
            <div>
                <p className="blogs-heading">Article and Blogs</p>
                <div className="flex justify-center items-center">
                    <a href="https://medium.com/@chumsai" className="py-4">
                        <p className="text-sky-500">
                            View articles on Medium &rarr;
                        </p>
                    </a>
                </div>
            </div>
            {/* <MediumPosts /> */}
            <div className="article-card-wrapper">
                {posts.length > 0 ? (
                    posts.map((post, index) => {
                        const parser = new DOMParser();
                        const htmlDoc = parser.parseFromString(post.content, "text/html");
                        const images = htmlDoc.querySelectorAll("img");
                        let thumbnailUrl = "";

                        if (images.length > 0) {
                            thumbnailUrl = images[0].src;
                        }

                        return (
                            // <Card
                            //     key={post.guid}
                            //     className="max-w-md bg-#0c0c0c dark:bg-black border-none"
                            //     imgAlt={post.title}
                            //     imgSrc={thumbnailUrl}
                            // >
                            //     <h5 className="text-lg text-white dark:text-white">
                            //         {post.title}
                            //     </h5>
                            //     {/* <p
                            //     className="font-normal text-gray-400 dark:text-gray-400"
                            //     dangerouslySetInnerHTML={{
                            //         __html: truncateDescription(
                            //             removeHtmlTags(post.description),
                            //             150,
                            //             post.link
                            //         ),
                            //     }}
                            // ></p> */}
                            //     {/* <div className="flex flex-wrap gap-2 mt-2">
                            //     {post.categories.map((category, index) => (
                            //         <Badge key={index} color={assignTagColor(category)}>
                            //             {category}
                            //         </Badge>
                            //     ))}
                            // </div> */}
                            //     {/* <p className="text-sm text-right text-gray-500">
                            //     By {post.author}
                            // </p> */}
                            // {/* </Card> */}
                            <div key={post.guid} className="article-card">
                                <a href={post.link} className="flex flex-col items-center">
                                    <img src={thumbnailUrl} alt={post.title} />
                                    <p>{post.title}</p>
                                </a>
                            </div>
                        );
                    })
                    
                ) : (
                    <p>No Medium posts found.</p>
                )}
            </div>
        </section>
    );
};

export default Blogs;
