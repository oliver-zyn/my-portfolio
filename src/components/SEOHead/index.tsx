import { Helmet } from 'react-helmet-async'

export function SEOHead() {
  const siteTitle = 'Oliver Mayer | Desenvolvedor Frontend'
  const siteDescription =
    'Desenvolvedor frontend especializado em React, Next.js e TypeScript. Criando experiências digitais incríveis com mais de 2 anos de experiência.'
  const siteUrl = 'https://oliver-portfolio.com' // Substitua pela sua URL
  const author = 'Oliver Mayer'

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pt-BR" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:site_name" content="Oliver Mayer Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Oliver Mayer',
          jobTitle: 'Desenvolvedor Frontend',
          url: siteUrl,
          sameAs: [
            'https://github.com/oliver-zyn',
            'https://www.linkedin.com/in/oliverzyn/',
            'https://www.instagram.com/oliverzyn_/',
          ],
          knowsAbout: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Node.js',
            'TailwindCSS',
            '.NET',
          ],
          description: siteDescription,
        })}
      </script>

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#42D3FF" />
      <meta name="msapplication-TileColor" content="#42D3FF" />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  )
}
