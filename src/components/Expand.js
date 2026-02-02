import React from "react";

import "../css/Expand.css"

function searchAndVisiblyExpand(id) {
    const span = document.getElementById(id)
    if (span) {
        if (span.classList.contains("invisible")) {
            span.classList.remove("invisible");
            span.classList.add("visible");
        } else {
            span.classList.remove("visible");
            span.classList.add("invisible");
        }
    }
}

function Expand ({id}) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    function handleExpand() {
        setIsExpanded(!isExpanded);
        searchAndVisiblyExpand(id);
    }

    return (
        <button className="expandable" onClick={handleExpand}>{isExpanded ? "Less" : "More"}</button>
    )
}

export default Expand