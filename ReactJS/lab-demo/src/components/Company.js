import { useNavigate } from "react-router-dom"
import "../new_css.css"

export default function Company() {
    const navigate =useNavigate()
    return (
        <>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-lg-6">
                        {/* <!-- Section Heading--> */}
                        <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                            <h3>Our Creative <span> Team</span></h3>
                            <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <!-- Single Advisor--> */}
                    <div onClick={()=>{navigate(-1)}} className="col-12 col-sm-6 col-lg-3">
                        <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                            {/* <!-- Team Thumb--> */}
                            <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                {/* <!-- Social Info--> */}
                                <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
                            </div>
                            {/* <!-- Team Details--> */}
                            <div className="single_advisor_details_info">
                                <h6>Samantha Sarah</h6>
                                <p className="designation">Founder &amp; CEO</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single Advisor--> */}
                    <div onClick={()=>{navigate(-1)}} className="col-12 col-sm-6 col-lg-3">
                        <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp" }}>
                            {/* <!-- Team Thumb--> */}
                            <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                                {/* <!-- Social Info--> */}
                                <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
                            </div>
                            {/* <!-- Team Details--> */}
                            <div className="single_advisor_details_info">
                                <h6>Nazrul Islam</h6>
                                <p className="designation">UI Designer</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single Advisor--> */}
                    <div onClick={()=>{navigate(-1)}} className="col-12 col-sm-6 col-lg-3">
                        <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInUp" }}>
                            {/* <!-- Team Thumb--> */}
                            <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                {/* <!-- Social Info--> */}
                                <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
                            </div>
                            {/* <!-- Team Details--> */}
                            <div className="single_advisor_details_info">
                                <h6>Riyadh Khan</h6>
                                <p className="designation">Developer</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single Advisor--> */}
                    <div onClick={()=>{navigate(-1)}} className="col-12 col-sm-6 col-lg-3">
                        <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInUp" }}>
                            {/* <!-- Team Thumb--> */}
                            <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                {/* <!-- Social Info--> */}
                                <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div>
                            </div>
                            {/* <!-- Team Details--> */}
                            <div className="single_advisor_details_info">
                                <h6>Niloy Islam</h6>
                                <p className="designation">Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}