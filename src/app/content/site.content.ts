import { SiteContent } from '@core/models/site.model';
import { buildWhatsAppUrl } from '@core/utils/whatsapp';

const WHATSAPP_NUMBER = '5531991728641';
const INSTAGRAM_URL = 'https://instagram.com/studioana_silva';

export const SITE_CONTENT_DATA: SiteContent = {
  brand: { name: 'Studio Ana Silva', shortName: 'Studio AS' },

  seo: {
    title: 'Studio Ana Silva | Beleza, cuidado e conhecimento',
    description:
      'Beleza, cuidado e conhecimento para transformar. Produtos para o seu autocuidado em casa e materiais para profissionais da beleza.',
  },

  nav: [
    { label: 'Início', route: '/' },
    { label: 'Quem Somos', route: '/', fragment: 'quem-somos' },
    { label: 'Onde Estamos', route: '/', fragment: 'onde-estamos' },
  ],
  headerCta: { label: 'Nossos Produtos', route: '/produtos' },

  contact: {
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappMessage: 'Olá! Vim pelo site do Studio Ana Silva.',
    phoneDisplay: '(31) 99172-8641',
    addressLines: ['Rua Poata, 604', 'Bairro Eldorado', 'Contagem — MG'],
    hours: ['Segunda a Sexta: 9h às 19h', 'Sábado: 9h às 16h', 'Domingo: Fechado'],
    mapEmbedUrl:
      'https://www.google.com/maps?q=Studio+Ana+Silva,+Rua+Poata,+604+-+Eldorado,+Contagem+-+MG&output=embed',
    mapLink: 'https://share.google/GZ2KskYtefj0thDRm',
  },

  social: [
    { label: 'Instagram', href: INSTAGRAM_URL },
    { label: 'WhatsApp', href: buildWhatsAppUrl(WHATSAPP_NUMBER) },
  ],

  footer: {
    socialTitle: 'Siga nas redes sociais',
    copyright: 'Studio Ana Silva. Todos os direitos reservados.',
  },
};
