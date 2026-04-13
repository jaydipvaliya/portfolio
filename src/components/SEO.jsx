import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://jaydip-valiya.vercel.app';
const SITE_NAME = 'Jaydip Valiya Portfolio';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const TWITTER_HANDLE = '@JaydipValiya024';

/**
 * SEO component — renders all head meta tags for a page.
 *
 * @param {Object} props
 * @param {string} props.title       — Page title (appended with site name)
 * @param {string} props.description — Meta description (≤160 chars ideal)
 * @param {string} props.path        — Page path, e.g. "/about"
 * @param {string} [props.image]     — OG image URL
 * @param {string} [props.type]      — OG type (default "website")
 * @param {string} [props.keywords]  — Additional keywords
 * @param {Object} [props.jsonLd]    — Additional JSON-LD structured data
 */
export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords = '',
  jsonLd = null,
}) {
  const fullTitle = title
    ? `${title} — Jaydip Valiya | Full-Stack Developer`
    : 'Jaydip Valiya — Full-Stack Developer | MERN Stack Portfolio';

  const canonicalUrl = `${SITE_URL}${path}`;

  const defaultKeywords = 'Jaydip Valiya, Full Stack Developer, MERN Stack, React, Node.js, Portfolio, Gujarat, India';
  const allKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
