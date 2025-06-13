import { Navbar1 } from "./navbar";
import Footer from "./footer";
import { Auto ,Slider } from "./slider";

function Pages(){
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
                Pricing
                </button>
            </div>
            <div>
                <h1 className="plan mt-4">Choose Your Perfect Plan</h1>
                <p className="et mt-4">Fermentum mus et viverra purus nibh fusce integer. Aenean cursus quis pharetra vitae vel sit ac malesuada. </p>
            </div>
        </section>
        <section className="container-fluid mt-5">
            <div className="row g-4">
               <div className="col-lg-4 inter">
                    <div className="pt-5 pb-5 ps-3 pe-3 box text-center">
                        <h2 className="basic  text-center">Basic</h2>
                    <div className="text-center mb-2">
                        <h2 className="twofive">125
                            <sub> / Per Month</sub>
                        </h2>
                    </div>
                    <ul className="design">
                        <li className="list-unstyled">Dismantling plan</li>
                        <li className="list-unstyled">Measurement of the room</li>
                        <li className="list-unstyled">Structure of a project</li>
                        <li className="list-unstyled">Scheme of interior finishing</li>
                        <li className="list-unstyled">3D-Visualization of premises</li>
                        <li className="list-unstyled">Best interior design</li>
                    </ul>
                    <button className="cp">Choose Plan</button>
                    </div>
                </div> 
                <div className="col-lg-4 inter">
                    <div className=" pt-5 pb-5 ps-3 pe-3 box text-center">
                        <h2 className="basic  text-center">Standard</h2>
                    <div className="text-center mb-2">
                        <h2 className="twofive">150
                            <sub> / Per Month</sub>
                        </h2>
                    </div>
                    <ul className="design">
                        <li className="list-unstyled">Dismantling plan</li>
                        <li className="list-unstyled">Measurement of the room</li>
                        <li className="list-unstyled">Structure of a project</li>
                        <li className="list-unstyled">Scheme of interior finishing</li>
                        <li className="list-unstyled">3D-Visualization of premises</li>
                        <li className="list-unstyled">Best interior design</li>
                    </ul>
                    <button className="cp">Choose Plan</button>
                    </div>
                </div> 
                <div className="col-lg-4 inter">
                    <div className=" pt-5 ps-3 pe-3 pb-5 box text-center">
                        <h2 className="basic  text-center">Platinum</h2>
                    <div className="text-center mb-2">
                        <h2 className="twofive">350
                            <sub> / Per Month</sub>
                        </h2>
                    </div>
                    <ul className="design">
                        <li className="list-unstyled">Dismantling plan</li>
                        <li className="list-unstyled">Measurement of the room</li>
                        <li className="list-unstyled">Structure of a project</li>
                        <li className="list-unstyled">Scheme of interior finishing</li>
                        <li className="list-unstyled">3D-Visualization of premises</li>
                        <li className="list-unstyled">Best interior design</li>
                    </ul>
                    <button className="cp">Choose Plan</button>
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
export default Pages;