import React from "react";
import Link from "next/link";
import CtaOne from "../cta/CtaOne";

const WindowCleaning = () => {
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
                  <img src="/assets/images/resources/plumb1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div class="service-details__bottom">
            <h2 class="service-details__bottom-title">Plumbing Service</h2>
            <div class="service-details__bottom-text1">
              <p>
                At Service 2 Home, we understand the importance of a reliable
                plumbing system in your home or business. Our professional
                plumbing services are designed to keep your water systems
                functioning properly and efficiently. Whether you're dealing
                with an unexpected leak or need routine repairs, our skilled
                plumbers are here to provide dependable solutions tailored to
                your needs.
              </p>
            </div>
            <div class="service-details__bottom-text2">
              <p>
                We offer a wide range of services, including expert
                installation, prompt repairs, and thorough maintenance. We
                ensure that your plumbing system operates smoothly, helping you
                avoid unexpected issues and extend the life of your plumbing.
              </p>
            </div>
            <div class="service-details__bottom-text3">
              <h1 className="m-4 text-center">Leakage Repair</h1>
              <div class="row">
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img src="/assets/images/resources/plum2.jpg" alt="" />
                  </div>
                </div>
                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                      Our team provides a full range of plumbing services to
                      meet your needs. We're committed to delivering excellent
                      service, so your plumbing system works efficiently. From
                      emergency leak repairs to regular maintenance, we've got
                      you covered.
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span> Expert detection and
                        repair of leaks.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Fast and reliable repair
                        services to address any leakage issues.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Routine maintenance to
                        prevent future leaks.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Water efficiency
                        consultations to help you save on bills
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-details__bottom-text3">
              <div class="row">
                <h1 className="m-4 text-center">General Repair</h1>

                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                      We offer a comprehensive range of plumbing services to
                      meet your needs. Our experienced team is dedicated to
                      providing top-notch service, ensuring that your plumbing
                      system operates smoothly and efficiently. From urgent
                      repairs to regular maintenance, we’ve got you covered.
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span> Expert installation and
                        replacement of plumbing fixtures.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Fast and reliable repair
                        services for any plumbing problems.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Routine maintenance to
                        keep your system running well.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Water efficiency
                        consultations to help you save on bills.
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img src="/assets/images/resources/plum3.jpg" alt="" />
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
        {/* <div className='p-5'>
                <CtaOne/>
                </div> */}
      </section>
    </>
  );
};

export default WindowCleaning;
