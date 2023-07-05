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
                        {/* <p className="content-text">As a retail manager with over nine years of experience in managing teams and driving business growth, I am now seeking to transition into a career in software engineering. I have always been passionate about technology and coding, and have taken courses in many languages such as HTML, CSS, SQL, JavaScript, and Python, to develop my skills. I am currently working to obtain my Bachelor of Science in Software Engineering through Western Governors University. Through my experience in retail management, I have honed my communication, problem-solving, and project management skills, which I believe will be valuable assets in a software engineering role. I am excited to apply my skills and passion for technology to a new industry and contribute to the growth and success of a software engineering team.</p>
                        <p className="content-text">Thank you for taking the time to read and visit my website! Please reach out for any further information or inquiries.</p>
                        <p className="content-text">- Adam Punjabi</p> */}
                        <h2 id="card-name">Adam Punjabi</h2>
                        <p className="tagline">Apple Retail Manager transitioning to Software Engineering | HTML, CSS, JS, Python | Pursuing B.S. in Software Engineering @ WGU - ETC 2024</p>
                    </div>
                </div>
            </div>
        </>
    )
}