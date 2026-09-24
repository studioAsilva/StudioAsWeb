import { ProductsPageContent } from '@core/models/product.model';
import { IMAGES } from './images';

export const PRODUCTS_CONTENT_DATA: ProductsPageContent = {
  seo: {
    title: 'Nossos Produtos | Studio Ana Silva',
    description:
      'Produtos e materiais do Studio AS para o seu autocuidado em casa e para profissionais da beleza que querem valorizar seu trabalho.',
  },
  eyebrow: 'Catálogo',
  title: 'Nossos Produtos',
  subtitle:
    'Produtos pensados por quem entende de cabelo. Para profissionais que querem crescer e para quem busca o melhor cuidado capilar.',

  // Para exibir um produto no site, marque `published: true`.
  products: [
    {
      id: 'tabela-valores-canva',
      published: true,
      name: 'Tabela de Valores Editável no Canva',
      tagline:
        'Apresente seus serviços de forma profissional, organizada e com a identidade do seu negócio.',
      description:
        'Uma tabela de valores pronta para você editar no Canva, personalizar com suas cores, fontes, logo e informações. Ideal para profissionais da beleza que desejam transmitir mais confiança, facilitar o atendimento e valorizar seus serviços.',
      features: [
        'Arquivo editável no Canva',
        'Personalização com suas cores e identidade visual',
        'Espaço para inserir serviços, valores e informações importantes',
        'Layout profissional e fácil de usar',
        'Ideal para enviar pelo WhatsApp ou publicar nas redes sociais',
        'Praticidade para atualizar seus preços sempre que precisar',
      ],
      closing: [
        'Chega de enviar valores de forma desorganizada ou perder tempo criando uma tabela do zero.',
        'Tenha um material bonito, profissional e alinhado ao seu negócio para apresentar seus serviços com mais segurança e conquistar a confiança das suas clientes.',
      ],
      highlight: 'Valorize seu trabalho desde o primeiro contato.',
      priceInCents: 4990, // TODO: valor provisório, a definir
      image: { ...IMAGES.productTabela, alt: 'Ana Silva apresentando a Tabela de Valores' },
      thumbnail: { ...IMAGES.productTabelaThumb, alt: '' },
      buyLabel: 'Quero minha tabela editável',
    },
    {
      id: 'mentoria-profissional',
      published: true,
      name: 'Mentoria Profissional com Ana Silva',
      tagline: 'Para profissionais da beleza que querem crescer com direção.',
      description:
        'Uma mentoria para profissionais da beleza que desejam valorizar seu trabalho, atender com mais segurança e administrar seu negócio com direção. Vou compartilhar minha experiência à frente do Studio AS para ajudar você a identificar o que precisa mudar e transformar seus objetivos em ações práticas.',
      features: [
        'Diagnóstico do seu negócio e das principais dificuldades',
        'Precificação para cobrar com mais segurança',
        'Posicionamento e comunicação para atrair clientes que valorizam seu trabalho',
        'Atendimento que fortalece a confiança e a fidelização',
        'Orientação sobre escolha de produtos',
        'Plano de ação personalizado para seus próximos passos',
      ],
      // Sem preço definido: o botão leva ao WhatsApp.
      image: { ...IMAGES.productMentoria, alt: 'Ana Silva segurando uma tesoura' },
      buyLabel: 'Quero saber mais',
    },
    {
      id: 'guia-pos-procedimento',
      published: true,
      name: 'Guia Pós-Procedimento Capilar',
      tagline: 'Seu cuidado com a cliente continua depois que ela sai do salão.',
      description:
        'Um guia para profissionais da beleza que desejam apresentar as orientações pós-procedimento de forma clara e organizada, ajudando suas clientes a cuidar dos fios em casa.',
      features: [
        'Orientações de cuidados após o procedimento',
        'Hábitos que merecem atenção na rotina capilar',
        'Importância da manutenção e do home care',
        'Informações reunidas para facilitar a consulta da cliente',
        'Mais praticidade para orientar no pós-atendimento',
      ],
      closing: [
        'Transforme as dúvidas do pós-procedimento em uma oportunidade de demonstrar cuidado, fortalecer a confiança e oferecer uma experiência ainda mais completa.',
      ],
      highlight: 'Valorize seu atendimento em cada detalhe.',
      image: { ...IMAGES.productGuia, alt: 'Retrato de Ana Silva' },
      buyLabel: 'Quero meu guia pós-procedimento',
    },
    {
      id: 'perfume-capilar',
      published: true,
      name: 'Perfume Capilar Studio AS',
      tagline: 'Um aroma marcante para acompanhar cada movimento dos seus cabelos.',
      description:
        'O Perfume Capilar Studio AS combina uma fragrância sofisticada com cuidado para os fios. Um toque especial na sua rotina para deixar os cabelos perfumados e tornar seu momento de autocuidado ainda mais prazeroso.',
      features: [
        'Fragrância duradoura e irresistível',
        'Fórmula com proteção térmica',
        'Auxilia no controle do frizz',
        'Hidratação para os fios',
        'Indicado para todos os tipos de cabelo',
      ],
      closing: [
        'Para o dia a dia ou uma ocasião especial, finalize seus cuidados com o toque perfumado do Studio AS.',
      ],
      highlight: 'Seu perfume favorito também pode estar nos seus cabelos.',
      priceInCents: 8990, // TODO: valor provisório, a definir
      image: { ...IMAGES.productPerfume, alt: 'Ana Silva segurando o Perfume Capilar Studio AS' },
      buyLabel: 'Quero meu perfume capilar',
    },
  ],
};
