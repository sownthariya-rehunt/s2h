import React, { useEffect, useState } from 'react';
import BackgroundOne from '../../../public/assets/images/backgrounds/contact2.jpg';

const ContactOne = () => {
  const [formData, setFormData] = useState({
    form_name: '',
    form_email: '',
    form_phone: '',
    form_date: '',
    form_address: '',
    form_service: ''
  });

  useEffect(() => {
    $('select').niceSelect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { form_name, form_email, form_phone, form_date, form_address, form_service } = formData;

    const message = `Name: ${form_name}%0AEmail: ${form_email}%0APhone: ${form_phone}%0ADate: ${form_date}%0AAddress: ${form_address}%0AService: ${form_service}`;
    const whatsappUrl = `https://wa.me/9952475661?text=${message}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <section className="contact-one pd-120-0-120">
        <div
          className="contact-one__bg jarallax"
          data-jarallax
          data-speed="0.2"
          data-imgPosition="50% 0%"
          style={{ backgroundImage: `url(${BackgroundOne.src})` }}
        />
        <div className="contact-one__img wow slideInRight" data-wow-delay="500ms" data-wow-duration="2500ms">
          <img src="/assets/images/resources/contact.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            {/* Start Contact One Form Box */}
            <div className="col-xl-8">
              <div className="contact-one__form-box">
                <div className="section-title">
                  <span className="section-title__tagline">Contact With Us</span>
                  <h2 className="section-title__title">Write A Message</h2>
                </div>
                <form id="contact-form" name="contact_form" className="default-form2" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input
                          type="text"
                          name="form_name"
                          placeholder="Your Name"
                          required
                          value={formData.form_name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input
                          type="email"
                          name="form_email"
                          placeholder="Your Email"
                          required
                          value={formData.form_email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input
                          type="text"
                          name="form_phone"
                          placeholder="Your Phone"
                          value={formData.form_phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input
                          type="text"
                          name="form_date"
                          placeholder="Select Date"
                          id="datepicker"
                          value={formData.form_date}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input
                          type="text"
                          name="form_address"
                          placeholder="Office address"
                          value={formData.form_address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input
                          type="text"
                          name="form_service"
                          placeholder="Enter The Service"
                          value={formData.form_service}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 text-center">
                      <div className="button-box">
                        <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                        <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                          <span>Confirm Appointment</span>
                          <i className="liquid"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* End Contact One Form Box */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactOne;
