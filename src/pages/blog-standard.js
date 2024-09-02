import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogStandard from "../components/blog/BlogStandard";
import BrandOne from "../components/brand/BrandOne";
import FooterOne from "../common/footer/FooterOne";

export default function BlogStandardPage() {
	return (
		<>
			<SEO pageTitle={"Blog Standard"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Blog Standard"
                currentPage="Blog Standard" 
            />
			<BlogStandard />
			<BrandOne />
			<FooterOne />
		</>
	);
}