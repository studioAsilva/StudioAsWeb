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

  categories: [
    { id: 'editaveis', title: 'Editáveis' },
    { id: 'mentoria', title: 'Mentoria' },
    { id: 'produtos', title: 'Produtos' },
  ],

  // Para exibir um produto no site, marque `published: true`.
  // Dentro de cada categoria, os produtos aparecem na ordem desta lista.
  products: [
    {
      id: 'combo-tabela-guia',
      published: true,
      category: 'editaveis',
      badge: 'Combo',
      name: 'Tabela de Valores + Guia Pós-Procedimento',
      tagline: 'Mais profissionalismo em cada detalhe, do primeiro contato ao pós-atendimento.',
      description:
        'Os dois materiais editáveis juntos, por um valor especial. Apresente seus serviços com uma tabela de valores profissional e oriente suas clientes com um guia pós-procedimento claro e organizado — tudo com a identidade do seu negócio.',
      features: [
        'Tabela de Valores editável no Canva',
        'Guia Pós-Procedimento Capilar editável',
        'Personalização com suas cores, fontes e logo',
        'Layouts profissionais e fáceis de usar',
        'Ideal para enviar pelo WhatsApp ou publicar nas redes sociais',
        'Valor especial em relação à compra separada',
      ],
      closing: [
        'Transmita confiança desde o orçamento e continue cuidando da sua cliente depois que ela sai do salão.',
      ],
      highlight: 'Mais profissionalismo em cada detalhe.',
      priceInCents: 3990,
      compareAtPriceInCents: 4598, // soma dos dois avulsos — atualizar se mudarem os preços
      // TODO: link de pagamento (criar com `npm run payment-links`)
      info: [
        {
          icon: 'download',
          title: 'Entrega',
          text: 'Digital — os dois materiais por e-mail em até 24h após a confirmação do pagamento',
        },
        { icon: 'file', title: 'Formato', text: 'Arquivos editáveis para personalizar' },
        { icon: 'infinity', title: 'Acesso', text: 'Vitalício — edite quando quiser' },
      ],
      checkoutNotice:
        'Produto digital: os links dos dois materiais serão enviados para o seu e-mail assim que o pagamento for confirmado.',
      image: { ...IMAGES.productCombo, alt: 'Retrato de Ana Silva' },
      extraImages: [
        { ...IMAGES.productTabela, alt: 'Ana Silva apresentando a Tabela de Valores' },
        { ...IMAGES.productGuia, alt: 'Ana Silva, criadora do Guia Pós-Procedimento' },
      ],
      buyLabel: 'Quero o combo',
    },
    {
      id: 'tabela-valores-canva',
      published: true,
      category: 'editaveis',
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
      priceInCents: 2599,
      // TODO: link de TESTE (R$ 2,20) — trocar pelo criado com `npm run payment-links`
      paymentUrl: 'https://payment-link-v3.stone.com.br/pl_vL2AyZjmVPO1pGilvcGYXDWxNoeklJRp',
      info: [
        {
          icon: 'download',
          title: 'Entrega',
          text: 'Digital — por e-mail em até 24h após a confirmação do pagamento',
        },
        { icon: 'file', title: 'Formato', text: 'Arquivo editável no Canva' },
        { icon: 'infinity', title: 'Acesso', text: 'Vitalício — edite quando quiser' },
      ],
      checkoutNotice:
        'Produto digital: o link da sua tabela editável será enviado para o seu e-mail assim que o pagamento for confirmado.',
      image: { ...IMAGES.productTabela, alt: 'Ana Silva apresentando a Tabela de Valores' },
      extraImages: [{ ...IMAGES.productTabela2, alt: 'Ana Silva com o cabelo liso' }],
      thumbnail: { ...IMAGES.productTabelaThumb, alt: '' },
      buyLabel: 'Quero minha tabela editável',
    },
    {
      id: 'mentoria-profissional',
      published: true,
      category: 'mentoria',
      name: 'Mentoria Profissional com Ana Silva',
      tagline: 'Para profissionais da beleza que querem crescer com direção.',
      description:
        'Uma mentoria para profissionais da beleza que desejam valorizar seu trabalho, atender com mais segurança e administrar seu negócio com direção. Vou compartilhar minha experiência à frente do Studio AS para ajudar você a identificar o que precisa mudar e transformar seus objetivos em ações práticas.',
      features: [
        'Análise da sua tabela de preços',
        'Análise do seu Instagram',
        'Fórmula de precificação',
        'Plano de ação personalizado',
        'Acesso à minha tabela de preços',
        'Acesso ao meu guia pós-procedimento',
        'Dicas de produtos e fornecedores',
        'Materiais de apoio',
      ],
      sections: [
        {
          title: 'O que vamos trabalhar',
          items: [
            'Precificação e formação de preços',
            'Posicionamento profissional',
            'Comunicação com clientes',
            'Políticas de agendamento: sinal, atrasos e cancelamentos',
            'Como dizer "não" e gestão de conflitos',
            'Fidelização de clientes',
            'Escolha e uso de produtos',
            'Venda sem parecer insistente',
            'Como transmitir valor nas redes sociais',
            'Experiência da cliente, do início ao pós-atendimento',
            'Como converter a cliente de química para tratamento',
            'Prática dos procedimentos com dúvidas',
          ],
        },
      ],
      infoTitle: 'Como funciona',
      info: [
        { icon: 'clock', title: 'Online', text: '2 encontros com duração média de 1h' },
        { icon: 'pin', title: 'Presencial', text: '2 encontros com duração média de 4h' },
        {
          icon: 'clock',
          title: 'Pós-mentoria',
          text: '1 encontro online com duração média de 50 min',
        },
        { icon: 'chat', title: 'Suporte', text: 'Pelo WhatsApp durante 60 dias' },
        { icon: 'file', title: 'Certificado', text: 'Certificado de conclusão' },
      ],
      whatsappMessage: 'Olá Ana, vim através do site para contratar a mentoria!',
      // Sem preço definido: o botão leva ao WhatsApp.
      image: { ...IMAGES.productMentoria, alt: 'Ana Silva segurando uma tesoura' },
      buyLabel: 'Quero contratar a mentoria',
      cardActionLabel: 'Contratar',
    },
    {
      id: 'guia-pos-procedimento',
      published: true,
      category: 'editaveis',
      name: 'Guia Pós-Procedimento Capilar Editável',
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
      priceInCents: 1999,
      // TODO: link de TESTE (R$ 2,20) — trocar pelo criado com `npm run payment-links`
      paymentUrl: 'https://payment-link-v3.stone.com.br/pl_8YX3rdaWgxVRgpnIEh0jv7epGDqJ5LzZ',
      info: [
        {
          icon: 'download',
          title: 'Entrega',
          text: 'Digital — por e-mail em até 24h após a confirmação do pagamento',
        },
        {
          icon: 'file',
          title: 'Formato',
          text: 'Arquivo editável para personalizar e enviar às suas clientes',
        },
        { icon: 'infinity', title: 'Acesso', text: 'Vitalício — edite quando quiser' },
      ],
      checkoutNotice:
        'Produto digital: o link do seu guia editável será enviado para o seu e-mail assim que o pagamento for confirmado.',
      image: { ...IMAGES.productGuia, alt: 'Retrato de Ana Silva' },
      extraImages: [{ ...IMAGES.productGuia2, alt: 'Ana Silva sentada no Studio' }],
      buyLabel: 'Quero meu guia pós-procedimento',
    },
    {
      id: 'perfume-capilar',
      published: true,
      category: 'produtos',
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
      sections: [
        {
          title: 'Pirâmide olfativa',
          lead: 'Floral branco luminoso',
          items: [
            'Flor de laranjeira',
            'Bergamota',
            'Tuberosa',
            'Jasmim',
            'Baunilha',
            'Almíscar',
            'Cedro',
          ],
        },
      ],
      info: [
        {
          icon: 'truck',
          title: 'Entrega',
          text: 'Produto físico — retirada no Studio ou envio combinado pelo WhatsApp após a confirmação do pagamento',
        },
        { icon: 'pin', title: 'Retirada', text: 'Rua Poata, 604 — Eldorado, Contagem/MG' },
      ],
      checkoutNotice:
        'Produto físico: assim que o pagamento for confirmado, as informações para a entrega ou a retirada no Studio serão enviadas para o seu e-mail.',
      priceInCents: 9990,
      // TODO: link de TESTE (R$ 2,20) — trocar pelo criado com `npm run payment-links`
      paymentUrl: 'https://payment-link-v3.stone.com.br/pl_QD7LWJ8VB52kq9fJeFNMkngdO30rbGYe',
      image: { ...IMAGES.productPerfume, alt: 'Ana Silva segurando o Perfume Capilar Studio AS' },
      buyLabel: 'Quero meu perfume capilar',
    },
  ],
};
