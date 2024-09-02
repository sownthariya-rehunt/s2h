import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import HouseCleaning from "../components/service/HouseCleaning";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";

export default function BusinessOptionsPage() {
	return (
		<>
			<SEO pageTitle={"Cleaning"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Cleaning"
                currentPage="Cleaning" 
				url1={"/assets/images/backgrounds/service.jpeg"}

            />
			<HouseCleaning />
			{/* <BrandOne /> */}
			<FooterOne />
		</>
	);
}