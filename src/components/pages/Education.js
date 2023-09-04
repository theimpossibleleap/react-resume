import React from "react"
import '../../css-files/content.css'

export default function Education() {
    return (
        <>
            <div id="exp-container" className="content-container">
                <h1>Education</h1>

                <div className="exp-card">
                    <div className="exp-card-top">
                        <h2>Western Governors University</h2>
                    </div>
                    <div className="exp-card-bottom">
                        <p className="content-text">Expected Bachelor of Science in Software Engineering<small>(<i>ETC: November 2024</i>)</small></p>
                        <div id="completed">
                            <p>Relevant Completed Courses:</p>
                            <ul id="edu-list">
                                <li>Data Structures and Algorithms</li>
                                <li>Introduction to Python Programming</li>
                                <li>Scripting and Programming Foundations</li>
                                <li>Web Development Foundations</li>
                                <li>Web Development Applications</li>
                                <li>Data Management Foundations</li>
                                <li>Data Management Applications</li>
                                <li>Advanced Data Management</li>
                                <li>User Interface Design</li>
                                <li>User Experience Design</li>
                                <li>Version Control (Git, CI/CD)</li>)
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="exp-card">
                    <div className="exp-card-top">
                        <h2>College of Southern Nevada</h2>
                    </div>
                    <div className="exp-card-bottom">
                        <p className="content-text">Certificate in Music Business & Technology</p>
                    </div>
                </div>
            </div>
        </>
    )
}