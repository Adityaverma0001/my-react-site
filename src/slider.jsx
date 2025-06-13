
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';

function MySwiper() {
  return (
    <div className="custom-swiper-container">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <section className="fullcon1">
                <div className="position-relative">
                    <div className="content2 position-absolute">
                        <div className='arr'>
                            <img src='q.svg'/>
                        <h3 className='ac mt-5'>Ac sollicitudin euismod ut luctus felis lacus sed pellentesque. Purus eget consectur massa amet.Hac diam suspendisse faucibus posuere dignissim magna condimentum tristique.</h3>
                        <div className='sl'>
                            <h4  className='blank'></h4>
                            <h4  className='blank1'></h4>
                        </div>
                        <div className='mt-5 ting'>
                            <h4 className='sa'>Leslie Alexander</h4>
                            <p className='mk'>Marketing Coordinator</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </SwiperSlide>
        <SwiperSlide>
                  <section className="fullcon1 change">
                <div className="position-relative">
                    <div className="content2 position-absolute">
                        <img src='q.svg'/>
                        <h3 className='ac mt-5'>Ac sollicitudin euismod ut luctus felis lacus sed pellentesque. Purus eget consectur massa amet.Hac diam suspendisse faucibus posuere dignissim magna condimentum tristique.</h3>
                        <div className='sl'>
                            <h4  className='blank'></h4>
                            <h4  className='blank1'></h4>
                        </div>
                        <div className='mt-5'>
                            <h4 className='sa'>Sarah Krause</h4>
                            <p className='mk'>Marketing Coordinator</p>
                        </div>
                    </div>
                </div>
            </section>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons (images) */}
      <img src="al.svg" alt="Prev" className="custom-prev nav-arrow" />
      <img src="ar.svg" alt="Next" className="custom-next nav-arrow" />
    </div>
  );
}



const projects = [
  {
    id: 1,
    title: "Robert Fox",
    desc: "Senior Architect",
    image: "rf.jpg",
  },
  {
    id: 2,
    title: "Benzamin Simon",
    desc: "Interior Designer",
    image: "bs.jpg",
  },
  {
    id: 3,
    title: "Harvard Bunion",
    desc: "Partner & CEO",
    image: "hb.jpg",
  },
  {
     id: 4,
    title: "Robert Fox",
    desc: "Senior Architect",
    image: "rf.jpg",
  },
  {
    id: 5,
    title: "Benzamin Simon",
    desc: "Interior Designer",
    image: "bs.jpg",
  },
  {
    id: 6,
    title: "Harvard Bunion",
    desc: "Partner & CEO",
    image: "hb.jpg",
  },
];

 function BootstrapSwiper() {
  return (
    <div className="container my-5">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        speed={1000} 
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className=" border-0 h-100">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title tt mt-2">{project.title}</h5>
                <p className="card-text">{project.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


const slides = [
  [
    "hx.png",
    "hx1.png",
    "hx2.png",
    "hx3.png",
    "hx4.png",
  ],
  [
    "hx.png",
    "hx1.png",
    "hx2.png",
    "hx3.png",
    "hx4.png",
  ],
  [
   "hx.png",
    "hx1.png",
    "hx2.png",
    "hx3.png",
    "hx4.png",
  ],
];

function Auto() {
  return (
    <div className="container-fluid">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        slidesPerView={1} 
        speed={3000} 
      >
        {slides.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="row g-3">
              {group.map((img, i) => (
                <div className="col-lg col-md-2" key={i}>
                  <img
                    src={img}
                    alt={`img-${i}`}
                    className="img-fluid rounded "
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


const images = [
 "hx.png", "hx1.png", "hx2.png", "hx3.png", "hx4.png",
  "hx.png", "hx1.png", "hx2.png", "hx3.png", "hx4.png"
];

function Slider() {
  return (
    <div className="container-fluid my-5">
      {/* <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={2000} // smooth sliding
        breakpoints={{
          0: { slidesPerView: 1 },     // Mobile
          577: { slidesPerView: 5 },   // Desktop
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`img-${index}`}
              className="img-fluid rounded "
            />
          </SwiperSlide>
        ))}
      </Swiper> */}
      <Swiper
  modules={[Autoplay]}
  loop={true}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  speed={2000} // smooth sliding
  breakpoints={{
    0: { slidesPerView: 1 },               // Mobile
    577: { slidesPerView: 3 },             // Tablets (577px - 768px)
    769: { slidesPerView: 5 },             // Desktop (769px and above)
  }}
>
  {images.map((img, index) => (
    <SwiperSlide key={index}>
      <img
        src={img}
        alt={`img-${index}`}
        className="img-fluid rounded"
      />
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
}












export {MySwiper,BootstrapSwiper,Auto , Slider} ;