import Navbar from "./navbar";
import { Footer } from "./timer";


function Blog(){
    
    return(
      <>
      <Navbar/>
            <section className="pt-5 pb-5 text-center byy">
        <div className="container pt-5">
          <h2 className="desti">Blog 3 Columns</h2>
        <p className="and7">news & updates</p>
        </div>
      </section>
      <section>
      <div className="container  ">
          <div className="row p-0 worry">
            <div className="col-lg-4 ink">
              <div className="overflow-hidden">
                <img className="thr" src="h3.jpg"/>
              </div>
              <div className="pt-4 ps-4 back pb-5">
                <p className="idol mt-1 mb-2">March 10, 2023 •  Jane Smith</p>
                <h4 className="tips  mt-3">Tips for a Safe and Enjoyable <span className="arrow ps-3 pe-3"><i class="fa-solid fa-arrow-right"></i></span> Tour</h4>
                <div className="d-flex mt-4">
                  <span className="camp">Camping</span>
                  <span className="camp ms-3">Travel</span>
               </div> 
              </div>
            </div>
            <div className="col-lg-4 ink">
              <div className="overflow-hidden">
                <img className="thr" src="h2.jpeg"/>
              </div>
              <div className="pt-4 ps-4 back pb-5">
                <p className="idolmt-1 mb-2">March 10, 2023 •  Jane Smith</p>
                <h4 className="tips mt-3 ">A Tour of the Best High Altitude <span className="arrow ps-3 pe-3"><i class="fa-solid fa-arrow-right"></i></span> Campsites</h4>
                <div className="d-flex mt-4">
                  <span className="camp">Camping</span>
                  <span className="camp ms-3">Travel</span>
               </div> 
              </div>
            </div>
            <div className="col-lg-4 ink">
              <div className="overflow-hidden">
                <img className="thr" src="h1.jpg"/>
              </div>
              <div className="pt-4 ps-4 back pb-5">
                <p className="idol mt-1 mb-2">March 10, 2023 •  Jane Smith</p>
                <h4 className="tips  mt-3">How to Pack for Comfort and <span className="arrow ps-3 pe-3"><i class="fa-solid fa-arrow-right"></i></span> Convenience</h4>
                <div className="d-flex mt-4">
                  <span className="camp">Camping</span>
                  <span className="camp ms-3">Travel</span>
               </div> 
              </div>
            </div>
            <div className="col-lg-4 ink">
              <div className="overflow-hidden">
                <img className="thr" src="i1.jpg"/>
              </div>
              <div className="pt-4 ps-4 back pb-5">
                <p className="idol mt-1 mb-2">March 10, 2023 •  Jane Smith</p>
                <h4 className="tips  mt-3"> Luxury Camping Tours for the<span className="arrow ps-3 pe-3"><i class="fa-solid fa-arrow-right"></i></span> Adventurous Traveler</h4>
                <div className="d-flex mt-4">
                  <span className="camp">Camping</span>
                  <span className="camp ms-3">Travel</span>
               </div> 
              </div>
            </div>
            <div className="col-lg-4 ink">
              <div className="overflow-hidden">
                <img className="thr" src="i2.jpg"/>
              </div>
              <div className="pt-4 ps-4 back pb-5">
                <p className="idol mt-1 mb-2">March 10, 2023 •  Jane Smith</p>
                <h4 className="tips  mt-3"> How to Plan an Affordable Tour<span className="arrow ps-3 pe-3"><i class="fa-solid fa-arrow-right"></i></span> </h4>
                <div className="d-flex mt-4">
                  <span className="camp">Camping</span>
                  <span className="camp ms-3">Travel</span>
               </div> 
              </div>
            </div>
            <div className="col-lg-4 mb-4 ink">
              <div className="overflow-hidden">
                <img className="thr" src="i3.jpg"/>
              </div>
              <div className="pt-4 ps-4 back pb-5">
                <p className="idol mt-1 mb-2">March 10, 2023 •  Jane Smith</p>
                <h4 className="tips  mt-3"> A Tour of the Best High Altitude<span className="arrow ps-3 pe-3"><i class="fa-solid fa-arrow-right"></i></span> Campsites</h4>
                <div className="d-flex mt-4">
                  <span className="camp">Camping</span>
                  <span className="camp ms-3">Travel</span>
               </div> 
              </div>
            </div>
          </div>
      </div>
     </section>
      <Footer/>
      </>
    )
  }
  


  export  default Blog;
  