import React, { useEffect } from "react";
import Link from "next/link";
// import BackgroundOne from '../../../public/assets/images/backgrounds/main-slider-v1-img1.jpg';
// import BackgroundTwo from '../../../public/assets/images/backgrounds/main-slider-v1-img2.jpg';
// import BackgroundThree from '../../../public/assets/images/backgrounds/main-slider-v1-img3.jpg';
import BackgroundOne from '../../../images_new/banner2.jpg';
import BackgroundTwo from '../../../images_new/banner2.jpg';
import BackgroundThree from '../../../images_new/banner2.jpg';
const HeroOne = () => {

    useEffect(() => {

        if ($('.main-slider-one__carousel').length) {
            $('.main-slider-one__carousel').owlCarousel({
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              loop: true,
              margin: 0,
              dots: false,
              nav: true,
              singleItem: true,
              smartSpeed: 500,
              autoplay: true,
              autoplayTimeout: 9000,
              navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right right"></span>'],
              responsive: {
                0: {
                  items: 1
                },
                600: {
                  items: 1
                },
                1024: {
                  items: 1
                }
              }
            });
        }
            
    }, []);

    return (
        <>
            <section className="main-slider-one">
                <div className="main-slider-one__carousel owl-carousel owl-theme">
                    {/* Start Main Slider One Single */}
                    <div className="main-slider-one__single">
                        <div className="top-shape"></div>
                        <div className="bottom-shape"></div>
                        <div className="image-layer" 
                        style={{backgroundImage: `url(${BackgroundOne.src})`}}
                        ></div>
                        <div className="container">
                            <div className="main-slider-one__content">
                                <div className="tagline">
                                    <p>Welcome to Service 2 Home. </p>
                                </div>
                                <div className="title">
                                    <h2>Examples of great cleaning <br /> that get it right.</h2>
                                </div>
                                <div className="text">
                                    <p>We will help you to feel better and enjoy every single day of <br />may be the fastest growing health.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/contact" className="thm-btn">
                                        <span>Discover Now</span>
                                        <div className="liquid"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider One Single */}

                    {/* Start Main Slider One Single */}
                    <div className="main-slider-one__single">
                        <div className="top-shape"></div>
                        <div className="bottom-shape"></div>
                        <div className="image-layer" style={{backgroundImage: `url(${BackgroundTwo.src})`}}>
                        </div>
                        <div className="container">
                            <div className="main-slider-one__content">
                                <div className="tagline">
                                    <p>Welcome to Service 2 Home.</p>
                                </div>
                                <div className="title">
                                    <h2>Examples of great cleaning <br /> that get it right.</h2>
                                </div>
                                <div className="text">
                                    <p>We will help you to feel better and enjoy every single day of <br />may be the fastest growing health.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/contact" className="thm-btn">
                                        <span>Discover Now</span>
                                        <div className="liquid"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider One Single */}

                    {/* Start Main Slider One Single */}
                    <div className="main-slider-one__single">
                        <div className="top-shape"></div>
                        <div className="bottom-shape"></div>
                        <div className="image-layer" style={{backgroundImage: `url(${BackgroundThree.src})`}}>
                        </div>
                        <div className="container">
                            <div className="main-slider-one__content">
                                <div className="tagline">
                                    <p>Welcome to Service 2 Home.</p>
                                </div>
                                <div className="title">
                                    <h2>Examples of great cleaning <br /> that get it right.</h2>
                                </div>
                                <div className="text">
                                    <p>We will help you to feel better and enjoy every single day of <br />may be the fastest growing health.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/contact" className="thm-btn">
                                        <span>Discover Now</span>
                                        <div className="liquid"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider One Single */}
                </div>
            </section>
        </>
    )
}

export default HeroOne;