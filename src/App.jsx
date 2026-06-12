import { useState, useEffect } from 'react'
import './App.css'
import { FileText, Mic, BookOpen, Layers, ArrowUpRight } from 'lucide-react'

const BASE_URL = 'https://site.incorporacaoimobiliaria.eng.br/wp-content/uploads/2026/04'
const LOGO_URL = 'https://site.incorporacaoimobiliaria.eng.br/wp-content/uploads/2026/01/logo-arsenal-de-documentos-e-contratos-1.webp'
const HERO_BG = '/bg-desktop.png'
const PAYMENT_ICONS = `${BASE_URL}/Vector.svg`
const SHIELD_LOGO = `${BASE_URL}/Vector-3.svg`

const docs = [
  {
    img: '/doc-triagem.png',
    coverTitle: 'CHECKLIST DE TRIAGEM DE CASOS',
    headline: 'Decida em minutos se vale a pena ajuizar a ação.',
    desc: 'Checklist pronta para identificar casos com alto potencial, evitar ações com baixa viabilidade e reduzir o risco de improcedência antes mesmo da distribuição.',
  },
  {
    img: '/doc-peticao.png',
    coverTitle: 'MODELO DE PETIÇÃO INICIAL COM 4 BLOCOS PRONTOS PARA COPIAR E COLAR',
    headline: 'Pare de escrever petições de Burnout do zero.',
    desc: 'Tenha acesso à estrutura completa de petição inicial que utilizo no meu escritório, acompanhada dos principais blocos argumentativos para copiar, adaptar e utilizar imediatamente nos seus processos.',
  },
  {
    img: '/doc-roteiro-audiencia.png',
    coverTitle: 'ROTEIRO DE AUDIÊNCIA',
    headline: 'Perguntas prontas para extrair prova.',
    desc: 'Perguntas para reclamante, preposto e testemunhas com foco em demonstrar pressão excessiva, metas abusivas, assédio e adoecimento ocupacional.',
  },
  {
    img: '/doc-quesitos-periciais.png',
    coverTitle: 'MODELOS DE QUESITOS PERICIAIS',
    headline: 'Pare de inventar perguntas para o perito.',
    desc: 'Quesitos prontos de nexo causal, dano e incapacidade para copiar, adaptar e utilizar imediatamente nas suas ações de Burnout e Doença Ocupacional.',
  },
  {
    img: '/doc-teses.png',
    coverTitle: 'AS 9 PRINCIPAIS TESES DEFENSIVAS DESMONTADAS',
    headline: 'Saiba exatamente como enfrentar os argumentos mais comuns da defesa e dos peritos.',
    desc: 'Refutações prontas para alegações como multifatorialidade, fatores pessoais, ausência de CAT, doenças pré-existentes, comorbidades e outras teses frequentemente utilizadas para afastar o nexo causal.',
  },
  {
    img: '/doc-recurso.png',
    coverTitle: 'RECURSO ORDINÁRIO SIMPLIFICADO',
    headline: 'Saiba exatamente o que fazer após uma improcedência.',
    desc: 'Passo a passo para estruturar o recurso e enfrentar os fundamentos mais comuns utilizados para negar o nexo causal.',
  },
  {
    img: '/doc-casos-reais.png',
    coverTitle: 'ANÁLISE DE 10 CASOS REAIS DE PROCEDÊNCIA',
    headline: 'Veja o que funcionou na prática.',
    desc: 'A minha análise sobre 10 decisões favoráveis ao reclamante com destaque para as provas, estratégias e argumentos que levaram ao reconhecimento do Burnout como doença ocupacional.',
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
      <ArrowUpRight className="buy-btn-arrow-icon" />
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
          <img src={LOGO_URL} alt="" className="hero-logo" onError={e => e.target.style.display = 'none'} />
          <img src="/logo_3.svg" alt="Logo" className="hero-secondary-logo" onError={e => e.target.style.display = 'none'} />
          <h1 className="hero-headline">
            Um material <span className="hero-highlight">imediatamente aplicável</span> para advogados que desejam <span className="hero-highlight">estruturar ações de hérnia de disco com mais segurança e assertividade.</span>
          </h1>
          <p className="hero-sub">Tenha acesso imediato a fundamentos técnicos, quesitos, roteiro de perguntas, checklist estratégico e referências científicas aplicáveis na prática.</p>
          <div className="price-row">
            <div className="price-from">DE: <span className="price-striked">R$ 199,00</span></div>
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
          <p className="pains-eyebrow">A maioria das ações de burnout são perdidas por falta de técnica.</p>
          <div className="pains-cards-grid">
            <div className="contrast-card contrast-card--red">
              <div className="contrast-card__accent-line contrast-card__accent-line--red" />
              <h3 className="contrast-card__title">Enquanto você está:</h3>
              <ul className="contrast-card__list">
                {[
                  'Aceitando casos de burnout sem saber provar o nexo causal',
                  'Usando quesitos genéricos que o perito simplesmente ignora',
                  'Perdendo ações e honorários por falta de fundamento técnico',
                ].map((item, i) => (
                  <li key={i} className="contrast-card__item">
                    <span className="contrast-card__dot contrast-card__dot--red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contrast-card contrast-card--green">
              <div className="contrast-card__accent-line contrast-card__accent-line--green" />
              <h3 className="contrast-card__title">
                Os advogados que <span className="contrast-card__highlight">ganham</span> estão:
              </h3>
              <ul className="contrast-card__list">
                {[
                  'Provando o nexo causal com fundamentação técnico-científica irrefutável',
                  'Formulando quesitos cirúrgicos que direcionam a conclusão pericial',
                  'Maximizando condenações com materiais estratégicos já validados',
                ].map((item, i) => (
                  <li key={i} className="contrast-card__item">
                    <span className="contrast-card__dot contrast-card__dot--green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="pains-footer-text">
            Cada caso perdido é um honorário que ficou na mesa.{' '}
            <span className="pains-footer-highlight">E isso tem solução.</span>
          </p>
        </div>
      </section>

      {/* DOCS GRID */}
      <section className="docs-section">
        <div className="container">
          <h2 className="section-title light">VEJA TUDO O QUE VOCÊ TERÁ ACESSO NO KIT COMPLETO:</h2>
          <div className="docs-grid">
            {docs.map((doc, i) => (
              <div key={i} className="doc-card">
                <div className="doc-img-wrap">
                  <img src={doc.img} alt={`Documento ${i + 1}`} className="doc-img" />
                  <div className="doc-img-overlay">
                    <span className="doc-cover-title">{doc.coverTitle}</span>
                  </div>
                </div>
                <div className="doc-info">
                  <p className="doc-headline">{doc.headline}</p>
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
          <h2 className="section-title light">VOCÊ VAI RECEBER O MANUAL<br />DIRETO NO SEU E-MAIL:</h2>
          <div className="steps-grid">
            {[
              { num: '1', title: 'ADQUIRA O MANUAL', desc: 'Na próxima tela, você vai preencher seus dados e confirmar.' },
              { num: '2', title: 'RECEBA O MANUAL', desc: 'Na próxima tela, você vai preencher seus dados e confirmar.' },
              { num: '3', title: 'PRATIQUE O MANUAL', desc: 'Tudo pronto! Agora é só acessar, editar e usar os documentos, garantindo segurança para você!' },
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
