import Head from "next/head";

const SEO = ({ pageTitle }) => (
    <>
        <Head>
            <title>
                {pageTitle && `${pageTitle} || Service 2 Home|| Cleaning Services React Next JS Template`}
            </title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content="Service 2 Home Cleaning Services React Next JS Template" />
            <meta name="robots" content="noindex, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
    </>
);

export default SEO;