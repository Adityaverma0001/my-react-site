import {Navbar} from "./navbar";
import{ Counter, Counter1,Counter2,Counter3,Counter4} from "./timer";
import Col from "./props";
import  {MySwiper, BootstrapSwiper,Auto, Slider } from "./slider";
import Footer from "./footer";


function Home({image, head ,pgh}){
        return(
            <>
            <Navbar/>
            <section  className="house position-relative pb-5">
                <div className="container-fluid  mt">
                    <div className="position-relative">
                     <p className="line">
                        Innovation in Every Line,
                         Strength           
                        <span   className="teimg  ms-3 me-3"><img src="img.jpg"  /></span>
                          in <br/> Every Build
                    </p>
                </div>  
                <div className="pe-5 pt-5 mt-5 even">
                    <div className="d-flex">
                        <ul className="d-flex">
                        <li className="le">
                            <img src="m1.jpg"/>
                        </li>
                        <li className="le">
                            <img src="m2.jpg"/>
                        </li>
                        <li className="le">
                            <img src="m3.jpg"/>
                        </li>
                        <li className="le">
                            <img src="m4.jpg"/>
                        </li>
                    </ul>
                    <ul className="ms-3 mrgn1">
                        <li className="text-center le ell"><i class="fa-solid fa-ellipsis"></i></li>
                    </ul>
                    </div>
                    <span className="text-light not">Meet Our Team</span>
                </div>
                </div>
            </section>
            <section className="wth">
                <div className="row">
                    <div className="col-lg-7 its">
                        <h2 className="about mb-3">About Bliize</h2>
                        <p className="is">Blaze is a trailblazing architecture agency renowned for its innovative approach to design, where creativity meets functionality. From futuristic skyscrapers to timeless cultural landmarks, We specializes in crafting spaces that inspire and endure. Blaze pushes boundaries, transforming bold concepts into architectural masterpieces. Every project reflects a commitment to eco-conscious practices and sustainable solutions. Blaze believes architecture is personal.</p>
                        <div className="d-flex mt-5">
                            <button className="more">Discover More</button>
                            <div className="d-flex fq ms-4">
                                <a href="/">
                                    <button className="play"><i class="fa-solid fa-play"></i></button>
                                </a>
                                <p className="watch ms-3">Watch Videos</p>
                            </div>
                        </div>
                        <div>   
                             <Counter/>
                        </div>
                    </div>
                    <div className="col-lg-5 worry p-0 position-relative">
                        <div>
                            <img className="o1" src="o1.jpg"/>
                        </div>
                        <div className="abs position-absolute">
                            <img className="o2" src="o2.jpg"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wth1 mt-3">
                <div>
                    <h2 className="works">Our Works</h2>
                </div>
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
                <div className="text-center pro">
                    <button className="see">See All Projects
                    <span>
                        <img src="arrow.svg"/>
                    </span>
                </button>       
                </div>
            </section>
            <section className="fullcon">
               <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6 position-relative">
                    <div className="content1 position-absolute">
                        <h2 className="uk uk1 mb-2">Creating Landmark Spaces, One Blueprint at a Time</h2>
                        <span className="build">Cras nisl nibh commodo ullamcorper aliquet. Gravida orci laoreet eros platea curabitur scelerisque quis cras scelerisque. Fermentum mus et viverra purus nibh fusce integer. Aenean cursus quis pharetra vitae vel sit ac malesuada.</span>
                    </div>
                </div>
               </div>
            </section>
            <section className="d-flex container-fluid gp">
                <Col
                 image="c1.svg"
                 head="Custom Solutions"
                 pgh="Magnis lorem tinidunt eunamdictu mstlacus. Mattis risus vitae pretium viverra libero dapibus."
                />
                <Col
                 image="c2.svg"
                 head="Furniture & Decor"
                 pgh="Magnis lorem tinidunt eunamdictu mstlacus. Mattis risus vitae pretium viverra libero dapibus."
                />
                <Col
                 image="c3.svg"
                 head="Interior Design"
                 pgh="Magnis lorem tinidunt eunamdictu mstlacus. Mattis risus vitae pretium viverra libero dapibus."
                />
                <Col
                 image="c4.svg"
                 head="Design & Planning"
                 pgh="Magnis lorem tinidunt eunamdictu mstlacus. Mattis risus vitae pretium viverra libero dapibus."
                />
            </section>
            <section className="container-fluid mtb">
                <div className="row gappp">
                    <div className="col-lg-3 text-center">
                        <Counter1/>
                    </div>
                    <div className="col-lg-3 text-center">
                        <Counter2/>
                    </div>
                    <div className="col-lg-3 text-center">
                        <Counter3/>
                    </div>
                    <div className="col-lg-3 text-center">
                        <Counter4/>
                    </div>
                </div>
            </section>
            <section>
               <MySwiper/>
            </section>
            <section className="wth1">
                <h2 className="works team">Our Team</h2>
                <BootstrapSwiper/>
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
export default Home;