import React from "react"
import '../css-files/footer.css'

function Footer() {
    return (
        <div id="footer">
            <div id="foot-container">
                <div id="footer-text">
                    <h3>Contact Information</h3>
                    <div className="footer-link"><i className="bi bi-envelope-fill">&nbsp;</i><a href="mailto:yell@adampunjabi.com">yell@adampunjabi.com</a></div>
                    <div className="footer-link"><i className="bi bi-linkedin">&nbsp;</i><a href="https://www.linkedin.com/in/adam-punjabi/">LinkedIn</a></div>
                    <div className="footer-link"><i className="bi bi-geo-alt-fill">&nbsp;</i><a href="https://petapixel.com/assets/uploads/2023/06/PowersHeart_SCFgame5web-800x534.jpg" target="_blank">las vegas, nv</a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer