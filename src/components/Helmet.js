import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from './SiteMetadata';

const HelmetComponent = () => {
    const { title, description } = useSiteMetadata()
    return (
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
            />
            <link
            rel="icon"
            type="image/png"
            href="/img/favicon-32x32.png"
            sizes="32x32"
            />
            <link
            rel="icon"
            type="image/png"
            href="/img/favicon-16x16.png"
            sizes="16x16"
            />

            <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#ff4400"
            />
            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
    );
    
}

export default HelmetComponent;