import React from 'react';
import Link from 'next/link';

const FooterOne = () => {
    return (
        <>

            <footer className="footer-one">
                <div className="footer-one__bg" style={{backgroundImage: `url(/assets/images/backgrounds/con2.jpg)`}}></div>
                <div className="footer-one__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-one__top-wrapper">
                                    <div className="row">
                                        {/* Start Footer Widget Column */}
                                        <div className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                            <div className="footer-widget__column footer-widget__about">
                                                <div className="footer-widget__about-logo bg-white rounded-3 p-3">
                                                    <Link href="/"><img src="/assets/images/resources/logo_header200x44.png" alt="" /></Link>
                                                </div>
                                                <p className="footer-widget__about-text">We help businesses maximize their
                                                    online presence with a personalized approach to digital marketing.</p>

                                                <div className="social-link">
                                                    <ul>
                                                    
                                                        <li><a href="#"><span className="icon-facebook"></span></a></li>
                                                        <li><a href="#"><i className="fab fa-tiktok"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                                                        <li><a href="#"><span className="icon-instagram"></span></a></li>
                                                        
                                                    </ul>
                                                </div> 

                                            </div>
                                        </div>
                                        {/* End Footer Widget Column */}

                                        {/* Start Footer Widget Column */}
                                        <div className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                            <div className="footer-widget__column footer-widget__links mar-l">
                                                <h2 className="footer-widget__title">Useful Links</h2>
                                                <ul className="footer-widget__links-list">
                                                    <li className="footer-widget__links-list-item"><Link href="/about">About</Link></li>
                                                    <li className="footer-widget__links-list-item"><Link href="/service-one">Services</Link></li>
                                                    <li className="footer-widget__links-list-item"><Link href="/testimonial">Testimonials</Link></li>
                                                    {/* <li className="footer-widget__links-list-item"><Link href="/team">Team</Link></li> */}
                                                    <li className="footer-widget__links-list-item"><Link href="/contact">Contact</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Footer Widget Column */}

                                        {/* Start Footer Widget Column */}
                                        <div className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.5s">
                                            <div className="footer-widget__column footer-widget__links mrt-60">
                                                <h2 className="footer-widget__title">Our Service</h2>
                                                <ul className="footer-widget__links-list">
                                                    <li className="footer-widget__links-list-item"><Link href="/ac-service">AC Service</Link></li>
                                                    <li className="footer-widget__links-list-item"><Link href="/window-cleaning">Plumbing</Link></li>
                                                    <li className="footer-widget__links-list-item"><Link href="/office-cleaning">Ladies Saloon</Link></li>
                                                    <li className="footer-widget__links-list-item"><Link href="/commercial-cleaning">Home Appliance Re-pair</Link></li>
                                                    <li className="footer-widget__links-list-item"><Link href="/house-cleaning">Cleaning</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Footer Widget Column */}

                                        {/* Start Footer Widget Column */}
                                        {/* <div className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp" data-wow-delay="0.7s">
                                            <div className="footer-widget__column footer-widget__gallery mrt-60">
                                                <h2 className="footer-widget__title">Our Gallery</h2>
                                                <ul>
                                                    <li className="footer-widget__gallery-single">
                                                        <div className="img-box">
                                                            <img src="/assets/images/footer/footer-v1-img1.png" alt="" />
                                                            <div className="overlay-icon">
                                                                <Link href="/"><span className="icon-link"></span></Link>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="footer-widget__gallery-single">
                                                        <div className="img-box">
                                                            <img src="/assets/images/footer/footer-v1-img2.png" alt="" />
                                                            <div className="overlay-icon">
                                                                <Link href="/"><span className="icon-link"></span></Link>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="footer-widget__gallery-single">
                                                        <div className="img-box">
                                                            <img src="/assets/images/footer/footer-v1-img3.png" alt="" />
                                                            <div className="overlay-icon">
                                                                <Link href="/"><span className="icon-link"></span></Link>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="footer-widget__gallery-single">
                                                        <div className="img-box">
                                                            <img src="/assets/images/footer/footer-v1-img4.png" alt="" />
                                                            <div className="overlay-icon">
                                                                <Link href="/"><span className="icon-link"></span></Link>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="footer-widget__gallery-single">
                                                        <div className="img-box">
                                                            <img src="/assets/images/footer/footer-v1-img5.png" alt="" />
                                                            <div className="overlay-icon">
                                                                <Link href="/"><span className="icon-link"></span></Link>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="footer-widget__gallery-single">
                                                        <div className="img-box">
                                                            <img src="/assets/images/footer/footer-v1-img6.png" alt="" />
                                                            <div className="overlay-icon">
                                                                <Link href="/"><span className="icon-link"></span></Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> */}
                                        {/* End Footer Widget Column */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Start Footer One Bottom */}
                <div className="footer-one__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-one__bottom-inner">
                                    <div className="footer-one__bottom-text">
                                        <p>Copyright © 2023 <Link href="/">Service 2 Home</Link>. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Footer One Bottom */}
            </footer>
            
        </>
    )
}

export default FooterOne;