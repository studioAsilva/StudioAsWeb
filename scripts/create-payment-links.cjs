// Uso: PAGARME_SECRET_KEY=sk_... npm run payment-links
// Cria um link de pagamento (Pagar.me/Stone) por produto, com Pix e crédito à vista,
// nas cores do site e voltando para /produtos?compra=<id> (abre o popup de confirmação).
// Copie as URLs impressas para o `paymentUrl` de cada produto em products.content.ts.

const SITE = 'https://studioaswebsite.vercel.app';
const LOGO = 'https://i.imgur.com/Rt6dxE8.png';
// Mesmas cores de src/styles/_tokens.scss
const PRIMARY = '#c4918b'; // --color-primary
const SECONDARY = '#f5dedb'; // --color-accent-soft

// Valores em centavos — mantenha iguais aos de products.content.ts
const PRODUCTS = [
  { id: 'combo-tabela-guia', name: 'Combo Tabela de Valores + Guia Pós-Procedimento', amount: 3990 },
  { id: 'tabela-valores-canva', name: 'Tabela de Valores Editável no Canva', amount: 2599 },
  { id: 'guia-pos-procedimento', name: 'Guia Pós-Procedimento Capilar Editável', amount: 1999 },
  { id: 'perfume-capilar', name: 'Perfume Capilar Studio AS', amount: 9990 },
];

const key = process.env.PAGARME_SECRET_KEY;
if (!key) {
  console.error('Defina PAGARME_SECRET_KEY com a chave secreta (sk_...) da Pagar.me.');
  process.exit(1);
}
const auth = 'Basic ' + Buffer.from(`${key}:`).toString('base64');

function body({ id, name, amount }) {
  return {
    type: 'order',
    name,
    is_building: false,
    payment_settings: {
      accepted_payment_methods: ['credit_card', 'pix'],
      pix_settings: { expires_in: 3600 },
      credit_card_settings: {
        operation_type: 'auth_and_capture',
        // Crédito somente à vista (1x, sem juros)
        installments_setup: { max_installments: 1, amount, interest_type: 'simple', interest_rate: 0 },
      },
    },
    cart_settings: { items: [{ name, amount, default_quantity: 1 }] },
    layout_settings: { image_url: LOGO, primary_color: PRIMARY, secondary_color: SECONDARY },
    flow_settings: { success_url: `${SITE}/produtos?compra=${id}` },
  };
}

(async () => {
  for (const product of PRODUCTS) {
    const res = await fetch('https://api.pagar.me/core/v5/paymentlinks', {
      method: 'POST',
      headers: { Authorization: auth, 'Content-Type': 'application/json' },
      body: JSON.stringify(body(product)),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.error(`${product.id}: erro ${res.status}`, JSON.stringify(data));
      continue;
    }
    console.log(`${product.id}: ${data.url}`);
  }
})();
