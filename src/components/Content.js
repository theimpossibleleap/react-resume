import React from "react"
import '../css-files/content.css'
import About from './pages/About'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Skills from './pages/Skills'

function Content() {
    return (
        <div id="container">
            <div id="content">
                <About />
                <div className="spacer"></div>
                <Experience />
                <div className="spacer"></div>
                <Education />
                <div className="spacer"></div>
                <Skills />
                <div style={{marginBottom: 150 + 'px'}}></div>
            </div>
        </div>
    )
}

export default Content