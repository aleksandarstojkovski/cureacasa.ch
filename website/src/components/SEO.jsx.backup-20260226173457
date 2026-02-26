import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical }) => {
    return (
        <Helmet>
            <title>{title} | Cure a Casa</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="/logo-icon.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content="/logo-icon.png" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalBusiness",
                    "name": "Cure a Casa - Natasha Maslarova",
                    "image": "https://cureacasa.ch/logo-icon.png",
                    "@id": "https://cureacasa.ch/",
                    "url": "https://cureacasa.ch/",
                    "telephone": "+41768180317",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "",
                        "addressLocarno": "Locarno",
                        "addressRegion": "Ticino",
                        "postalCode": "6600",
                        "addressCountry": "CH"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 46.167,
                        "longitude": 8.794
                    },
                    "description": "Servizi infermieristici professionali a domicilio a Locarno e dintorni. Natasha Maslarova, infermiera indipendente.",
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday"
                        ],
                        "opens": "08:00",
                        "closes": "18:00"
                    }
                })}
            </script>
        </Helmet>
    );
};

SEO.defaultProps = {
    title: 'Cure a Casa',
    description: 'Servizi infermieristici professionali a domicilio a Locarno e dintorni. Assistenza sanitaria qualificata direttamente a casa tua.',
    keywords: 'infermiera a domicilio, cure a domicilio, infermiera Locarno, assistenza domiciliare, sanità Locarno, prelievi a domicilio, medicazioni',
};

export default SEO;
