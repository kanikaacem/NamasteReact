import React from "react";
import Footer from "../ThemeComponent/Common/Footer";

function ErrorPage() {
    return (
        <React.Fragment>
            <div className="error-page-header">
                <img src={window.location.origin + "/assets/DesktopLogo.png"} alt="JY" height="40px" />
            </div>
            <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/svg/404.svg" alt="Error SVG" style={{ width: "100%", height: "62vh" }} />
            <Footer />
        </React.Fragment>
    )
}

export default ErrorPage;