import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import WindowCleaning from "../components/service/WindowCleaning";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";
import CtaOne from "@/components/cta/CtaOne";

export default function WindowCleaningPage() {
	return (
		<>
			<SEO pageTitle={"Plumbing Service"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Plumbing Service"
                currentPage="Plumbing Service" 
				url1={"/assets/images/backgrounds/service3.jpg"}
            />
			<WindowCleaning />
			{/* <BrandOne /> */}
			<CtaOne/>
			<FooterOne />
		</>
	);
}