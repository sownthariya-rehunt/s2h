import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import AboutOne from "../components/about/AboutOne";
import ServiceOne from "../components/service/ServiceOne";
import ContactOne from "../components/contact/ContactOne";
import TeamOne from "../components/team/TeamOne";
import BlogOne from "../components/blog/BlogOne";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";
import CounterOne from "@/components/counter/CounterOne";

export default function AboutPage() {
	return (
		<>
			<SEO pageTitle={"About"} />
			<HeaderOne />
			<Breadcrumb 
                heading="About Page"
                currentPage="About" 
				url1="/assets/images/backgrounds/abt2.jpg"
            />
			<AboutOne />
			
			{/* <ServiceOne /> */}
			<ContactOne />
			<CounterOne/>
			{/* <TeamOne /> */}
			{/* <BlogOne /> */}
			{/* <BrandOne /> */}
			<FooterOne />
		</>
	);
}