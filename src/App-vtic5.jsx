import { useState, useEffect } from 'react'
import './App-vtic5.css'
import { CheckCircle, ArrowUpRight, Shield, Zap, Mail, HelpCircle, ListChecks, FileSignature } from 'lucide-react'

const LOGO_URL = '/logo-preta.svg'
const CHECKOUT_URL = 'https://checkout.ticto.app/O60E6C790'

const materiais = [
  {
    img: '/doc-triagem.webp',
    titulo: 'CHECKLIST DE TRIAGEM DE CASOS',
    desc: 'Checklist pronta para identificar casos com alto potencial, evitar ações com baixa viabilidade e reduzir o risco de improcedência antes mesmo da distribuição.',
  },
  {
    img: '/doc-peticao.webp',
    titulo: 'MODELO DE PETIÇÃO INICIAL COM 4 BLOCOS PRONTOS PARA COPIAR E COLAR',
    desc: 'A estrutura completa de petição inicial com os principais blocos argumentativos para copiar, adaptar e utilizar imediatamente nos seus processos.',
  },
  {
    img: '/doc-roteiro-audiencia.webp',
    titulo: 'ROTEIRO DE AUDIÊNCIA',
    desc: 'Perguntas para reclamante, preposto e testemunhas com foco em demonstrar pressão excessiva, metas abusivas, assédio e adoecimento ocupacional.',
  },
  {
    img: '/doc-quesitos-periciais.webp',
    titulo: 'MODELOS DE QUESITOS PERICIAIS',
    desc: 'Quesitos prontos de nexo causal, dano e incapacidade para copiar, adaptar e utilizar imediatamente nas suas ações de Burnout e Doença Ocupacional.',
  },
  {
    img: '/doc-teses.webp',
    titulo: 'AS 9 PRINCIPAIS TESES DEFENSIVAS DESMONTADAS',
    desc: 'Refutações prontas para multifatorialidade, fatores pessoais, ausência de CAT, doenças pré-existentes e outras teses utilizadas para afastar o nexo causal.',
  },
  {
    img: '/doc-recurso.webp',
    titulo: 'RECURSO ORDINÁRIO SIMPLIFICADO',
    desc: 'Um roteiro objetivo para analisar a sentença, mapear os fundamentos da improcedência e estruturar o RO em pontos como nexo causal, ônus da prova, dano e prescrição.',
  },
  {
    img: '/doc-casos-reais.webp',
    titulo: 'ANÁLISE DE 10 CASOS REAIS DE PROCEDÊNCIA',
    desc: 'Análise de 10 decisões favoráveis ao reclamante, destacando as provas produzidas, os fundamentos utilizados e os elementos que levaram ao reconhecimento do Burnout.',
  },
]

function useCountdown() {
  const STORAGE_KEY = 'burnout_offer_v5_deadline'
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    let target = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10)
    if (!target || target < Date.now()) {
      target = Date.now() + 3 * 24 * 60 * 60 * 1000
      localStorage.setItem(STORAGE_KEY, String(target))
    }
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
    { val: pad(minutes), label: 'Min' },
    { val: pad(seconds), label: 'Seg' },
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

function BuyButton({ href = CHECKOUT_URL, text = 'QUERO O PLAYBOOK AGORA', className = '' }) {
  return (
    <a href={href} className={`buy-btn ${className}`}>
      <span>{text}</span>
      <ArrowUpRight className="buy-btn-arrow-icon" />
    </a>
  )
}

function TrustRow() {
  return (
    <div className="trust-row">
      <div className="trust-item"><Shield size={14} /><span>Compra Segura</span></div>
      <div className="trust-item"><Zap size={14} /><span>Acesso Imediato</span></div>
      <div className="trust-item"><CheckCircle size={14} /><span>Garantia 7 dias</span></div>
    </div>
  )
}

export default function App() {
  return (
    <div className="page" id="topo">

      {/* TIMER BAR */}
      <div className="top-timer-bar">
        <p className="top-timer-text">Oferta de lançamento — preço sobe em breve!</p>
        <CountdownTimer />
      </div>

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <img src={LOGO_URL} alt="Playbook do Reclamante" className="hero-logo"
              onError={e => e.target.style.display = 'none'} />

            <h1 className="hero-headline">
              Nunca mais comece uma ação de Síndrome de Burnout sem saber{' '}
              <span className="hero-highlight">exatamente o que fazer.</span>
            </h1>

            <p className="hero-sub">
              Acesse modelos prontos de petição inicial, quesitos periciais, roteiro de audiência e referências científicas <em><u>aplicáveis imediatamente nos seus processos.</u></em>
            </p>

            <div className="price-row">
              <div className="price-from">DE: <span className="price-striked">R$ 199,00</span></div>
              <div className="price-main">POR: <span className="price-accent">R$ 19,90</span></div>
            </div>

            <BuyButton text="QUERO COMPRAR AGORA COM DESCONTO!" />
            <TrustRow />
          </div>

          <div className="hero-image-wrap">
            <img src="/hero.webp" alt="Playbook do Reclamante" className="hero-mockup" />
          </div>
        </div>
      </section>

      {/* ── DOR / REFRAME ── */}
      <section className="pains-section">
        <div className="container">
          <h2 className="pains-headline">
            Uma ação de Burnout começa a ser construída muito antes de você distribuir a petição inicial.
          </h2>
          <p className="pains-intro">Logo que o cliente chega ao escritório, é preciso identificar:</p>

          <ul className="pains-checklist">
            {[
              'Se o caso tem viabilidade real para ajuizamento;',
              'Quais provas serão necessárias para demonstrar o nexo causal;',
              'Como formular quesitos que direcionem a conclusão do perito;',
              'E como refutar as teses defensivas antes mesmo de elas aparecerem.',
            ].map((item, i) => (
              <li key={i} className="pains-checklist__item">
                <span className="pains-checklist__icon">➡️</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pains-bottom">
          <div className="container">
            <div className="pains-divider" />
            <div className="pains-problem">
              <p className="pains-problem__text">
                O problema é que muitos advogados chegam à audiência — ou pior, ao laudo pericial —{' '}
                <strong>sem esse preparo.</strong>
              </p>
              <p className="pains-problem__late"><em>E aí pode ser tarde demais...</em></p>
              <p className="pains-problem__detail">
                Um quesito genérico que o perito ignora, uma triagem equivocada que aceita um caso inviável ou a falta de refutação técnica à tese da multifatorialidade pode comprometer o resultado da ação —{' '}
                <em>e os honorários decorrentes dela.</em>
              </p>
            </div>

            <div className="pains-callout">
              <p>É justamente para resolver esse problema que existe o <strong>Playbook do Reclamante em Ações de Síndrome de Burnout</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── O QUE VOCÊ RECEBE ── */}
      <section className="docs-section">
        <div className="container">
          <h2 className="docs-section-title">
            VEJA TUDO O QUE VOCÊ TERÁ ACESSO NO PLAYBOOK:
          </h2>

          <div className="docs-list">
            {materiais.map((m, i) => (
              <div key={i} className={`doc-row ${i % 2 === 1 ? 'doc-row--reverse' : ''}`}>
                <div className="doc-row__img">
                  <img src={m.img} alt={m.titulo} className="doc-row__img-real" />
                </div>
                <div className="doc-row__text">
                  <span className="doc-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="doc-titulo">{m.titulo}</h3>
                  <p className="doc-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BÔNUS ── */}
      <section className="bonus-section">
        <div className="container">
          <p className="bonus-eyebrow">E, DE BÔNUS, VOCÊ AINDA RECEBERÁ:</p>

          <div className="bonus-card">
            <div className="bonus-card__top">
              <img src="/iPhone 16.webp" alt="Núcleo da Advocacia Acidentária" className="bonus-community-img" />
              <h3 className="bonus-card__name">NÚCLEO DA ADVOCACIA ACIDENTÁRIA</h3>
            </div>
            <div className="bonus-card__bottom">
              <p>
                Um canal exclusivo e reservado aos alunos, no qual serão compartilhados{' '}
                <strong>materiais estratégicos, áudios, PDFs técnicos e conteúdos aprofundados</strong>{' '}
                sobre <u>Acidente de Trabalho e Doença Ocupacional.</u>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── APLICAÇÃO PRÁTICA ── */}
      <section className="uso-section">
        <div className="container">
          <h2 className="uso-title">
            NÃO É UM MATERIAL PARA VOCÊ ESTUDAR E GUARDAR NA GAVETA.
          </h2>
          <p className="uso-sub">
            O <strong>Playbook do Reclamante</strong> foi criado para estar aberto enquanto você trabalha nos seus processos:
          </p>

          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              <linearGradient id="brown-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7a3a18" />
                <stop offset="100%" stopColor="#c9895e" />
              </linearGradient>
            </defs>
          </svg>

          <div className="uso-cards">
            {[
              {
                icon: <HelpCircle size={36} stroke="url(#brown-grad)" strokeWidth={1.8} />,
                pergunta: 'Ficou em dúvida se o caso tem viabilidade?',
                acao: 'Abra o checklist de triagem.',
              },
              {
                icon: <ListChecks size={36} stroke="url(#brown-grad)" strokeWidth={1.8} />,
                pergunta: 'Precisa formular quesitos para o perito?',
                acao: 'Use o modelo pronto, adapte ao caso e protocole.',
              },
              {
                icon: <FileSignature size={36} stroke="url(#brown-grad)" strokeWidth={1.8} />,
                pergunta: 'Vai para a audiência ou precisa recorrer?',
                acao: 'Consulte o roteiro de perguntas ou o modelo de RO.',
              },
            ].map((item, i, arr) => (
              <div key={i} className="uso-card-wrap">
                <div className="uso-card">
                  <div className="uso-card__icon">{item.icon}</div>
                  <p className="uso-card__header">{item.pergunta}</p>
                  <p className="uso-card__body">{item.acao}</p>
                </div>
                {i < arr.length - 1 && <span className="uso-arrow">→</span>}
              </div>
            ))}
          </div>

          <p className="uso-footer">
            <strong>Tudo na palma da sua mão</strong> — <em>por um preço inacreditável.</em>
          </p>
        </div>
      </section>

      {/* ── OFERTA ── */}
      <section className="offer-section" id="oferta">
        <div className="offer-sides left" />
        <div className="offer-sides right" />
        <div className="offer-box">
          <img src={LOGO_URL} alt="Playbook do Reclamante" className="offer-logo"
            onError={e => e.target.style.display = 'none'} />
          <h3 className="offer-title">Adquira agora o Playbook do Reclamante!</h3>
          <hr className="offer-divider" />
          <ul className="offer-features">
            <li>✅ Acesso imediato e vitalício</li>
            <li>✅ 7 materiais estratégicos + bônus</li>
            <li>✅ Documentos editáveis e prontos para usar</li>
          </ul>
          <hr className="offer-divider" />
          <div className="offer-from">DE <span className="price-striked-red">R$199,00</span></div>
          <div className="offer-from">POR</div>
          <div className="offer-price">R$19,90</div>
          <BuyButton href={CHECKOUT_URL} text="QUERO COMPRAR AGORA COM DESCONTO!" />
          <TrustRow />
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section className="steps-section">
        <div className="container">
          <h2 className="section-title">VOCÊ VAI RECEBER O PLAYBOOK<br />DIRETO NO SEU E-MAIL:</h2>
          <div className="steps-grid">
            {[
              { num: '1', title: 'ADQUIRA O PLAYBOOK', desc: 'Na próxima tela, preencha seus dados e confirme o pagamento de forma segura.' },
              { num: '2', title: 'ACESSE O MATERIAL', desc: 'Você recebe um e-mail com o link de acesso imediatamente após a confirmação.' },
              { num: '3', title: 'APLIQUE NO PROCESSO', desc: 'Identifique a necessidade, use os modelos e revise com o checklist — ainda hoje.' },
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
            <TrustRow />
          </div>
        </div>
      </section>

      {/* ── AUTOR ── */}
      <section className="professor-section">
        <div className="professor-inner">
          <div className="professor-grid">
            <div className="professor-photo-wrap">
              <img src="/professor.webp" alt="Felipe Scherer" className="professor-photo" />
            </div>
            <div className="professor-text">
              <p className="professor-label">Quem é o autor?</p>
              <p><strong>Felipe Scherer</strong> é advogado especialista em Direito do Trabalho, pós-graduado em Direito e Processo do Trabalho e sócio-proprietário do escritório FOLS Advocacia.</p>
              <p>Com mais de 10 anos de experiência, atuou em mais de 3.000 processos e obteve, com o seu escritório, <strong>mais de R$10 milhões de faturamento.</strong></p>
              <p>Autor do curso <em>"Prática em Acidente de Trabalho 2.0"</em>, hoje Felipe ajuda advogados a terem o conhecimento e a segurança necessários para <strong>aumentar as probabilidades de êxito — e os honorários — nas ações de Acidente de Trabalho e Doença Ocupacional.</strong></p>
              <BuyButton text="QUERO ME TORNAR ALUNO!" className="buy-btn--outline" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
