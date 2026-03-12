import { Helmet } from 'react-helmet-async'

export function SEOHead() {
  const siteTitle = 'Oliver Mayer | Desenvolvedor Fullstack'
  const siteDescription =
    'Desenvolvedor Fullstack com 3+ anos de experiência profissional em desenvolvimento de sistemas e integrações robustas. Experiência com React, Next.js, TypeScript, C#, ASP.NET e Node.js.'
  const siteUrl = 'https://oliverzyn.com'
  const author = 'Oliver Mayer'

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pt-BR" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:site_name" content="Oliver Mayer Portfolio" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Oliver Mayer',
          jobTitle: 'Desenvolvedor Fullstack',
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

      <meta name="theme-color" content="#42D3FF" />
      <meta name="msapplication-TileColor" content="#42D3FF" />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  )
}
