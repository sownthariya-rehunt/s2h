import React from 'react';

const NewsletterOne = () => {
    return (
        <>
            <section class="subscribe-one">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="subscribe-one__content">
                                <div class="subscribe-title">
                                    <h3>Subscribe Our Newsletters</h3>
                                </div>
                                <div class="subscribe-box">
                                    <form class="subscribe-form" action="#">
                                        <input type="email" name="email" placeholder="Enter Your Email" />
                                        <button class="btn-one" type="submit"><span class="txt">Subscribe</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsletterOne;