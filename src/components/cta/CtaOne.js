import React from 'react';
import Link from 'next/link';
import BackgroundOne from '../../../public/assets/images/backgrounds/cta-v1-bg.png';

const CtaOne = () => {
    return (
        <>
            <section className="cta-one m-5">
                <div className="image-layer" style={{backgroundImage: `url(${BackgroundOne.src})`}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="cta-one__inner">
                                <div className="title">
                                    <h2> Call us to Take an Extraordinary Service!</h2>
                                    <div className="number">
                                        <p>Call: <a href="tel:180050033333">++019999999</a></p>
                                    </div>
                                </div>
                                <div className="button-box">
                                    <Link href="/contact" className="thm-btn">
                                        <span>Contact Us</span>
                                        <div className="liquid"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CtaOne;