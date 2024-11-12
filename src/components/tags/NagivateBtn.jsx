import { useNavigate } from "react-router-dom";

const NagivateBtn = ({ content, path, width }) => {
    const nav = useNavigate();
    return (
        <button
            onClick={() => {
                nav(path);
            }}
            style={{ width: width }}
        >
            {content}
        </button>
    );
};
export default NagivateBtn;
