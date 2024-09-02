import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* favicons Icons */}
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/s2hlogo32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/assets/images/favicons/site.webmanifest" /><link href="" rel="stylesheet" />

                <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
                <link rel="stylesheet" href="/assets/vendors/animate/custom-animate.css" />
                <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
                <link rel="stylesheet" href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" />
                <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.min.css" />
                <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.pips.css" />
                <link rel="stylesheet" href="/assets/vendors/odometer/odometer.min.css" />
                <link rel="stylesheet" href="/assets/vendors/swiper/swiper.min.css" />
                <link rel="stylesheet" href="/assets/vendors/conult-icons/style.css" />
                <link rel="stylesheet" href="/assets/vendors/tiny-slider/tiny-slider.min.css" />
                <link rel="stylesheet" href="/assets/vendors/reey-font/stylesheet.css" />
                <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.carousel.min.css" />
                <link rel="stylesheet" href="/assets/vendors/owl-carousel/owl.theme.default.min.css" />
                <link rel="stylesheet" href="/assets/vendors/bxslider/jquery.bxslider.css" />
                <link rel="stylesheet" href="/assets/vendors/vegas/vegas.min.css" />
                <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
                <link rel="stylesheet" href="/assets/vendors/timepicker/timePicker.css" />
                <link rel="stylesheet" href="/assets/vendors/nice-select/nice-select.css" />
                <link rel="stylesheet" href="/assets/vendors/language-switcher/polyglot-language-switcher.css" />

                {/* template styles */}
                <link rel="stylesheet" href="/assets/css/style.css" />
                <link rel="stylesheet" href="/assets/css/theme-unit.css" />
                <link rel="stylesheet" href="/assets/css/responsive.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <script  src="/assets/vendors/jquery/jquery-3.6.0.min.js"></script>
                <script src="/assets/vendors/jquery-appear/jquery.appear.min.js"></script>
                <script src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"></script>
                <script src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"></script>
                <script src="/assets/vendors/jquery-validate/jquery.validate.min.js"></script>
                <script src="/assets/vendors/nouislider/nouislider.min.js"></script>
                <script src="/assets/vendors/odometer/odometer.min.js"></script>
                <script src="/assets/vendors/swiper/swiper.min.js"></script>
                <script src="/assets/vendors/tiny-slider/tiny-slider.min.js"></script>
                <script src="/assets/vendors/wnumb/wNumb.min.js"></script>
                <script src="/assets/vendors/wow/wow.js"></script>
                <script src="/assets/vendors/color-switcher/color-switcher.min.js"></script>
                <script src="/assets/vendors/isotope/isotope.js"></script>
                <script src="/assets/vendors/countdown/countdown.min.js"></script>
                <script src="/assets/vendors/owl-carousel/owl.carousel.min.js"></script>
                <script src="/assets/vendors/bxslider/jquery.bxslider.min.js"></script>
                <script src="/assets/vendors/vegas/vegas.min.js"></script>
                <script src="/assets/vendors/jquery-ui/jquery-ui.js"></script>
                <script src="/assets/vendors/timepicker/timePicker.js"></script>
                <script src="/assets/vendors/nice-select/jquery.nice-select.min.js"></script>
                <script src="/assets/vendors/simple-parallax/simple-parallax.js"></script>
                <script src="/assets/vendors/language-switcher/jquery.polyglot.language.switcher.js"></script>
            </body>
        </Html>
    )
}
