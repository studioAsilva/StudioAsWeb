import { HomeContent } from '@core/models/home.model';
import { IMAGES } from './images';

export const HOME_CONTENT_DATA: HomeContent = {
  hero: {
    eyebrow: 'Studio de beleza',
    title: 'Studio',
    titleHighlight: 'Ana Silva',
    subtitle: 'Beleza, cuidado e conhecimento para transformar.',
    text: 'No Studio AS, cada detalhe nasce de uma paixão: cuidar de pessoas e compartilhar o que aprendi ao longo da minha trajetória na beleza. Aqui você encontra produtos para continuar seu autocuidado em casa e materiais para profissionais que querem valorizar seu trabalho e crescer com mais segurança.',
    image: { ...IMAGES.hero, alt: 'Ana Silva, fundadora do Studio AS' },
    cta: { label: 'Conheça o Studio AS', route: '/', fragment: 'quem-somos' },
  },

  about: {
    eyebrow: 'Quem somos',
    title: 'Onde a beleza encontra a confiança',
    paragraphs: [
      'O Studio Ana Silva nasceu da vontade de cuidar de cada mulher com atenção, técnica e respeito pela história do seu cabelo. Há seis anos, construímos um espaço onde a cliente pode se sentir acolhida, tirar suas dúvidas e entender cada etapa do cuidado com os fios.',
      'Acreditamos que um resultado bonito começa com uma avaliação cuidadosa. Por isso, nossa equipe busca entender o que cada cabelo precisa antes de indicar um tratamento ou realizar uma transformação. Essa forma de trabalhar também inspira os produtos, materiais e conhecimentos que compartilhamos com profissionais da beleza.',
      'Mais do que transformar cabelos, queremos que cada pessoa saia daqui se sentindo segura, bem cuidada e confiante.',
    ],
    image: { ...IMAGES.about, alt: 'Retrato de Ana Silva' },
    highlights: [
      { value: '+3 mil', label: 'Clientes atendidas' },
      { value: '+6', label: 'Anos de experiência' },
      { value: '100%', label: 'Dedicação' },
    ],
  },

  location: {
    eyebrow: 'Localização',
    title: 'Onde Estamos',
    addressTitle: 'Endereço',
    directionsLabel: 'Como chegar',
    hoursTitle: 'Horário de funcionamento',
    mapPlaceholder: { title: 'Mapa em breve', text: 'Localização será exibida aqui.' },
  },

  productsCta: {
    eyebrow: 'Para profissionais e clientes',
    title: 'Conheça nossos produtos exclusivos',
    cta: { label: 'Ver produtos', route: '/produtos' },
  },
};
