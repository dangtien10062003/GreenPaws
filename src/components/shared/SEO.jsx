import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
  return (
    <Helmet>
      <title>{title || 'Green Paws - Pet Care Excellence'}</title>
      <meta name="description" content={description || 'Premium pet grooming, spa, training, and hotel services in Vietnam.'} />
      <meta name="image" content={image || 'https://yourdomain.com/og-image.jpg'} />
      <meta property="og:title" content={title || 'Green Paws - Pet Care Excellence'} />
      <meta property="og:description" content={description || 'Premium pet grooming, spa, training, and hotel services in Vietnam.'} />
      <meta property="og:image" content={image || 'https://yourdomain.com/og-image.jpg'} />
      <meta property="og:url" content={url || 'https://yourdomain.com'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'Green Paws - Pet Care Excellence'} />
      <meta name="twitter:description" content={description || 'Premium pet grooming, spa, training, and hotel services in Vietnam.'} />
      <meta name="twitter:image" content={image || 'https://yourdomain.com/og-image.jpg'} />
    </Helmet>
  );
};

export default SEO;

