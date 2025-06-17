import Navbar from "./navbar";
import { Footer } from "./timer";

function Pages(){
    
    return(
      <>
      <Navbar/>
      <section className="bg">
      <h1 className="explore1">404</h1>
      <h1 className="new1">Page Not Found</h1>
      <p  className="cover1 mt-2">Sorry, we couldn't find the page you're looking for.</p>
      <div>
        <input className="type1" placeholder="Type Keywords..."/>
      </div>
     </section>
      <Footer/>
      </>
    )
  }
  


  export  default Pages;
    