import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import OfficeCleaning from "../components/service/OfficeCleaning";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";
import CtaOne from "@/components/cta/CtaOne";

export default function OfficeCleaningPage() {
	return (
		<>
			<SEO pageTitle={"Ladies Saloon"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Ladies Saloon"
                currentPage="Ladies Saloon" 
				url1={"/assets/images/backgrounds/service4.jpg"}
            />
			<OfficeCleaning />
			{/* <BrandOne /> */}
			<CtaOne/>
			<FooterOne />
		</>
	);
}