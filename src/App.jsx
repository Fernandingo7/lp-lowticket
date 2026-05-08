import { useState, useEffect } from 'react'
import './App.css'
import { FileText, Mic, BookOpen, Layers } from 'lucide-react'

const BASE_URL = 'https://site.incorporacaoimobiliaria.eng.br/wp-content/uploads/2026/04'
const LOGO_URL = 'https://site.incorporacaoimobiliaria.eng.br/wp-content/uploads/2026/01/logo-arsenal-de-documentos-e-contratos-1.webp'
const HERO_BG = '/bg-desktop.png'
const PAYMENT_ICONS = `${BASE_URL}/Vector.svg`
const SHIELD_LOGO = `${BASE_URL}/Vector-3.svg`

const docs = [
  {
    img: '/doc-relatorio.png',
    title: 'RELATÓRIO TÉCNICO-CIENTÍFICO SOBRE NEXO CAUSAL',
    desc: 'Fundamentação técnico-científica para demonstrar a relação entre atividade laboral e hérnia de disco.',
  },
  {
    img: '/doc-roteiro.png',
    title: 'ROTEIRO DE PERGUNTAS',
    desc: 'Perguntas estratégicas para reclamante, preposto e testemunha, com foco em reconhecimento probatório.',
  },
  {
    img: '/doc-checklist.png',
    title: 'CHECKLIST PARA INSTRUÇÃO DA INICIAL',
    desc: 'Tudo o que deve ser levantado antes do ajuizamento da ação.',
  },
  {
    img: '/doc-quesitos.png',
    title: 'MODELOS DE QUESITOS PERICIAIS',
    desc: 'Quesitos técnicos voltados especificamente para casos de hérnia de disco.',
  },
  {
    img: `/doc-biblio.png`,
    title: 'REFERÊNCIAS BIBLIOGRÁFICAS',
    desc: 'Base científica para fortalecer petição inicial, impugnação de laudo e manifestações técnicas.',
  },
]

const pains = [
  'Não sabem demonstrar corretamente o nexo causal ou concausal;',
  'Aceitam passivamente alegações de doença degenerativa;',
  'Não estruturam adequadamente a prova pericial;',
  'Formulam quesitos superficiais;',
  'E deixam de maximizar o valor da condenação.',
]

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const target = Date.now() + 3 * 24 * 60 * 60 * 1000
    const tick = () => {
      const diff = target - Date.now()
      if (diff <= 0) return
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return timeLeft
}

function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown()
  const pad = n => String(n).padStart(2, '0')
  const items = [
    { val: pad(days), label: 'Dias' },
    { val: pad(hours), label: 'Horas' },
    { val: pad(minutes), label: 'Minutos' },
    { val: pad(seconds), label: 'Segundos' },
  ]
  return (
    <div className="countdown">
      {items.map(({ val, label }) => (
        <div key={label} className="countdown-item">
          <span className="countdown-num">{val}</span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  )
}

function BuyButton() {
  return (
    <a href="#oferta" className="buy-btn">
      <span>QUERO COMPRAR AGORA <br />COM DESCONTO!</span>
      <span className="buy-btn-arrow">↗</span>
    </a>
  )
}

function PaymentBadge() {
  return (
    <div className="payment-badge">
      <img src={PAYMENT_ICONS} alt="Formas de pagamento" className="payment-icons" onError={e => e.target.style.display = 'none'} />
    </div>
  )
}

export default function App() {
  return (
    <div className="page" id="topo">
      <div className="top-timer-bar">
        <p className="top-timer-text">Essa oferta promocional vai sair do ar nos próximos dias!</p>
        <CountdownTimer />
      </div>

      {/* HERO */}
      <section className="hero-section" style={{ backgroundImage: `url(${HERO_BG})` }}>
        <div className="hero-content">
          <img src={LOGO_URL} alt="Arsenal de Documentos e Contratos" className="hero-logo" onError={e => e.target.style.display = 'none'} />
          <img src="/logo_3.svg" alt="Logo" className="hero-secondary-logo" onError={e => e.target.style.display = 'none'} />
          <h1 className="hero-headline">
            Um material <span className="hero-highlight">imediatamente aplicável</span> para advogados que desejam <span className="hero-highlight">estruturar ações de hérnia de disco com mais segurança e assertividade.</span>
          </h1>
          <p className="hero-sub">Tenha acesso imediato a fundamentos técnicos, quesitos, roteiro de perguntas, checklist estratégico e referências científicas aplicáveis na prática.</p>
          <div className="price-row">
            <div className="price-from">DE: <span className="price-striked">R$ 197,00</span></div>
            <div className="price-main">POR: <span className="price-green">R$ 19,90</span></div>
          </div>
          <BuyButton />
          <PaymentBadge />
        </div>
        <img src="/hero.webp" alt="" className="hero-overlay-image" aria-hidden="true" />
      </section>

      {/* PAINS */}
      <section className="pains-section">
        <div className="container">
          <div className="pains-card">
            <h2 className="section-title">A maioria das ações de hérnia de disco são mal estruturadas.</h2>
            <p className="section-sub">E isso acontece porque muitos advogados:</p>
            <div className="pains-list">
              {pains.map((pain, i) => (
                <div key={i} className="pain-item">
                  <div className="pain-x" aria-hidden="true">✕</div>
                  <p className="pain-text">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOCS GRID */}
      <section className="docs-section">
        <div className="container">
          <h2 className="section-title light">VEJA TUDO O QUE VOCÊ TERÁ ACESSO NO MANUAL:</h2>
          <div className="docs-grid">
            {docs.map((doc, i) => (
              <div key={i} className="doc-card">
                <div className="doc-img-wrap">
                  <img src={doc.img} alt={`Documento ${i + 1}`} className="doc-img" />
                </div>
                <div className="doc-info">
                  <img src={LOGO_URL} alt="logo" className="doc-logo-img" onError={e => e.target.style.display = 'none'} />
                  <p className="doc-desc"><strong>{doc.title}</strong></p>
                  <p className="doc-desc">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section className="bonus-section">
        <div className="container">
          <p className="bonus-kicker">BÔNUS EXCLUSIVO</p>
          <div className="bonus-grid">
            <div className="bonus-content">
              <h2 className="bonus-title">NÚCLEO DA ADVOCACIA ACIDENTÁRIA</h2>
              <p className="bonus-desc">
                Tenha acesso a um <strong>grupo restrito</strong> para alunos, onde serão disponibilizados materiais estratégicos, áudios, PDFs técnicos e conteúdos aprofundados sobre a defesa em ações de Acidente de Trabalho e Doença Ocupacional.
              </p>
              <div className="bonus-icons">
                <div className="bonus-icon-item">
                  <Layers className="bonus-icon-svg" />
                  <span className="bonus-icon-label">Materiais<br/>Estratégicos</span>
                </div>
                <div className="bonus-icon-item">
                  <Mic className="bonus-icon-svg" />
                  <span className="bonus-icon-label">Áudios<br/>Exclusivos</span>
                </div>
                <div className="bonus-icon-item">
                  <FileText className="bonus-icon-svg" />
                  <span className="bonus-icon-label">PDFs<br/>Técnicos</span>
                </div>
                <div className="bonus-icon-item">
                  <BookOpen className="bonus-icon-svg" />
                  <span className="bonus-icon-label">Conteúdo<br/>Aprofundado</span>
                </div>
              </div>
            </div>
            <div className="bonus-visual">
              <img src="/iPhone 16.webp" alt="Núcleo da Advocacia Acidentária" className="bonus-mockup-img" />
            </div>
          </div>
        </div>
      </section>

      {/* OFFER BOX */}
      <section className="offer-section" id="oferta">
        <div className="offer-sides left" />
        <div className="offer-sides right" />
        <div className="offer-box">
          <img src={LOGO_URL} alt="Arsenal logo" className="offer-logo" onError={e => e.target.style.display = 'none'} />
          <h3 className="offer-title">Adquira agora o<br />Manual de Defesa!</h3>
          <hr className="offer-divider" />
          <ul className="offer-features">
            <li><span className="check-circle">✓</span> Acesso vitalício</li>
            <li><span className="check-circle">✓</span> Acesso imediato</li>
            <li><span className="check-circle">✓</span> Documentos editáveis</li>
          </ul>
          <hr className="offer-divider" />
          <div className="offer-from">DE: <span className="price-striked-red">R$199,90</span></div>
          <div className="offer-from">POR</div>
          <div className="offer-price">R$19,90</div>
          <BuyButton />
          <PaymentBadge />
        </div>
      </section>

      {/* STEPS */}
      <section className="steps-section">
        <div className="container">
          <h2 className="section-title light">VOCÊ VAI RECEBER O ARSENAL<br />DIRETO NO SEU E-MAIL:</h2>
          <div className="steps-grid">
            {[
              { num: '1', title: 'ADQUIRA O ARSENAL', desc: 'Na próxima tela, você vai preencher seus dados e confirmar.' },
              { num: '2', title: 'RECEBA O ARSENAL', desc: 'Na próxima tela, você vai preencher seus dados e confirmar.' },
              { num: '3', title: 'PRATIQUE O ARSENAL', desc: 'Tudo pronto! Agora é só acessar, editar e usar os documentos, garantindo segurança para você!' },
            ].map((step, i) => (
              <div key={i} className="step-card">
                <div className="step-header">{step.num}. {step.title}</div>
                <p className="step-desc">{step.desc}</p>
                <span className="step-bar" aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="steps-cta">
            <BuyButton />
            <PaymentBadge />
          </div>
        </div>
      </section>

      {/* PROFESSOR */}
      <section className="professor-section">
        <div className="professor-inner">
          <div className="professor-text">
            <p className="professor-label">Conheça o seu professor</p>
            <p><strong>Felipe Scherer</strong> é advogado especialista em Direito do Trabalho, pós-graduado em Direito e Processo do Trabalho e sócio-proprietário do escritório FOLS Advocacia.</p>
            <p>Com mais de 10 anos de experiência, atuou em mais de 3.000 processos e obteve, com o seu escritório, <strong>mais de R$10 milhões de faturamento.</strong></p>
            <p>Autor do curso "Prática em Acidente de Trabalho 2.0", hoje Felipe também ajuda advogados que desejam ter o conhecimento e a segurança necessários para <strong>aumentar as suas probabilidades de êxito - e, consequentemente, seus honorários - nas ações de Acidente de Trabalho e Doença Ocupacional.</strong></p>
            <BuyButton />
          </div>
        </div>
      </section>
    </div>
  )
}
