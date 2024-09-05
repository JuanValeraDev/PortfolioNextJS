import React from "react";

const skillsContent = [
    {
        name: "Communicative",
    },
    {
        name: "Flexible",
    },
    {
        name: "Innovative",
    },
    {
        name: "Motivated",
    },
    {
        name: "Goal-oriented",
    },
    {
        name: "Reliable",
    },
];

const Skills = () => {
    return (
        <>
            {skillsContent.map((val, i) => (
                <div className="progress_inner" key={i}>
                    <span className="label">{val.name}</span>
                </div>
            ))}
        </>
    );
};

export default Skills;
