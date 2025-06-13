import { Navbar1 } from "./navbar";
import { Auto,Slider } from "./slider";
import Footer from "./footer";

function Blog(){
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
                Blog
                </button>
            </div>
            <div> 
                <h1 className="plan mt-4">Latest News Update</h1>
            </div>
        </section>
        <section className="container mt-5">
          <div className="gpp">
            <div className="wdth pb-3">
            <img className="blogi" src="blog1.jpg"/>
            <div className="mt-4">
                <ul className="d-flex ps-4">
                    <li className="list-unstyled admin">By:admin</li>
                    <li className="ms-5 admin"> Date 25 Sep 2025</li>
                </ul>
            </div>
            <h3 className="end ps-4">Personalized Interiors, Endless Possibilities.</h3>
            <p className="sum mt-3 mb-4 ps-4">Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.</p>
            <p className="more1 ps-4">Read More..</p>
          </div>
          <div className="wdth mb-5 mt-5 pb-3">
            <img className="blogi" src="blog2.jpg"/>
            <div className="mt-4">
                <ul className="d-flex ps-4">
                    <li className="list-unstyled admin">By:admin</li>
                    <li className="ms-5 admin"> Date 25 Sep 2025</li>
                </ul>
            </div>
            <h3 className="end ps-4">Bringing Style to Life, One Room at a Time.</h3>
            <p className="sum mt-3 mb-4 ps-4">Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.</p>
            <p className="more1 ps-4">Read More..</p>
          </div>
          <div className="wdth  pb-3">
            <img className="blogi" src="blog3.jpg"/>
            <div className="mt-4">
                <ul className="d-flex ps-4">
                    <li className="list-unstyled admin">By:admin</li>
                    <li className="ms-5 admin"> Date 25 Sep 2025</li>
                </ul>
            </div>
            <h3 className="end ps-4">Designing Spaces Youll Love Coming Home To.</h3>
            <p className="sum mt-3 mb-4 ps-4">Lorem sum has been the industry standard dummy of the text ever since the scrambled it to make.</p>
            <p className="more1 ps-4">Read More..</p>
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
export default Blog;