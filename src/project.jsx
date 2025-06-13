import { Navbar1 } from "./navbar";
import Footer from "./footer";
import { Auto,Slider } from "./slider";

function Project(){
    return(
        <>
        <section className="container-fluid pt-4  d-flex bb">
           <div className="w-50 wdth9">
            <ul className="d-flex gap-3 "> 
                <li className="list-unstyled next position-relative pe-3">
                    <a className="text-decoration-none clr " href="tel:+7814661633">
                        Call Us: <span>+ +869 968 236</span>
                    </a>
                </li>
                <li className="list-unstyled clr">
                    <span>Email Us:</span>
                    <span>bliize@gmail.com</span>
                </li>
            </ul>
           </div>
           <div className="w-50 ent wdth9">
            <ul className="d-flex text-muted face justify-content-end">
                        <li><i class="fa-brands fa-facebook-f"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li><i class="fa-brands fa-linkedin-in"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                    </ul>
           </div>
        </section>
        <Navbar1/>
        <section className="container text-center">
            <div className="text-center mt-5">
                <button className="price">
                Projects
                </button>
            </div>
            <div>
                <h1 className="plan mt-4 mb-5">Dream House Residentials</h1>
            </div>
        </section>
         <section className="wth1 mt-3">
                <div className="row rwo">
                    <div className="col-lg-5 hov position-relative">
                        <div className="p1">
                            <img src="p1.jpg"/>
                            <div className="content position-absolute">
                                <h2 className="uk">Modern House In UK</h2>
                                <span className="build">Building, Apartment</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 hov position-relative">
                        <div className="p1">
                            <img src="p2.jpg"/>
                            <div className="content position-absolute">
                                <h2 className="uk">Art Museum In Dubai</h2>
                                <span className="build">Building, Apar  tment</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 hov position-relative mt-5">
                        <div className="p1">
                            <img src="p3.jpg"/>
                            <div className="content position-absolute">
                                <h2 className="uk">Alexa Complex</h2>
                                <span className="build">Building, Apartment</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 hov position-relative mt-5">
                        <div className="p1">
                            <img src="p4.jpg"/>
                            <div className="content position-absolute">
                                <h2 className="uk">Bentila Palace</h2>
                                <span className="build">Building, Apartment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wth1 marg autoo">
                 <Auto/>
            </section>
            <section className="wth1 marg sliderr">
                 <Slider/>
            </section>
            <Footer/>
        </>
    )
}
export default Project;