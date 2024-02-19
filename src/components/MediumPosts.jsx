

const MediumPosts = () => {
    

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
        <div className="flex flex-wrap justify-center gap-4 px-4">
            
        </div>
    );
};

export default MediumPosts;
