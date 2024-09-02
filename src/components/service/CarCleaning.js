import React from 'react';
import Link from 'next/link';

const CarCleaning = () => {
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
                    <li class="service-details__sidebar-list-item">
                      <Link href="/" class="active">
                        Ac Service
                      </Link>
                    </li>
                    <li class="service-details__sidebar-list-item">
                      <Link href="/window-cleaning">Plumbing Service</Link>
                    </li>
                    <li class="service-details__sidebar-list-item">
                      <Link href="/commercial-cleaning">
                        Home Appliance Re-pair
                      </Link>
                    </li>
                    <li class="service-details__sidebar-list-item">
                      <Link href="/office-cleaning">Ladies Saloon</Link>
                    </li>
                    <li class="service-details__sidebar-list-item">
                      <Link href="/house-cleaning"> Cleaning</Link>
                    </li>
                    <li class="service-details__sidebar-list-item">
                      <Link href="/car-cleaning">Car Wash Service</Link>
                    </li>{" "}
                  </ul>
                </div>
              </div>

              <div className="col-xl-8 order-1">
                <div className="service-details__top-img">
                  <img
                    src="/assets/images/resources/carban.jpg"
                    alt=""
                    width={770}
                    height={525}
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="service-details__bottom">
            <h2 class="service-details__bottom-title">
            Car Service
            </h2>
            <div class="service-details__bottom-text1">
              <p>
              At Service 2 Home, we understand the importance of maintaining your car in top condition. Our professional car services are designed to keep your vehicle running smoothly and looking great. Whether you need a convenient car wash at home, a routine oil change, or emergency towing, our skilled technicians are here to provide reliable solutions tailored to your needs.
              </p>
            </div>
            <div class="service-details__bottom-text2">
              <p>
              We offer a wide range of services, including expert car washing, efficient oil changes, and reliable towing. Our goal is to ensure that your car is well-maintained, helping you avoid unexpected issues and extending the life of your vehicle.
              </p>
            </div>
            <div class="service-details__bottom-text3">
              <h1 className="m-4 text-center">Car Wash at Home</h1>
              <div class="row">
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img src="/assets/images/resources/carwash.jpg" alt=""  height={290}/>
                  </div>
                </div>
                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                    Our team provides a full range of car wash services to meet your needs. We're committed to delivering excellent service, so your car looks spotless and shiny. From exterior washes to detailed cleaning, we've got you covered.
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span> Convenient car wash services at your home.
                      </li>
                      <li>
                        <span class="icon-plus"></span>Thorough exterior and interior cleaning.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Detailing services to enhance your car’s appearance.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Eco-friendly cleaning products for a safe and effective wash.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-details__bottom-text3">
              <div class="row">
                <h1 className="m-4 text-center">Car Oil Change</h1>

                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                    We offer efficient oil change services to keep your car running smoothly. Our experienced team is dedicated to providing top-notch service, ensuring that your engine stays in good condition. From routine oil changes to full-service maintenance, we’ve got you covered.
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span>
                        Professional oil change services for all car models.


                      </li>
                      <li>
                        <span class="icon-plus"></span> SUse of high-quality oil and filters for optimal performance.

                      </li>
                      <li>
                        <span class="icon-plus"></span>Quick and efficient service to get you back on the road.
                        
                      </li>
                      <li>
                        <span class="icon-plus"></span> Comprehensive vehicle inspection with every oil change.
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img src="/assets/images/resources/caroil.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="service-details__bottom-text3">
              <h1 className="m-4 text-center">Car Towing</h1>
              <div class="row">
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img
                      src="/assets/images/resources/cartow.jpg"
                      alt="" height={270}
                    />
                  </div>
                </div>
                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                    Our team provides reliable towing services to meet your needs. We're committed to delivering excellent service, so you can get the help you need when you need it most. From emergency towing to scheduled transport, we've got you covered.
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span> Fast and reliable towing services for any situation.
                      </li>
                      <li>
                        <span class="icon-plus"></span>24/7 emergency towing available.


                      </li>
                      <li>
                        <span class="icon-plus"></span> Safe transport of your vehicle to the desired location.
                       
                      </li>
                      <li>
                        <span class="icon-plus"></span>  Assistance with breakdowns, accidents, and more.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          <div className="p-5">
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

export default CarCleaning;