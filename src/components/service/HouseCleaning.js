import React from "react";
import Link from "next/link";

const HouseCleaning = () => {
  return (
    <>
         <section class="service-details mb-5">
        <div class="container">
          <div class="service-details__top">
            <div class="row">
              <div class="col-xl-4 col-lg-8 order-2">
                <div class="service-details__sidebar">
                  <h2 class="service-details__sidebar-title">All Service</h2>
                  <ul className="service-details__sidebar-list">
                                    <li class="service-details__sidebar-list-item"><Link href="/" class="active">Ac Service</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/window-cleaning">Plumbing Service</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/commercial-cleaning">Home Appliance Re-pair</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/office-cleaning">Ladies Saloon</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/house-cleaning"> Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/car-cleaning">Car Wash Service</Link></li>                                    </ul>
                </div>
              </div>

              <div class="col-xl-8 order-1">
                <div class="service-details__top-img">
                  <img
                    src="/assets/images/resources/clean1.jpg"
                    alt=""
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="service-details__bottom">
            <h2 class="service-details__bottom-title">Cleaning Service</h2>
            <div class="service-details__bottom-text1">
              <p>
              At Service 2 Home, we understand the importance of a clean and healthy environment for your home or business. Our professional cleaning services are designed to keep your space spotless and comfortable. Whether you need a one-time deep clean or regular maintenance, our skilled cleaners are here to provide reliable solutions tailored to your needs.
              </p>
            </div>
            <div class="service-details__bottom-text2">
              <p>
              We offer a wide range of services, including thorough house cleaning and efficient office cleaning. Our goal is to ensure that your space is clean and inviting, helping you maintain a pleasant environment.
              </p>
            </div>
            <div class="service-details__bottom-text3">
              <h1 className="m-4 text-center">House Cleaning</h1>
              <div class="row">
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img
                      src="/assets/images/resources/clean2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                    Our team provides a full range of cleaning services to meet your needs. We're committed to delivering excellent service, so your home stays fresh and clean. From deep cleaning to regular upkeep, we've got you covered
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span> Thorough cleaning of all rooms and surfaces.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Fast and reliable cleaning services for any mess.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Eco-friendly cleaning solutions to ensure safety.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Routine maintenance to keep your home spotless.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-details__bottom-text3">
              <div class="row">
                <h1 className="m-4 text-center">Office Cleaning</h1>

                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                    We offer a comprehensive range of cleaning services to meet your needs. Our experienced team is dedicated to providing top-notch service, ensuring that your office space is clean and efficient. From urgent clean-ups to regular maintenance, we’ve got you covered.
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span> Expert cleaning of all office areas and workspaces.


                      </li>
                      <li>
                        <span class="icon-plus"></span> Fast and reliable cleaning services for any office mess.

                      </li>
                      <li>
                        <span class="icon-plus"></span> Routine maintenance to keep your office tidy.
                       
                      </li>
                      <li>
                        <span class="icon-plus"></span>  Eco-friendly cleaning solutions to promote a healthy work environment.
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img
                      src="/assets/images/resources/clean3.jpg"
                      alt=""
                    />
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
  );
};

export default HouseCleaning;
