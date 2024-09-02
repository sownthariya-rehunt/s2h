import React, { useEffect } from 'react';
import { TestimonialOneData } from '@/data/testimonial';
import BackgroundOne from '../../../public/assets/images/backgrounds/testimonials-v1-bg.jpg';

const TestimonialOne = () => {

    useEffect(() => {

      if ($(".testimonials-one__carousel").length) {
        $(".testimonials-one__carousel").owlCarousel({
          loop: true,
          margin: 30,
          nav: false,
          smartSpeed: 500,
          autoHeight: false,
          autoplay: true,
          dots: true,
          autoplayTimeout: 10000,
          navText: [
            '<span class="icon-left-arrow"></span>',
            '<span class="icon-right-arrow"></span>'
          ],
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            800: {
              items: 2
            },
            1024: {
              items: 2
            },
            1200: {
              items: 3
            }
          }
        });
      }
          
    }, []);

    return (
        <>
            <section className="testimonials-one pd-120-0-120">
                <div className="testimonials-one__bg" style={{backgroundImage: `url(${BackgroundOne.src})`}}></div>
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Testimonials</span>
                        <h2 className="section-title__title">Clients Feedback About Their <br /> Experience With Us</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="testimonials-one__carousel owl-carousel owl-theme owl-dot-style1">
                                {TestimonialOneData.map((item, i) => (
                                  <div key={i} className="testimonials-one__single">
                                      <div className="testimonials-one__single-icon">
                                          <span className="icon-left-quote"></span>
                                      </div>
                                      <div className="testimonials-one__single-text">
                                          <p>{item.description}</p>
                                      </div>
                                      <div className="client-info">
                                          <div className="img">
                                              <img src={item.image} alt={item.alt} />
                                          </div>
                                          <div className="text">
                                              <h2>{item.name}</h2>
                                              <p>{item.position}</p>
                                          </div>
                                      </div>
                                  </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialOne;