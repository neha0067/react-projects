import React from "react";

export default function Questions(props) {

    const [hiddenSection, setHiddenSection] = React.useState(true);

    function showSection() {
        setHiddenSection((prevState) => !prevState)
    }

    return (
        <section className="container">
            <div className="eachSection">
                <div className="question">{props.title}</div>
                <button className="button" onClick={showSection}>{hiddenSection ? "+": "-"}</button>    
                
                {!hiddenSection && <p>{props.info}</p>}
            </div>
        </section>
    )
}