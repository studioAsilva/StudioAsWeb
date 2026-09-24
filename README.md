# Studio AS — Studio Ana Silva

Site institucional em Angular (standalone, signals, zoneless), publicado no Vercel.

## Comandos

```bash
npm install
npm start          # http://localhost:4200
npm run build      # gera dist/studio-as/browser
npm test
npm run images     # regera as imagens otimizadas
```

## Estrutura

```
src/
├── app/
│   ├── content/                    # TEXTOS E IMAGENS (edite aqui)
│   │   ├── site.content.ts         # marca, menu, contato, endereço, horários, redes
│   │   ├── home.content.ts         # hero, quem somos, onde estamos, CTA
│   │   ├── products.content.ts     # catálogo de produtos e preços
│   │   └── images.ts               # caminhos das imagens
│   ├── core/
│   │   ├── layout/                 # header, footer, botão flutuante do WhatsApp
│   │   ├── models/                 # tipos (conteúdo, produto, checkout)
│   │   ├── services/seo.service.ts # title + meta tags por página
│   │   ├── tokens/                 # InjectionTokens de conteúdo
│   │   └── utils/
│   ├── shared/ui/                  # logo, cta-link, section-heading
│   └── features/
│       ├── home/                   # página inicial (lazy) + sections/
│       ├── products/               # /produtos (lazy) + product-card
│       └── checkout/               # modal de compra + CheckoutGateway
└── styles/                         # tokens (cores/fontes), base, utilities, buttons, mixins
public/assets/images/               # arquivos de imagem
```

- **Trocar textos:** arquivos em `src/app/content/`.
- **Trocar imagens:** coloque a foto original em `assets-src/images`, ajuste a lista em
  `scripts/optimize-images.cjs` e rode `npm run images` (gera WebP otimizado e já recortado
  em `public/assets/images`). Depois aponte o arquivo em `content/images.ts`.
- **Produtos:** `content/products.content.ts` — `published` controla se aparece no site;
  produto sem `priceInCents` leva ao WhatsApp em vez do checkout.
- **Mapa:** cole a URL do "Incorporar mapa" do Google Maps em `contact.mapEmbedUrl`.
- **Cores/fontes:** `src/styles/_tokens.scss` (e o link do Google Fonts em `src/index.html`).
- **Seções** são componentes de apresentação: recebem conteúdo via `input()`.

## Pagamento (Pagar.me) — próximos passos

A UI do checkout depende só da abstração `CheckoutGateway`
(`features/checkout/checkout.gateway.ts`). Hoje está registrada a
`PendingCheckoutGateway`, que responde "pagamento em breve" e oferece o WhatsApp.

Para integrar:
1. Criar uma função serverless no Vercel (`api/checkout`) que recebe o pedido e cria
   a order no Pagar.me usando a **secret key** (variável de ambiente — nunca no front).
2. Criar `PagarmeCheckoutGateway` no front chamando `/api/checkout` e trocar o
   provider em `app.config.ts`.
3. Webhook `api/webhooks/pagarme` → ao receber `order.paid`, enviar o e-mail
   formatado com o link de acesso ao produto.

## Deploy (Vercel)

Importe o repositório no Vercel — `vercel.json` já define build, pasta de saída e rewrite para SPA.
