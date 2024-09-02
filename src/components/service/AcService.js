import React from "react";
import Link from "next/link";
import ContactOne from "../contact/ContactOne";
import ContactTwo from "../contact/ContactTwo";
import ContactThree from "../contact/ContactThree";
import ContactFour from "../contact/ContactFour";
import ContactInfo from "../contact/ContactInfo";
import ContactMap from "../contact/ContactMap";

const AcService = () => {
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
                    src="/assets/images/services/acser1.jpg"
                    alt=""
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="service-details__bottom">
            <h2 class="service-details__bottom-title">AC Service</h2>
            <div class="service-details__bottom-text1">
              <p>
                At Service 2 Home, we understand the importance of a
                well-functioning air conditioning system for your home or
                business. Our professional AC services are designed to keep your
                environment cool, comfortable, and energy-efficient. Whether
                you're facing an unexpected breakdown or simply need routine
                maintenance, our skilled technicians are here to provide
                reliable solutions tailored to your needs.
              </p>
            </div>
            <div class="service-details__bottom-text2">
              <p>
                Our services encompass a wide range of needs, from expert
                installation and prompt repairs to thorough maintenance. We
                ensure that your air conditioning system operates efficiently,
                helping you avoid unexpected issues and extend the life of your
                unit.
              </p>
            </div>
            <div class="service-details__bottom-text3">
              <h1 className="m-4 text-center">AC Cleaning</h1>
              <div class="row">
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img
                      src="/assets/images/services/acser2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                      We offer a comprehensive range of AC services tailored to
                      meet your needs. Our experienced team is dedicated to
                      providing top-notch service, ensuring that your air
                      conditioning system operates smoothly and efficiently.
                      From emergency repairs to routine maintenance, we’ve got
                      you covered.
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span> Expert installation and
                        replacement of air conditioning systems.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Fast and reliable repair
                        services to address any issues.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Routine maintenance to
                        keep your system running efficiently.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Energy efficiency
                        consultations to help you save on bills.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-details__bottom-text3">
              <div class="row">
                <h1 className="m-4 text-center">AC Maintenance</h1>

                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                      We offer a comprehensive range of AC services tailored to
                      meet your needs. Our experienced team is dedicated to
                      providing top-notch service, ensuring that your air
                      conditioning system operates smoothly and efficiently.
                      From emergency repairs to routine maintenance, we’ve got
                      you covered.
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span> Expert installation and
                        replacement of air conditioning systems.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Fast and reliable repair
                        services to address any issues.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Routine maintenance to
                        keep your system running efficiently.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Energy efficiency
                        consultations to help you save on bills.
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img
                      src="/assets/images/services/acser3.jpg"
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

export default AcService;
