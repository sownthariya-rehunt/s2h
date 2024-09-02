import React from 'react';
import Link from 'next/link';

const OfficeCleaning = () => {
    return (
        <>
            <section className="service-details">
                <div className="container">
                    <div className="service-details__top">
                        <div className="row">
                            <div className="col-xl-4 col-lg-8 order-2">
                            <div className="service-details__sidebar">
                  <h2 className="service-details__sidebar-title">
                    All Service
                  </h2>
                  <ul className="service-details__sidebar-list">
                                    <li class="service-details__sidebar-list-item"><Link href="/" class="active">Ac Service</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/window-cleaning">Plumbing Service</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/commercial-cleaning">Home Appliance Re-pair</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/office-cleaning">Ladies Saloon</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/house-cleaning"> Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/car-cleaning">Car Wash Service</Link></li>                                    </ul>
                </div>
                            </div>

                            <div className="col-xl-8 order-1">
                                <div className="service-details__top-img">
                                    <img src="/assets/images/resources/parlor.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-details__bottom">
            <h2 class="service-details__bottom-title">Ladies' Salon Services</h2>
            <div class="service-details__bottom-text1">
              <p>
              At Service 2 Home, we understand the importance of looking and feeling your best. Our professional salon services are designed to enhance your beauty and boost your confidence. Whether you're looking for a fresh haircut, a vibrant hair Colour, or pampering nail treatments, our skilled stylists and technicians are here to provide exceptional services tailored to your needs.              </p>
            </div>
            <div class="service-details__bottom-text2">
              <p>
              We offer a wide range of services, including expert hair cutting and Colouring, specialized keratin treatments, and luxurious nail care. Our goal is to ensure that you leave our salon looking and feeling fabulous.              </p>
            </div>
            <div class="service-details__bottom-text3">
              <h1 className="m-4 text-center">Hair Cutting & Colouring</h1>
              <div class="row">
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                  {/* public/assets/images/resources */}
                    <img
                      src="/assets/images/resources/saloon2.jpg"
                      alt="" height={270} 
                    />
                  </div>
                </div>
                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                    Our team provides a full range of hair services to meet your needs. We're committed to delivering excellent service, so you look and feel your best. From trendy haircuts to vibrant hair Colours, we've got you covered.
                    </p>

                    <ul>
                    




                      <li>
                        <span class="icon-plus"></span> Expert haircuts to suit your style.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Professional hair Colouring to achieve your desired look.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Highlights, lowlights, and balisage for added dimension.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Personalized consultations to find the perfect style for you.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-details__bottom-text3">
              <div class="row">
                <h1 className="m-4 text-center">Keratin Treatment</h1>

                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                    We offer specialized hair treatments to meet your needs. Our experienced team is dedicated to providing top-notch service, ensuring that your hair is smooth, shiny, and healthy. From frizz control to deep conditioning, we’ve got you covered.
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span> Professional keratin treatments to smooth and strengthen your hair.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Long-lasting results for manageable, frizz-free hair.


                      </li>
                      <li>
                        <span class="icon-plus"></span> Deep conditioning to nourish and revitalize your hair.
                       
                      </li>
                      <li>
                        <span class="icon-plus"></span>  Personalized consultations to determine the best treatment for you.
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img
                      src="/assets/images/resources/saloon3.jpg"
                      alt="" height={270} 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="service-details__bottom-text3">
              <h1 className="m-4 text-center">Nail Colouring</h1>
              <div class="row">
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img
                      src="/assets/images/resources/saloon4.jpg"
                      alt="" height={270} 
                    />
                  </div>
                </div>
                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                    Our team provides a full range of nail services to meet your needs. We're committed to delivering excellent service, so your nails look beautiful and polished. From classic colours to trendy designs, we've got you covered.
                    </p>
                   




                    <ul>
                      <li>
                        <span class="icon-plus"></span>  Professional nail colouring with a wide range of shades.
                      </li>
                      <li>
                        <span class="icon-plus"></span>Artistic nail designs for a unique look.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Long-lasting gel polish for durable and glossy nails.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Personalized consultations to find the perfect colour for you.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-details__bottom-text3">
              <div class="row">
                <h1 className="m-4 text-center">Nail Treatment</h1>

                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                    We offer a comprehensive range of nail care services to meet your needs. Our experienced team is dedicated to providing top-notch service, ensuring that your nails are healthy and well-groomed. From basic care to luxurious treatments, we’ve got you covered.
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span>
                        Manicures and pedicures for well-groomed nails.


                      </li>
                      <li>
                        <span class="icon-plus"></span> Nail strengthening and conditioning treatments.

                      </li>
                      <li>
                        <span class="icon-plus"></span> Cuticle care and nail shaping for healthy nails.
                        
                      </li>
                      <li>
                        <span class="icon-plus"></span> Personalized consultations to determine the best treatment for you.
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img src="/assets/images/resources/saloon5.jpg" alt="" height={270} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <Link
              href="https://www.services2home.com/login-page"
              className="thm-btn main-header__btn"
            >
              <span>Book</span>
              <div className="liquid"></div>
            </Link>
          </div>
                </div>
            </section>
        </>
    )
}

export default OfficeCleaning;