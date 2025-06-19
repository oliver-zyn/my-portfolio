interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    title: 'De Zero a Desenvolvedor Profissional aos 18 Anos: Minha Jornada',
    excerpt:
      'Como transformei curiosidade em carreira e o que aprendi desenvolvendo profissionalmente desde os 17 anos na Linx Sponte.',
    date: '20 Jun 2024',
    readTime: '8 min',
    tags: ['Carreira', 'Story', 'Motivation'],
  },
  {
    title: '5 Técnicas Simples para Turbinar a Performance em React',
    excerpt:
      'Dicas práticas de otimização que aprendi desenvolvendo em produção. React.memo, useMemo, lazy loading e mais!',
    date: '15 Jun 2024',
    readTime: '6 min',
    tags: ['React', 'Performance', 'Frontend'],
  },
  {
    title: 'Como Conseguir Seus Primeiros Clientes como Freelancer Frontend',
    excerpt:
      'Guia prático com tudo que aprendi fazendo freelances: precificação, onde encontrar clientes, contratos e mais.',
    date: '10 Jun 2024',
    readTime: '10 min',
    tags: ['Freelancer', 'Business', 'Career'],
  },
]