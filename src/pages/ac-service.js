import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
// import BedroomCleaning from "../components/service/AcService";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";
import AcService from "../components/service/AcService";

export default function BusinessGroceryPage() {
	return (
		<>
			<SEO pageTitle={"Bedroom Cleaning"} />
			<HeaderOne />
			<Breadcrumb 
                heading="AC Service"
                currentPage="Ac Service" 
				url1="/assets/images/backgrounds/service2.jpg"
            />
			{/* <BedroomCleaning /> */}
			<AcService/>
			{/* <BrandOne /> */}
			<FooterOne />
		</>
	);
}