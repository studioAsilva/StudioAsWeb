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

## Pagamento (Pagar.me)

Checkout por **link de pagamento**: cada produto tem o seu link, criado no painel do
Pagar.me com preço fixo. O site não guarda nenhuma chave.

1. Cliente clica em **Comprar** → popup com resumo → **Ir para o pagamento**.
2. Paga na página do Pagar.me (lá informa nome, e-mail, CPF, telefone e, no Perfume, o endereço).
3. O Pagar.me devolve para `<site>/produtos?compra=<id-do-produto>` → popup
   "Pagamento em processamento".
4. Webhook do Pagar.me (pedido pago) → Make → e-mail para a cliente (com o link do produto)
   e para a Ana (dados da venda).

Para ativar um produto, preencha `paymentUrl` em `content/products.content.ts` e configure,
no link do Pagar.me, a URL de retorno com o `id` do produto. Sem `paymentUrl`, o popup
oferece a compra pelo WhatsApp.

A UI depende só de `CheckoutGateway` (`features/checkout`); a implementação atual é
`PaymentLinkCheckoutGateway` (registrada em `app.config.ts`).

## Deploy (Vercel)

Importe o repositório no Vercel — `vercel.json` já define build, pasta de saída e rewrite para SPA.
