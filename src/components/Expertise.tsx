import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Python",
    "SQL",
    "SrpingBoot",
    "Serverless",
    "PostgreSQL",
    "OracleDB",
    "Git",
    "Docker",
    "Tests",
    "Postman"
];

const labelsSecond = [
    "Python",
    "SQL",
    "Pandas",
    "Numpy",
    "R",
    "RStudio",
    "ETL"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Backend Developer</h3>
                    <p>Throughout my career I've contributed to challenging projects that demanded scalable architecture decisions, cross-team integrations, and a disciplined approach to software quality. I value code that is easy to read, test, and extend — and I apply this mindset consistently, whether building greenfield features or maintaining existing systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Data and Analysis</h3>
                    <p>My background as a backend developer gives me a strong technical foundation to work with data, scripting, and structured data. I approach analysis with the same principles I apply to software: clarity, reproducibility, and attention to detail. I'm actively expanding my expertise in this area and eager to take on more data-intensive challenges.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;