import Navbar from "./navbar";
import { Footer } from "./timer";



function Tourlist(){
    
    return(
      <>
      <Navbar/>
      <section className="pt-5 pb-5 text-center byy">
        <div className="container pt-5">
          <h2 className="desti">Destinations</h2>
        <p className="and7">Explore Tours By Destinations</p>
        </div>
      </section>
      <section className="wth">
      <div>
        <div>
          <ul className="d-flex list-unstyled my mb-0">
            <li  className="srimage too many position-relative">
              <span className="overlay"/>
              <img src="f1.jpeg"/>
              <div className="turn zero">
               <h2 className="text-light">Backpacking Trips</h2>
              <p>5 tours</p>
              </div>
            </li>
            <li  className="srimage1 too many  position-relative">
              <span className="overlay"/>
               <img src="f2.jpeg"/>
               <div className="turn zero">
                 <h2 className="text-light">Basecamp Tours</h2>
              <p>6 tours</p>
               </div>
            </li>
            <li  className="srimage2 too many position-relative">
              <span className="overlay"/>
               <img src="f3.jpeg"/>
               <div className="turn zero">
                 <h2 className="text-light">Family Camping</h2>
              <p>8 tours</p>
               </div>
            </li>
          </ul>
          <ul className="d-flex list-unstyled my mb-0">
            <li  className="srimage too many position-relative">
              <span className="overlay"/>
              <img src="f4.jpeg"/>
              <div className="turn zero">
               <h2 className="text-light">Glamping</h2>
              <p>5 tours</p>
              </div>
            </li>
            <li  className="srimage1 too many  position-relative">
              <span className="overlay"/>
               <img className="noimg" src="mo.jpeg"/>
               <div className="turn zero">
                 <h2 className="text-light">Trekking</h2>
              <p>6 tours</p>
               </div>
            </li>
            <li  className="srimage2 too many position-relative">
              <span className="overlay"/>
               <img className="noimg" src="no.jpeg"/>
               <div className="turn zero">
                 <h2 className="text-light">Winter Camping</h2>
              <p>5 tours</p>
               </div>
            </li>
          </ul>
        </div>
      </div>
     </section>
      <Footer/>
      </>
    )
  }
  


  export  default Tourlist;
  