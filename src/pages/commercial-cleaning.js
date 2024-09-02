import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import CommercialCleaning from "../components/service/CommercialCleaning";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";
import CtaOne from "@/components/cta/CtaOne";

export default function LibraryBusinessPage() {
	return (
		<>
			<SEO pageTitle={"Home Applience Re-pair"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Home Applience Re-pair"
                currentPage="Home Applience Re-pair" 
				url1={"/assets/images/backgrounds/service2.jpg"}
            />
			<CommercialCleaning />
			{/* <BrandOne /> */}
			<CtaOne/>
			<FooterOne />
		</>
	);
}