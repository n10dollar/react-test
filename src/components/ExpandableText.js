import {useState} from "react";

interface Props {
    children: string;
    maxChars?: number;
}
const ExpandableText = ({children, maxChars = 100} : props) => {
    const [expanded, setExpanded] = useState(false);

    let text;
    if (children.length < maxChars || expanded)
        text = children;
    else text = children.substring(0, maxChars) + "...";

    function handleClick() {
        setExpanded(!expanded);
    }

    return (
        <p>
            {text}
            <button onClick={handleClick}>
                {expanded ? "Less" : "More"}
            </button>
        </p>
    )
};

export default ExpandableText;