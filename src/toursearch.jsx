import Navbar from "./navbar";
import { Footer } from "./timer";


function Toursearch(){
    
    return(
      <>
      <Navbar/>
      <section className="pt-5 mb-5 pb-5 text-center byy">
        <div className="container">
          <h2 className="desti pt-5">Search Tours</h2>
        </div>
      </section>
      <section className="container mb-5">
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
        <div className="col-lg-4 ink">
            <img className="mimg mb-3" src="o2.jpg"/>
            <div  className="ory">
              <span className="star  d-flex ">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p className="review"> (1 Review)</p>
            </span>
            <h4 className=" mb-3 du">Camping Tour Mount Rainier National Park, Washington </h4>
            <h6 className="mb-2 text-muted">4 days 3 night</h6>
            <h6 className="text-muted text-bold">Availability : Jul - Dec</h6>
            <h5 className="from text-muted">From <span className="clr">$3,500</span></h5>
            </div>
          </div>
          <div className="col-lg-4 ink">
            <img className="mimg mb-3" src="o3.jpg"/>
            <div  className="ory">
              <span className="star  d-flex ">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p className="review"> (1 Review)</p>
            </span>
            <h4 className=" mb-3 du">Adventure Camping Tour Package, Himachal Pradesh, Rampur Bushahar</h4>
            <h6 className="mb-2 text-muted">7 days</h6>
            <h6 className="text-muted text-bold">Availability : Jan - Dec</h6>
            <h5 className="from text-muted">From <span className="clr">$4,500</span></h5>
            </div>
          </div>
          <div className="col-lg-4 ink">
            <img className="mimg mb-3" src="o4.jpg"/>
            <div  className="ory">
               <span className="star  d-flex ">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p className="review"> (1 Review)</p>
            </span>
            <h4 className=" mb-3 du">Tour of Meteora & Albania from Corfu</h4>
            <h6 className="mb-2 text-muted">6 days 5 night</h6>
            <h6 className="text-muted text-bold">Availability : Jan - Aug</h6>
            <h5 className="from text-muted">From <span className="clr">$5,300</span></h5>
            </div>
        </div>
      </div>
     </section>      
     <Footer/>
      </>
    )
  }
  


  export  default Toursearch;
