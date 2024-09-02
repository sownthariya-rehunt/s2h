import SEO from "../common/seo/Seo";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import GalleryDetails from "../components/gallery/GalleryDetails";
import CtaOne from "../components/cta/CtaOne";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "@/common/header/HeaderOne";

export default function GalleryDetailsPage() {
	return (
		<>
			<SEO pageTitle={"Gallery Details"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Gallery Details"
                currentPage="Gallery Details" 
            />
			<GalleryDetails />
			<CtaOne />
			<FooterOne />
		</>
	);
}