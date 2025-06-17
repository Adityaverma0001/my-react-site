import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Counter,Timer,Footer} from "./timer";

function Home(props){
    
    return(
    <>
     <Navbar/>
     <section className="bg">
      <h1 className="explore">Explore</h1>
      <h1 className="new">The New World</h1>
      <p  className="cover">Discover and book tent camping, RV parks, cabins, treehouses, and glamping.</p>
      <button className="dis">Discovers Tours</button>
     </section>
     <section className="container four">
      <div className="left"> 
        <h2 className="word">Keywords</h2>
        <input className="input" placeholder="Type Your Keywords"/>
      </div>
      <div className="asia">
        <h2 className="word">Destination</h2>
        <select className="trans">
          <option>Any</option>
          <option>Asia</option>
          <option>Australia</option>
          <option>Blue Lagoon Campgrounds</option>
          <option>Egypt</option>
          <option>Scandinavia</option>
          <option>South Africa</option>
          <option>United States</option>
          <option>Western Europe</option>
        </select>
      </div>
      <div className="day">
        <h2 className="word">Duration</h2>
        <select className="trans">
          <option>Any</option>
          <option>1 Day Tour</option>
          <option>2-4 Days Tour</option>
          <option>5-7 Days Tour</option>
          <option>7+ Days Tour</option>
        </select>
      </div>
      <div className="search">
         <i class="fa-solid fa-magnifying-glass"></i>
          Search Now
      </div>
     </section>
     <section className="very">
      <div className="container ing d-flex">
        <div className="row worry">
          <div className="col-lg-4 text-center ps-2 pe-2 plus">
            <img className="icon" src="icon1.png"/>
            <h2 className="heading mt-4">15 Years of Experiences</h2>
            <p className="graph mt-3">Host our community of good-natured campers, glampers, and RV travelers on your land or at your cabin.</p>
          </div>
          <div className="col-lg-4 text-center ps-2 pe-2 plus">
            <img className="icon" src="icon2.png"/>
            <h2 className="heading mt-4">200+ Camps To Visit</h2>
            <p className="graph mt-3">Host our community of good-natured campers, glampers, and RV travelers on your land or at your cabin.</p>
          </div>
          <div className="col-lg-4 text-center ps-2 pe-2 plus">
            <img className="icon" src="icon3.png"/>
            <h2 className="heading mt-4">Big Community</h2>
            <p className="graph mt-3">Host our community of good-natured campers, glampers, and RV travelers on your land or at your cabin.</p>
          </div>
        </div>
      </div>
     </section>
     <section className="container all hell d-flex justify-content-between mt-4 mb-4">
      <div>
        <h1 className="fs-3 by fw-bold">By Activities</h1>
      </div>
      <div>
        <p className="fs-5 fw-700 view">View All Activities</p>
      </div>
     </section>
     <section className="wth">
      <div>
        <div>
          <ul className="d-flex list-unstyled my">
            <li  className="srimage too ca position-relative">
              <span className="overlay"/>
              <img src="f1.jpeg"/>
              <div className="turn">
               <h2 className="text-light trak">Family Camping</h2>
              <p>5 tours</p>
              </div>
            </li>
            <li  className="srimage1 too  position-relative non">
              <span className="overlay"/>
               <img src="f2.jpeg"/>
               <div className="turn">
                 <h2 className="text-light trak">Glamping</h2>
              <p>6 tours</p>
               </div>
            </li>
            <li  className="srimage2 too position-relative non">
              <span className="overlay"/>
               <img src="f3.jpeg"/>
               <div className="turn">
                 <h2 className="text-light trak">Trekking</h2>
              <p>8 tours</p>
               </div>
            </li>
            <li  className="srimage3 too position-relative non">
              <span className="overlay"/>
               <img src="f4.jpeg"/>
               <div className="turn">
                 <h2 className="text-light trak">Winter Camping</h2>
              <p>6 tours</p>
               </div>
            </li>
          </ul>
        </div>
      </div>
     </section>
      <section className="container kl hell d-flex justify-content-between mt-4 mb-4">
      <div>
        <h1 className="fs-3 by fw-bold">Our Popular Tours</h1>
      </div>
      <div>
        <p className="fs-5 fw-700 view">View All Tours</p>
      </div>
     </section>
     <section className="container">
      <div className="row worry">
        <div className="col-lg-4 ink">
          <div className="position-relative abs">
            <img className="mimg mb-3" src="m1.jpg"/>
            <span className="position-absolute tour">Popular Tour</span>
          </div>
          <div className="ory">
            <span className="star  d-flex ">
            <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <p className="review"> (1 Review)</p>
          </span>
          <h4 className=" mb-3 du">Munich Springfest Camping</h4>
          <h6 className="mb-2 text-muted">3 days</h6>
          <h6 className="text-muted text-bold">Munich, Germany</h6>
          <h5 className="from text-muted">From <span className="three">$3,900 </span><span className="clr"> $3,800</span></h5>
          </div>
        </div>
        <div className="col-lg-4 ink">
          <div className="position-relative abs">
            <img className="mimg mb-3" src="m2.jpg"/>
            <span className="position-absolute tour">Popular Tour</span>
          </div>
          <div className="ory">
            <span className="star  d-flex ">
            <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <p className="review"> (2 Review)</p>
          </span>
          <h4 className=" mb-3 du">9 Days Tour du Mont Blanc Camping Trek</h4>
          <h6 className="mb-2 text-muted">9 days 8 night</h6>
          <h6 className="text-muted text-bold">Chamonix, France</h6>
          <h5 className="from text-muted">From <span className="three">$6,300 </span><span className="clr"> $5,800</span></h5>
          </div>
        </div>
        <div className="col-lg-4 ink">
          <div className="position-relative abs">
            <img className="mimg mb-3" src="m3.jpg"/>
            <span className="position-absolute tour">Popular Tour</span>
          </div>
          <div className="ory">
            <span className="star  d-flex ">
            <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <p className="review"> (1 Review)</p>
          </span>
          <h4 className=" mb-3 du">3 Days Camping Tour du Mont Blanc </h4>
          <h6 className="mb-2 text-muted">3 days</h6>
          <h6 className="text-muted text-bold">Laon, France</h6>
          <h5 className="from text-muted">From <span className="clr">$5,500</span></h5>
          </div>
        </div>
      </div>
     </section>
     <section className="container hell d-flex justify-content-between mt-4 mb-4">
      <div>
        <h1 className="fs-3 by fw-bold">New Tours</h1>
      </div>
      <div>
        <p className="fs-5 fw-700 view">View All Tours</p>
      </div>
     </section>
     <section className="container ">
      <div className="row worry">
        <div className="col-lg-4 ink">
            <img className="mimg mb-3" src="m4.jpg"/>
          <div className="ory">
            <span className="star  d-flex ">
            <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <p className="review"> (1 Review)</p>
          </span>
          <h4 className=" mb-3 du">Courmayeur – Rifugio Giorgio Bertone 7 Days 6 Night</h4>
          <h6 className="mb-2 text-muted">7 days 6 night</h6>
          <h6 className="text-muted text-bold">Courmayeur, Aosta Valley, Italy</h6>
          <h5 className="from text-muted">From <span className="three">$5,100</span><span className="clr"> $4,900</span></h5>
          </div>
        </div>
        <div className="col-lg-4 ink">
            <img className="mimg mb-3" src="m5.jpeg"/>
          <div  className="ory">
            <span className="star  d-flex ">
            <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <p className="review"> (1 Review)</p>
          </span>
          <h4 className=" mb-3 du">5 Days Vivonne Bay Campground, Kangaroo Island, South Australia</h4>
          <h6 className="mb-2 text-muted">5 days 4 night</h6>
          <h6 className="text-muted text-bold">Vivonne Bay SA, Australia</h6>
          <h5 className="from text-muted">From<span className="clr"> $3,900</span></h5>
          </div>
        </div>
        <div className="col-lg-4 ink">
            <img className="mimg mb-3" src="m6.jpg"/>
          <div className="ory">
            <span className="star  d-flex ">
            <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <p className="review"> (1 Review)</p>
          </span>
          <h4 className=" mb-3 du">Walker Creek Campground, Litchfield, Northern Territory </h4>
          <h6 className="mb-2 text-muted">3 days 2 night</h6>
          <h6 className="text-muted text-bold">California, USA</h6>
          <h5 className="from text-muted">From <span className="clr">$3,200</span></h5>
          </div>
        </div>
      </div>
     </section>
     <section className="wth overflow-hidden   mt-5">
      <div className="wavy">
         <div className="row">
            <div className="col-lg-6 nta"></div>
            <div className="col-lg-6 way   pt-4 pe-5">
              <h2 className="to">Camper is the best way to find camping tours. Let’s make the most memorable adventures.</h2>
              <p className="an mt-4">Camper Tour is an incredible way to have an adventurous outdoor experience of world renowned national parks and wilderness destinations while hiking with only a light daypack and sleeping soundly in comfortable, vehicle-accessible camps.</p>
              <div className="d-flex coun  mt-4">
                <div className="w-50 trip">
                  <div className="lt">
                     <img className="click ps-2" src="w1.jpg"/>
                  <Counter/>
                  </div>
                  <h4 className="trip">The First Trip We Operated</h4>
                  <p className="in">We are in this industries for more than 40 year!</p>
                </div>
                <div className="w-50 trip">
                  <div className="lt">
                    <img className="click ps-2" src="map.png"/>
                  <Timer/>
                  </div>
                  <h4 className="trip">Locations Worldwide</h4>
                  <p className="in">With more than 1000 locations for your choices</p>
                </div>
              </div>
           </div>
          </div>
        </div>
     </section>
     <section className="container-fluid notav mb-5">
      <div className="row wow">
        <div className="col ok">
          <img className="w-100" src="g1.png"/>
        </div>
        <div className="col ok">
          <img className="w-100" src="g2.png"/>
        </div>
        <div className="col ok">
          <img className="w-100" src="g3.png"/>
        </div>
        <div className="col ok">
          <img className="w-100" src="g4.png"/>
        </div>
        <div className="col ok  ">
          <img className="w-100" src="g5.png"/>
        </div>
      </div>
     </section>
     <section className="container hell d-flex justify-content-between mt-5 mb-5">
      <div>
        <h1 className="fs-3 by fw-bold">Get the Latest News</h1>
      </div>
      <div>
        <p className="fs-5 fw-700 view">View All Tours</p>
      </div>
     </section>
     <section className="srt">
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
          </div>
      </div>
     </section>
     <section className="container mrgn">
      <div className="dicover mb-5">
        <h1 className="range">We offer tours in a range of locations</h1>
        <p className="take mt-3">Our mountain tours take you to the highest peaks, where you can witness stunning vistas and enjoy the crisp mountain air. Our beach tours, on the other hand, offer a chance to relax and unwind on the sandy shores.</p>
        <button className="dis mt-4">Discovers Tours</button>
      </div>
     </section>
     <Footer/>
    </>
    )
  }
  


  export  default Home;
  