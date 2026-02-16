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
            <meta property="og:image" content="/src/assets/logo-icon.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content="/src/assets/logo-icon.png" />
        </Helmet>
    );
};

SEO.defaultProps = {
    title: 'Cure a Casa',
    description: 'Servizi infermieristici professionali a domicilio nel Locarnese e Ticino. Assistenza sanitaria qualificata direttamente a casa tua.',
    keywords: 'infermiera a domicilio, cure a domicilio, infermiere Locarno, assistenza domiciliare, sanità Ticino, prelievi a domicilio, medicazioni',
};

export default SEO;
