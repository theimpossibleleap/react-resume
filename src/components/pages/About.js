import React from "react";
import '../../css-files/content.css';

export default function About() {
    return (
        <>
            <div id="ab-container" className="content-container">
                <div className="ab-card">
                    <div className="ab-card-top">
                        {/* <div id="portrait"></div> */}
                    </div>

                    <div className="ab-card-bottom">
                        <h2 id="card-name">Adam Punjabi</h2>
                        <p className="tagline">Apple Retail Manager transitioning to Software Engineering | HTML, CSS, JS, Python | Pursuing B.S. in Software Engineering @ WGU - ETC 2024</p>
                    </div>
                </div>
            </div>
        </>
    )
}