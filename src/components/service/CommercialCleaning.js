import React from "react";
import Link from "next/link";

const CommercialCleaning = () => {
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
                    src="/assets/images/resources/home1.jpg"
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
              Home Appliance Repair Service
            </h2>
            <div class="service-details__bottom-text1">
              <p>
                At Service 2 Home, we understand the importance of
                well-functioning home appliances for your daily life. Our
                professional repair services are designed to keep your
                appliances running smoothly and efficiently. Whether you're
                dealing with an unexpected breakdown or need regular
                maintenance, our skilled technicians are here to provide
                reliable solutions tailored to your needs.
              </p>
            </div>
            <div class="service-details__bottom-text2">
              <p>
                We offer a wide range of services, including expert repairs and
                thorough maintenance. Our goal is to ensure that your appliances
                operate efficiently, helping you avoid unexpected issues and
                extend the life of your appliances.
              </p>
            </div>
            <div class="service-details__bottom-text3">
              <h1 className="m-4 text-center">Fridge Repair</h1>
              <div class="row">
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img src="/assets/images/resources/home6.jpg" alt=""  height={290}/>
                  </div>
                </div>
                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                      Our team provides a full range of appliance repair
                      services to meet your needs. We're committed to delivering
                      excellent service, so your fridge works efficiently. From
                      emergency repairs to regular maintenance, we've got you
                      covered.
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span> Expert diagnosis and
                        repair of fridge issues.
                      </li>
                      <li>
                        <span class="icon-plus"></span>Fast and reliable repair
                        services to address any problems
                      </li>
                      <li>
                        <span class="icon-plus"></span> RRoutine maintenance to
                        keep your fridge running well.
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
                <h1 className="m-4 text-center">Gas Stove Repair</h1>

                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                      We offer a comprehensive range of appliance repair
                      services to meet your needs. Our experienced team is
                      dedicated to providing top-notch service, ensuring that
                      your gas stove operates safely and efficiently. From
                      urgent repairs to regular maintenance, we’ve got you
                      covered.
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span>
                        Expert diagnosis and repair of gas stove issues.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Safety checks to ensure
                        proper operation
                      </li>
                      <li>
                        <span class="icon-plus"></span> Fast and reliable repair
                        services for any problems
                      </li>
                      <li>
                        <span class="icon-plus"></span> Routine maintenance to
                        keep your gas stove functioning safely.
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img src="/assets/images/resources/home3.jpeg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="service-details__bottom-text3">
              <h1 className="m-4 text-center">Washing Machine Repair</h1>
              <div class="row">
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img
                      src="/assets/images/resources/home4.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                    Our team provides a full range of appliance repair services to meet your needs. We're committed to delivering excellent service, so your washing machine works efficiently. From emergency repairs to regular maintenance, we've got you covered.
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span> Expert diagnosis and repair of washing machine issues.
                      </li>
                      <li>
                        <span class="icon-plus"></span>Fast and reliable repair services to address any problems.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Routine maintenance to keep your washing machine running well.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Energy efficiency consultations to help you save on bills.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-details__bottom-text3">
              <div class="row">
                <h1 className="m-4 text-center">Microwave Repair</h1>

                <div class="col-xl-8 col-lg-7">
                  <div class="content-box">
                    <p>
                      We offer a comprehensive range of appliance repair services to meet your needs. Our experienced team is dedicated to providing top-notch service, ensuring that your microwave operates efficiently and safely. From urgent repairs to regular maintenance, we’ve got you covered.
                    </p>

                    <ul>
                      <li>
                        <span class="icon-plus"></span>
                        Expert diagnosis and repair of microwave issues.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Fast and reliable repair services for any problems.
                      </li>
                      <li>
                        <span class="icon-plus"></span> Routine maintenance to keep your microwave functioning well
                      </li>
                      <li>
                        <span class="icon-plus"></span> Safety checks to ensure proper operation
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                  <div class="img-box">
                    <img src="/assets/images/resources/home2.jpeg" alt="" />
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
  );
};

export default CommercialCleaning;
