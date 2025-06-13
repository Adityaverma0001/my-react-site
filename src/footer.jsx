


function Footer(){
    return(
        <>
        <section className="bd">
            <div className="container-fluid">
                <div className="row hac">
                <div className="col-lg-3 com">
                    <img src="bliize.svg"/>
                    <p className="nec">Elit commodo nec urna erat morbi at hac turpis aliquam. In tristique elit nibh turpis. Lacus volutpat ipsum convallis tellus pellentesque etiam.</p>
                    <ul className="d-flex linkdin face mt-4">
                        <li><i class="fa-brands fa-facebook-f"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li><i class="fa-brands fa-linkedin-in"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
                <div className="col-lg-3 com">
                    <h2 className="con">Contact</h2>
                    <p className="nec  mt-5 mb-2">bliize@gmail.com</p>
                    <p className="nec mt-0 mb-2">+(208) 555-0112</p>
                    <p className="nec mb-2 mt-0">4517 Washington Ave.</p>
                    <p className="mt-0 nec">Manchter, Kentucky 495</p>
                </div>
                <div className="col-lg-3 com">
                    <h2 className="con">Quick Link</h2>
                    <p className="nec  mt-5 mb-2">About Us</p>
                    <p className="nec mt-0 mb-2">Services</p>
                    <p className="nec mb-2 mt-0">Projects</p>
                    <p className="nec mb-2 mt-0">Blog</p>
                    <p className="nec mb-2 mt-0" >Contact</p>
                </div>
                <div className="col-lg-3 com d-grid">
                     <h2 className="con">Newsletter</h2>
                     <input className="email mt-5" placeholder="Your Email..." />
                     <button className="sub mt-4">Subscribe</button>
                </div>
            </div>
            </div>
        </section>
        <section className="just">
            <div className="container-fluid pt-4 pb-4 d-flex justify-content-between notone">
                <p className="m-0 copy">Copyright © 2025 Bliize. All Rights Reserved. </p>
                <ul className="policy d-flex">
                    <li>Privacy & Policy</li>
                    <li>Terms</li>
                    <li>About us</li>
                    <li>Login</li>
                </ul>
            </div>
        </section>
        </>
    )
}


export default Footer;