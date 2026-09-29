import { useState, useEffect } from 'react'
import './App-vtic4.css'
import { FileText, Mic, BookOpen, Layers, ArrowUpRight, ShieldCheck, ChevronDown } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'

const BASE_URL = 'https://site.incorporacaoimobiliaria.eng.br/wp-content/uploads/2026/04'
const LOGO_URL = '/logo.svg'
const HERO_BG = '/bg-desktop.png'
const PAYMENT_ICONS = `${BASE_URL}/Vector.svg`

const docs = [
  {
    img: '/doc-triagem.webp',
    value: 'R$47',
    headline: 'Decida em minutos se o caso vale a pena — antes de perder tempo e dinheiro.',
    desc: <>Checklist pronta para <strong>identificar casos com alto potencial, eliminar ações inviáveis e reduzir improcedências</strong> antes mesmo de distribuir a ação.</>,
  },
  {
    img: '/doc-peticao.webp',
    value: 'R$67',
    headline: 'Nunca mais comece uma inicial do zero.',
    desc: <>Estrutura completa de petição inicial com <strong>4 blocos argumentativos prontos para copiar, adaptar e usar</strong> imediatamente nos seus processos de Burnout.</>,
  },
  {
    img: '/doc-roteiro-audiencia.webp',
    value: 'R$47',
    headline: 'Perguntas que extraem prova — não que apenas preenchem ata.',
    desc: <>Roteiro com perguntas para <strong>reclamante, preposto e testemunhas</strong> focadas em demonstrar pressão excessiva, metas abusivas, assédio e adoecimento ocupacional.</>,
  },
  {
    img: '/doc-quesitos-periciais.webp',
    value: 'R$57',
    headline: 'Pare de improvisar com o perito. Ele sabe quando você está perdido.',
    desc: 'Quesitos prontos de nexo causal, dano e incapacidade — precisos o suficiente para direcionar a conclusão pericial a seu favor.',
  },
  {
    img: '/doc-teses.webp',
    value: 'R$67',
    headline: 'A defesa vai alegar multifatorialidade. Você vai ter a resposta pronta.',
    desc: <>Refutações estruturadas para as <strong>9 teses mais usadas pela defesa</strong>: multifatorialidade, fatores pessoais, ausência de CAT, comorbidades e mais.</>,
  },
  {
    img: '/doc-recurso.webp',
    value: 'R$47',
    headline: 'Uma improcedência não é o fim — se você souber o que fazer depois.',
    desc: 'Roteiro objetivo para analisar a sentença, mapear os fundamentos da improcedência e estruturar o Recurso Ordinário ponto a ponto.',
  },
  {
    img: '/doc-casos-reais.webp',
    value: 'R$57',
    headline: 'Veja o que funcionou em 10 processos reais de procedência.',
    desc: <>Análise de 10 decisões favoráveis ao reclamante: <strong>quais provas foram produzidas, quais fundamentos foram usados</strong> e o que levou ao reconhecimento do Burnout.</>,
  },
]

const testimonials = [
  {
    name: 'Dr. Rodrigo Almeida',
    role: 'Advogado Trabalhista — São Paulo/SP',
    text: 'Usei o checklist de triagem no primeiro dia e eliminei dois casos com baixíssima viabilidade que eu provavelmente teria distribuído. O roteiro de audiência sozinho já pagou o investimento muitas vezes.',
  },
  {
    name: 'Dra. Camila Ferreira',
    role: 'Escritório próprio — Curitiba/PR',
    text: 'Os quesitos periciais são precisos. O perito não tinha mais margem para generalizar a resposta. Ganhei uma ação que, com os quesitos que eu usava antes, provavelmente perderia.',
  },
  {
    name: 'Dr. Marcos Vieira',
    role: 'Advogado — Belo Horizonte/MG',
    text: 'A análise das teses defensivas me preparou exatamente para o que a defesa trouxe na audiência. Fui com respostas prontas para cada argumento. Procedência total.',
  },
]

const faqs = [
  {
    q: 'Para quem é esse material?',
    a: 'Para advogados trabalhistas que já atuam ou querem atuar em ações de Síndrome de Burnout e Doença Ocupacional. É especialmente útil para quem sente insegurança na fase pericial, na elaboração de quesitos ou no enfrentamento das teses da defesa.',
  },
  {
    q: 'Como vou receber o material?',
    a: 'Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link de acesso. O material fica disponível para download direto — sem espera, sem plataforma adicional.',
  },
  {
    q: 'Os documentos são editáveis?',
    a: 'Sim. Todos os modelos são entregues em formato editável para que você adapte ao seu estilo, ao caso concreto e ao entendimento do juízo em que atua.',
  },
  {
    q: 'Funciona para ações em qualquer estado?',
    a: 'Sim. Os fundamentos, teses e modelos foram construídos com base em legislação federal, jurisprudência do TST e literatura médica — aplicáveis em qualquer TRT do país.',
  },
  {
    q: 'Já tenho experiência em Direito do Trabalho. Ainda vale para mim?',
    a: 'Especialmente para você. Advogados experientes geralmente ganham mais com o material porque conseguem identificar rapidamente o que adaptar para cada caso — e economizam horas de pesquisa e estruturação.',
  },
  {
    q: 'E se eu não gostar do material?',
    a: 'Você tem 7 dias de garantia incondicional. Se por qualquer motivo o material não atender às suas expectativas, basta enviar um e-mail e devolvemos 100% do valor pago. Sem perguntas.',
  },
]

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const KEY = 'burnout_offer_v4_deadline'
    let deadline = localStorage.getItem(KEY)
    if (!deadline) {
      deadline = Date.now() + 3 * 24 * 60 * 60 * 1000
      localStorage.setItem(KEY, String(deadline))
    }
    deadline = Number(deadline)
    const tick = () => {
      const diff = deadline - Date.now()
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return }
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
  return (
    <div className="countdown">
      {[{ val: pad(days), label: 'Dias' }, { val: pad(hours), label: 'Horas' }, { val: pad(minutes), label: 'Min' }, { val: pad(seconds), label: 'Seg' }].map(({ val, label }) => (
        <div key={label} className="countdown-item">
          <span className="countdown-num">{val}</span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  )
}

function BuyButton({ href = '#oferta' }) {
  return (
    <a href={href} className="buy-btn">
      <span>QUERO GARANTIR MEU ACESSO <br />COM DESCONTO!</span>
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

function GuaranteeBadge() {
  return (
    <div className="guarantee-badge">
      <ShieldCheck className="guarantee-icon" />
      <span><strong>Garantia de 7 dias.</strong> Se não gostar, devolvemos 100% do seu dinheiro — sem perguntas.</span>
    </div>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <ChevronDown className="faq-chevron" />
      </button>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  )
}

export default function App() {
  return (
    <div className="page" id="topo">
      <div className="top-timer-bar">
        <p className="top-timer-text">Oferta por tempo limitado — preço volta a R$199,90 em breve</p>
        <CountdownTimer />
      </div>

      {/* HERO */}
      <section className="hero-section" style={{ backgroundImage: `url(${HERO_BG})` }}>
        <div className="hero-content">
          <img src={LOGO_URL} alt="" className="hero-logo" onError={e => e.target.style.display = 'none'} />
          <h1 className="hero-headline">
            Advogados que <span className="hero-highlight">ganham ações de Burnout</span> não têm sorte.<br />
            Eles têm <span className="hero-highlight">os materiais certos.</span>
          </h1>
          <p className="hero-sub">7 documentos prontos para usar — checklist, petição inicial, roteiro de audiência, quesitos periciais, teses da defesa desmontadas, recurso ordinário e análise de casos reais. Tudo por R$19,90.</p>
          <div className="price-block">
            <p className="price-line1">De <span className="price-striked">R$ 199,00</span> por apenas</p>
            <p className="price-big">R$ 19,90</p>
          </div>
          <BuyButton />
          <PaymentBadge />
        </div>
        <img src="/hero.webp" alt="" className="hero-overlay-image" aria-hidden="true" />
      </section>

      {/* PAINS */}
      <section className="pains-section">
        <div className="container">
          <p className="pains-eyebrow">A maioria dos advogados não perde ações de Burnout para o perito.</p>
          <p className="pains-subeyebrow">Perde para <strong>a falta de estrutura técnica na hora certa.</strong></p>
          <div className="pains-cards-grid">
            <div className="contrast-card contrast-card--red">
              <div className="contrast-card__accent-line contrast-card__accent-line--red" />
              <h3 className="contrast-card__title">Se você entra na audiência:</h3>
              <ul className="contrast-card__list">
                {[
                  'Sem saber exatamente quais quesitos vão direcionar o laudo',
                  'Sem uma linha de argumentação para enfrentar a tese de multifatorialidade',
                  'Com uma petição inicial genérica que não estabelece o nexo causal',
                ].map((item, i) => (
                  <li key={i} className="contrast-card__item">
                    <span className="contrast-card__dot contrast-card__dot--red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="contrast-card__footer">O resultado já está decidido antes de começar.</p>
            </div>

            <div className="contrast-card contrast-card--green">
              <div className="contrast-card__accent-line contrast-card__accent-line--green" />
              <h3 className="contrast-card__title">
                Os advogados que <span className="contrast-card__highlight">constroem procedências</span> fazem diferente:
              </h3>
              <ul className="contrast-card__list">
                {[
                  'Triagem cirúrgica: só distribuem casos com real potencial de procedência',
                  'Quesitos precisos que não dão margem para o perito generalizar',
                  'Fundamentação técnica que antecipa e desmonta cada argumento da defesa',
                  'Recurso estruturado para não deixar uma improcedência ser o fim da linha',
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
            A diferença entre os dois grupos não é talento.{' '}
            <span className="pains-footer-highlight">É ter a estrutura certa.</span>
          </p>
        </div>
      </section>

      {/* DOCS GRID */}
      <section className="docs-section">
        <div className="container">
          <h2 className="section-title light docs-section-title">
            7 materiais que valeriam mais de R$389 separados.<br />
            <span className="docs-title-sub">Você leva tudo por R$19,90.</span>
          </h2>
          <div className="docs-grid">
            {docs.map((doc, i) => (
              <div key={i} className="doc-card">
                <div className="doc-img-wrap">
                  <img src={doc.img} alt={`Documento ${i + 1}`} className="doc-img" />
                </div>
                <div className="doc-info">
                  <span className="doc-value">Valor individual: {doc.value}</span>
                  <p className="doc-headline">{doc.headline}</p>
                  <p className="doc-desc">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="docs-cta">
            <BuyButton />
            <PaymentBadge />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="testimonials-section">
        <div className="container">
          <p className="testimonials-kicker">QUEM JÁ USOU</p>
          <h2 className="section-title light testimonials-title">O que advogados dizem depois de usar o material</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section className="bonus-section">
        <div className="container">
          <p className="bonus-kicker">BÔNUS EXCLUSIVO — GRÁTIS NA COMPRA</p>
          <div className="bonus-grid">
            <div className="bonus-content">
              <h2 className="bonus-title">Acesso ao Núcleo da Advocacia Acidentária</h2>
              <p className="bonus-desc">
                Um <strong>grupo fechado exclusivo para alunos</strong> onde Felipe Scherer disponibiliza continuamente materiais estratégicos, áudios com análises de casos, PDFs técnicos e conteúdos aprofundados sobre Acidente de Trabalho e Doença Ocupacional.
              </p>
              <p className="bonus-value">Avaliado em R$97 — incluso gratuitamente para quem comprar agora.</p>
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
                  <span className="bonus-icon-label">Conteúdo<br/>Contínuo</span>
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
          <h3 className="offer-title">Garanta seu acesso agora<br />antes que o preço suba</h3>
          <hr className="offer-divider" />
          <ul className="offer-features">
            <li><span className="check-circle">✓</span> 7 materiais prontos para usar</li>
            <li><span className="check-circle">✓</span> Acesso imediato por e-mail</li>
            <li><span className="check-circle">✓</span> Documentos editáveis</li>
            <li><span className="check-circle">✓</span> Bônus: Núcleo da Advocacia Acidentária</li>
          </ul>
          <hr className="offer-divider" />
          <div className="offer-from">DE: <span className="price-striked-red">R$199,90</span></div>
          <div className="offer-from">POR APENAS</div>
          <div className="offer-price">R$19,90</div>
          <BuyButton href="https://checkout.ticto.app/O60E6C790" />
          <GuaranteeBadge />
          <PaymentBadge />
        </div>
      </section>

      {/* STEPS */}
      <section className="steps-section">
        <div className="container">
          <h2 className="section-title light">EM MENOS DE 5 MINUTOS<br />O MATERIAL ESTARÁ NA SUA MÃO:</h2>
          <div className="steps-grid">
            {[
              { num: '1', title: 'COMPRE COM SEGURANÇA', desc: 'Clique no botão, preencha seus dados e confirme o pagamento. Ambiente 100% seguro e criptografado.' },
              { num: '2', title: 'RECEBA NO SEU E-MAIL', desc: 'Assim que o pagamento for confirmado, você recebe o link de acesso imediato no e-mail cadastrado.' },
              { num: '3', title: 'USE NA PRÓXIMA AÇÃO', desc: 'Abra os documentos, adapte ao seu caso e aplique. Você vai sentir a diferença já no primeiro processo.' },
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
            <p className="professor-label">Quem criou esse material</p>
            <p>Depois de atuar em mais de <strong>3.000 processos trabalhistas</strong>, Felipe Scherer percebeu que a maioria das improcedências em ações de Burnout tinha uma causa comum: falta de estrutura técnica na fase pericial e na audiência.</p>
            <p>Foi para resolver isso que criou o Playbook do Reclamante — reunindo os <strong>mesmos documentos, modelos e roteiros que usa no seu próprio escritório</strong>, que já gerou mais de R$10 milhões em honorários.</p>
            <p><strong>Felipe Scherer</strong> é advogado especialista em Direito do Trabalho, pós-graduado em Direito e Processo do Trabalho, sócio do escritório FOLS Advocacia e autor do curso "Prática em Acidente de Trabalho 2.0".</p>
            <BuyButton />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <p className="testimonials-kicker">DÚVIDAS FREQUENTES</p>
          <h2 className="section-title light faq-title">Perguntas antes de comprar</h2>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
          <div className="faq-cta">
            <BuyButton />
            <GuaranteeBadge />
            <PaymentBadge />
          </div>
        </div>
      </section>
      <Analytics />

    </div>
  )
}
