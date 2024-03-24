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
        <section className="blogs-section my-5">
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
                            <div key={post.guid} className="article-card" data-aos="fade-left">
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
