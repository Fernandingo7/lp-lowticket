import './App-vtic3.css'
import { Analytics } from '@vercel/analytics/react'

const BASE_URL = 'https://site.incorporacaoimobiliaria.eng.br/wp-content/uploads/2026/04'
const PAYMENT_ICONS = `${BASE_URL}/Vector.svg`

export default function App() {
  return (
    <div className="page">

      <div className="top-bar">
        Essa oferta promocional vai sair do ar nos próximos dias!!!
      </div>

      <section className="hero">
        <div className="hero-left">
          <h1 className="headline">
            Um material <span className="hl">imediatamente aplicável</span> para advogados que desejam <span className="hl">estruturar ações de burnout</span> com mais segurança técnica.
          </h1>
          <p className="price-line">
            De: <span className="price-old">R$ 199,00</span> por apenas:
          </p>
          <p className="price-big">R$ 19,90</p>
          <a href="https://checkout.ticto.app/O60E6C790" className="cta-btn">
            ADQUIRIR AGORA MESMO NO VALOR PROMOCIONAL!
          </a>
          <img
            src={PAYMENT_ICONS}
            alt="Formas de pagamento"
            className="payment-icons"
            onError={e => e.target.style.display = 'none'}
          />
        </div>

        <img src="/hero.webp" alt="Playbook do Reclamante" className="hero-mockup" />
      </section>
      <Analytics />

    </div>
  )
}
