import SEO from "../common/seo/Seo";
import HeaderTwo from "../common/header/HeaderOne";
import HeroTwo from "../components/hero/HeroTwo";
import AboutOne from "../components/about/AboutOne";
import ServiceOne from "../components/service/ServiceOne";
import ProjectOne from "../components/project/ProjectOne";
import ContactOne from "../components/contact/ContactOne";
import TeamOne from "../components/team/TeamOne";
import WhyChooseUsOne from "../components/why-choose-us/WhyChooseUsOne";
import TestimonialOne from "../components/testimonial/TestimonialOne";
import CtaOne from "../components/cta/CtaOne";
import BlogOne from "../components/blog/BlogOne";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";
import TestimonialTwo from "@/components/testimonial/TestimonialTwo";

export default function Home() {
	return (
		<>
			<SEO pageTitle={"Home One"} />
			<HeaderTwo />
      		<HeroTwo />
			<AboutOne />
			<ServiceOne />
			<ContactOne />
			<ProjectOne />
			
			{/* <TeamOne /> */}
			{/* <WhyChooseUsOne /> */}
			
			<CtaOne />
			{/* <TestimonialOne /> */}
			<TestimonialTwo/>
			{/* <BlogOne />  */}
			{/* <BrandOne /> */}
			<FooterOne />
		</>
	);
}