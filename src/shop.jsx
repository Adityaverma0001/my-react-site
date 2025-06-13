import { Navbar1 } from "./navbar";
import { Auto, Slider } from "./slider";
import Footer from "./footer";



function Shop(){
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
                Shop
                </button>
            </div>
            <div> 
                <h1 className="plan mt-4">Interior Designer, Expert Architect</h1>
            </div>
        </section>
        <section className="container mt-5">
            <div className="row gy-5">
                <div className="col-lg-4 inter">
                    <div className="chair">
                        <div className="text-center ch">
                            <img src="ch1.jpg"/>
                        </div>
                        <div className="text-center pt-5 pb-4">
                            <h2 className="wood">Stylish Wooden Chair</h2>
                            <div className="d-flex align-items-baseline justify-content-center">
                                <p className="t2">$250.00 </p>
                                <span className="t3 ms-2">$220.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 inter">
                    <div className="chair">
                        <div className="text-center ch">
                            <img src="ch2.jpg"/>
                        </div>
                        <div className="text-center pt-5 pb-4">
                            <h2 className="wood">Table With Vase</h2>
                            <div className="d-flex align-items-baseline justify-content-center">
                                <p className="t2">$400.00 </p>
                                <span className="t3 ms-2">$380.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 inter">
                    <div className="chair">
                        <div className="text-center ch">
                            <img src="ch3.jpg"/>
                        </div>
                        <div className="text-center pt-5 pb-4">
                            <h2 className="wood">Table Lamp</h2>
                            <div className="d-flex align-items-baseline justify-content-center">
                                <p className="t2">$220.00 </p>
                                <span className="t3 ms-2">$200.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 inter">
                    <div className="chair">
                        <div className="text-center ch">
                            <img src="ch4.jpg"/>
                        </div>
                        <div className="text-center pt-5 pb-4">
                            <h2 className="wood">Stylish Mini Tables</h2>
                            <div className="d-flex align-items-baseline justify-content-center">
                                <p className="t2">$420.00 </p>
                                <span className="t3 ms-2">$400.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 inter">
                    <div className="chair">
                        <div className="text-center ch">
                            <img src="ch5.jpg"/>
                        </div>
                        <div className="text-center pt-5 pb-4">
                            <h2 className="wood">Stylish Chandelier</h2>
                            <div className="d-flex align-items-baseline justify-content-center">
                                <p className="t2">$380.00 </p>
                                <span className="t3 ms-2">$320.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 inter">
                    <div className="chair">
                        <div className="text-center ch">
                            <img src="ch6.jpg"/>
                        </div>
                        <div className="text-center pt-5 pb-4">
                            <h2 className="wood">Wooden Mini Rack</h2>
                            <div className="d-flex align-items-baseline justify-content-center">
                                <p className="t2">$200.00 </p>
                                <span className="t3 ms-2">$150.00</span>
                            </div>
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
export default Shop;