import React, { useEffect, useState } from "react";


function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 1980) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 0); 

    return () => clearInterval(interval); 
  }, []); 

  return (
      <p className="count"> {count}</p>
  );
}



function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 1000) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 0); 

    return () => clearInterval(interval); 
  }, []); 

  return (
      <p className="count"> {count}+</p>
  );
}


function Footer(){
return(
  <section className="bg-dark pt-5 pb-4"> 
  <div className="container-fluid">
    <div className="row our">
      <div className="col-lg-3 one1">
        <img className="campr" src="camper.png"/>
      </div>
      <div className="col-lg-3 one2">
        <h2 className="text-light link">Useful Links</h2>
        <ul className="text-light list-unstyled  lst">
          <li className="mt-4">Customer Support</li>
          <li className="mt-3  ">Privacy & Policy</li>
          <li className="mt-3">Our Story</li>
          <li className="mt-3">Be Our Partner</li>
        </ul>
      </div>
      <div className="col-lg-3 one3">
        <h2 className="text-light link">Contact</h2>
        <ul className="text-light list-unstyled  lst">
          <li className="mt-4"><span className="t">T : </span>1-634-567-34</li>
          <li className="mt-3  "><span className="t">E : </span>contact@traveltourtheme.co</li>
        </ul>
        <ul className="text-light list-unstyled d-flex its">
          <li><i class="fa-brands fa-facebook-f"></i></li>
          <li><i class="fa-brands fa-x-twitter"></i></li>
          <li><i class="fa-brands fa-pinterest-p"></i></li>
          <li><i class="fa-brands fa-tiktok"></i></li>
        </ul>
      </div>
      <div className="col-lg-3 one4">
        <h2 className="text-light link">Pay Safely With Us</h2>
        <p className="t pe-2 mt-4">The payment is encrypted and transmitted securely with an SSL protocol.</p>
        <ul className="text-light list-unstyled d-flex paypal">
          <li><i class="fa-brands fa-cc-paypal"></i></li>
          <li><i class="fa-brands fa-cc-visa"></i></li>
          <li><i class="fa-brands fa-cc-mastercard"></i></li>
          <li><i class="fa-brands fa-cc-amex"></i></li>
        </ul>
      </div>
    </div>
    <div className="d-flex justify-content-between mt-5 pt-3">
      <p className="and">Copyright © 2025 GoodLayers. All Rights Reserved.</p>
      <ul className="text-light list-unstyled d-flex no">
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Sitemap</li>
      </ul>
    </div>
  </div>
  </section>
)
}









export {Counter, Timer, Footer};
