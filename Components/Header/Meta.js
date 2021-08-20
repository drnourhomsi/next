import { useRouter } from 'next/router'
import Head from 'next/head'

function Meta() {
    const primary_color = "#0070f3";
    const meta_description = "Web design, Graphic design, Youtube, Brand Strategy, Instructor, Influencer";
    const site_name = "Web & Graphic Designer | Nour Homsi";
    const lang = "en";
    const today = new Date();
    const icons = "./img/favico"
    const ogImage = `${icons}/og-lehrmann.png`;
    const { asPath } = useRouter();
    return (
        <>
            <Head>
                {/* Page settings */}
            <title>{site_name}</title>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                {/* Favicons */}
                <link rel="mask-icon" color={primary_color}         href={`${icons}/safari-pinned-tab.svg`}></link>
                <link rel="apple-touch-icon"        sizes="180x180" href={`${icons}/apple-touch-icon.png`}></link>
                <link rel="icon" type="image/png"   sizes="32x32"   href={`${icons}/favicon-32x32.png`}></link>
                <link rel="icon" type="image/png"   sizes="16x16"   href={`${icons}/favicon-16x16.png`}></link>
                <link rel="shortcut icon" type="image/x-icon"       href={`${icons}/favicon-32x32.png`}></link>

                {/* PWA */}
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content={primary_color} />
                <meta name="apple-mobile-web-app-status-bar" content={primary_color} />

                {/* SEO settings */}
                <meta name="title"		        content={site_name} />
                <meta name="description"	    content={meta_description} />
                <meta name="image"		        content={ogImage} />
                <meta name="subject"	        content={site_name}/>
                <meta name="author"		        content= "Nour Homsi" />
                <meta name="copyright"	        content={"© " + site_name} />
                <meta name="language"	        content={lang} />
                <meta name="last-modified"	    content={today} />
                <meta name="handheldfriendly"   content="true" />
                <meta name="google"		        content="translate" />
                <meta name="robots"		        content="index, follow"/>

                {/* Open Graph / Facebook */}
                <meta property="og:site_name"   content={site_name}  />
                <meta property="og:type"	    content="website" />
                <meta property="og:url"	        content={asPath} /> 
                <meta property="og:title"	    content={site_name} />
                <meta property="og:description" content={meta_description} />
                <meta property="og:image"	    content={ogImage} />

                {/* Twitter */}
                <meta property="twitter:card"   content="summary_large_image" />
                <meta property="twitter:url"    content={asPath} />
                <meta property="twitter:title"  content={site_name} />
                <meta property="twitter:description" content={meta_description} />
                <meta property="twitter:image"  content={ogImage} />
                
                {/* Microsoft Tile */}
                <meta name="msapplication-TileColor" content={primary_color} />
                <meta name="msapplication-TileImage" content={ogImage} /> 
            </Head> 
        </>
    )
}

export default Meta
