import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Badge } from "flowbite-react";

const MediumPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

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

  const truncateDescription = (text, maxLength, link) => {
    if (text.length > maxLength) {
      const truncatedText = text.substr(0, maxLength - 1);
      return `${truncatedText}... <a href="${link}" target="_blank" rel="noopener noreferrer" style="color: lightblue;">Read More</a>`;
    }
    return text;
  };
  

  const removeHtmlTags = (text) => {
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  const tagColorMap = {};

  const assignTagColor = (tag) => {
    if (!tagColorMap[tag]) {
      const color = getRandomColor();
      tagColorMap[tag] = color;
      return color;
    }
    return tagColorMap[tag];
  };

  const getRandomColor = () => {
    const colors = [
      "info",
      "gray",
      "failure",
      "success",
      "warning",
      "indigo",
      "purple",
      "pink",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="flex flex-wrap justify-center gap-6">
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
            <Card
              key={post.guid}
              className="max-w-md bg-#0c0c0c dark:bg-black"
              imgAlt={post.title}
              imgSrc={thumbnailUrl}
            >
              <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                {post.title}
              </h5>
              <p
                className="font-normal text-gray-400 dark:text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: truncateDescription(
                    removeHtmlTags(post.description),
                    150,
                    post.link
                  ),
                }}
              ></p>

              <hr className="border-t-2 border-gradient-to-r from-blue-900 to-purple-100 mb-4" />
              <div className="flex flex-wrap gap-2 mt-2">
                {post.categories.map((category, index) => (
                  <Badge key={index} color={assignTagColor(category)}>
                    {category}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-right text-gray-500">
                By {post.author}
              </p>
            </Card>
          );
        })
      ) : (
        <p>No Medium posts found.</p>
      )}
    </div>
  );
};

export default MediumPosts;
