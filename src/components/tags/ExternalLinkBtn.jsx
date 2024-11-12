const handleExternalLink = (url) => {
    window.open(url, "_blank");
};

const ExternalLinkBtn = ({ content, url, width }) => {
    return (
        <button
            type="button"
            style={{ width: width }}
            onClick={() => {
                handleExternalLink(url);
            }}
        >
            {content}
        </button>
    );
};

export default ExternalLinkBtn;
