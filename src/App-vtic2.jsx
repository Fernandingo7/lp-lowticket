
import './App-vtic2.css'
import { FileText, Mic, BookOpen, Layers, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'

const BASE_URL = 'https://site.incorporacaoimobiliaria.eng.br/wp-content/uploads/2026/04'
const LOGO_URL = '/logo-preta.svg'
const HERO_BG = '/bg-desktop.png'
const PAYMENT_ICONS = `${BASE_URL}/Vector.svg`

const docs = [
  {
    img: '/doc-triagem.webp',
    coverTitle: 'CHECKLIST DE TRIAGEM DE CASOS',
    headline: 'Decida em minutos se vale a pena ajuizar a ação.',
    desc: <>Checklist pronta para <strong>identificar casos com alto potencial, evitar ações com baixa viabilidade e reduzir o risco de improcedência</strong> antes mesmo da distribuição.</>,
  },
  {
    img: '/doc-peticao.webp',
    coverTitle: 'MODELO DE PETIÇÃO INICIAL COM 4 BLOCOS PRONTOS PARA COPIAR E COLAR',
    headline: 'Não comece sua próxima inicial do zero.',
    desc: <>Tenha acesso à <strong>estrutura completa de petição inicial que utilizo no meu escritório</strong>, acompanhada dos principais <u>blocos argumentativos para copiar, adaptar e utilizar imediatamente nos seus processos</u>.</>,
  },
  {
    img: '/doc-roteiro-audiencia.webp',
    coverTitle: 'ROTEIRO DE AUDIÊNCIA',
    headline: 'Perguntas prontas para extrair prova.',
    desc: <>Perguntas para <strong>reclamante, preposto e testemunhas</strong> com foco em demonstrar pressão excessiva, metas abusivas, assédio e adoecimento ocupacional.</>,
  },
  {
    img: '/doc-quesitos-periciais.webp',
    coverTitle: 'MODELOS DE QUESITOS PERICIAIS',
    headline: 'Pare de improvisar perguntas para o perito.',
    desc: 'Quesitos prontos de nexo causal, dano e incapacidade para copiar, adaptar e utilizar imediatamente nas suas ações de Burnout e Doença Ocupacional.',
  },
  {
    img: '/doc-teses.webp',
    coverTitle: 'AS 9 PRINCIPAIS TESES DEFENSIVAS DESMONTADAS',
    headline: 'Saiba exatamente como enfrentar os argumentos mais comuns da defesa e dos peritos.',
    desc: <>Refutações prontas para alegações como <strong>multifatorialidade, fatores pessoais, ausência de CAT, doenças pré-existentes, comorbidades</strong> e outras teses frequentemente utilizadas para afastar o nexo causal.</>,
  },
  {
    img: '/doc-recurso.webp',
    coverTitle: 'RECURSO ORDINÁRIO SIMPLIFICADO',
    headline: 'Uma improcedência não precisa ser o fim da ação.',
    desc: 'Um roteiro objetivo para analisar a sentença, mapear os fundamentos da improcedência e estruturar o RO em pontos como preliminares, nexo causal, ônus da prova, dano, concausa, cálculo da indenização e prescrição.',
  },
  {
    img: '/doc-casos-reais.webp',
    coverTitle: 'ANÁLISE DE 10 CASOS REAIS DE PROCEDÊNCIA',
    headline: 'Veja como o Burnout foi reconhecido em 10 processos reais.',
    desc: <>A minha análise sobre 10 decisões favoráveis ao reclamante, destacando as <strong>provas produzidas</strong>, os <strong>fundamentos utilizados</strong> e os <strong>elementos que levaram ao reconhecimento do Burnout como doença ocupacional.</strong></>,
  },
]

const testimonials = [
  {
    name: 'Dr. Rodrigo Almeida',
    role: 'Advogado Trabalhista — São Paulo/SP',
    text: 'Usei o checklist de triagem no primeiro dia e já eliminei dois casos com baixíssima viabilidade. O roteiro de audiência sozinho já pagou o investimento várias vezes.',
  },
  {
    name: 'Dra. Camila Ferreira',
    role: 'Escritório próprio — Curitiba/PR',
    text: 'Os quesitos periciais são cirúrgicos. O perito não tinha mais margem para generalizar. Ganhei uma ação que provavelmente perderia sem esse material.',
  },
  {
    name: 'Dr. Marcos Vieira',
    role: 'Advogado — Belo Horizonte/MG',
    text: 'A análise das teses defensivas me preparou para o que a defesa ia trazer. Fui para a audiência com respostas prontas. Resultado: procedência total.',
  },
]


function BuyButton({ href = '#oferta' }) {
  return (
    <a href={href} className="buy-btn">
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

function GuaranteeBadge() {
  return (
    <div className="guarantee-badge">
      <ShieldCheck className="guarantee-icon" />
      <span>Garantia de <strong>7 dias</strong>. Se não gostar, devolvemos 100% do seu dinheiro.</span>
    </div>
  )
}

export default function App() {
  return (
    <div className="page" id="topo">
      <div className="top-timer-bar">
        <p className="top-timer-text">Essa oferta promocional vai sair do ar nos próximos dias!!!</p>
      </div>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <img src={LOGO_URL} alt="" className="hero-logo" onError={e => e.target.style.display = 'none'} />
          <h1 className="hero-headline">
            Nunca mais comece uma ação de Síndrome de Burnout do zero.
          </h1>
          <p className="hero-sub">Tenha acesso a fundamentos técnicos, quesitos, roteiro de perguntas, checklist e referências científicas prontos para modelar e aplicar.</p>
          <div className="price-block">
            <p className="price-line1">De <span className="price-striked">R$ 199,00</span> Por apenas</p>
            <p className="price-big">R$ 19,90</p>
          </div>
          <BuyButton />
          <PaymentBadge />
        </div>
        <img src="/hero.webp" alt="" className="hero-overlay-image" aria-hidden="true" />
      </section>

      {/* DOCS GRID */}
      <section className="docs-section">
        <div className="container">
          <h2 className="section-title light docs-section-title">Veja tudo o que você terá acesso ao adquirir o material:</h2>
          <div className="docs-grid">
            {docs.map((doc, i) => (
              <div key={i} className="doc-card">
                <div className="doc-img-wrap">
                  <img src={doc.img} alt={`Documento ${i + 1}`} className="doc-img" />
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
          <h3 className="offer-title">Adquira agora o<br />Playbook do Reclamante!</h3>
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
          <BuyButton href="https://checkout.ticto.app/O60E6C790" />
          <GuaranteeBadge />
          <PaymentBadge />
        </div>
      </section>

      {/* STEPS */}
      <section className="steps-section">
        <div className="container">
          <h2 className="section-title light">VOCÊ VAI RECEBER O PLAYBOOK<br />DIRETO NO SEU E-MAIL:</h2>
          <div className="steps-grid">
            {[
              { num: '1', title: 'ADQUIRA O PLAYBOOK', desc: 'Na próxima tela, você vai preencher seus dados e confirmar o pagamento.' },
              { num: '2', title: 'RECEBA O PLAYBOOK', desc: 'Em instantes você receberá o material completo no e-mail cadastrado.' },
              { num: '3', title: 'PRATIQUE O PLAYBOOK', desc: 'Tudo pronto! Agora é só acessar, editar e usar os documentos, garantindo segurança para você!' },
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
            <p className="professor-label">Conheça o autor</p>
            <p><strong>Felipe Scherer</strong> é advogado especialista em Direito do Trabalho, pós-graduado em Direito e Processo do Trabalho e sócio-proprietário do escritório FOLS Advocacia.</p>
            <p>Com mais de 10 anos de experiência, atuou em mais de 3.000 processos e obteve, com o seu escritório, <strong>mais de R$10 milhões de faturamento.</strong></p>
            <p>Autor do curso "Prática em Acidente de Trabalho 2.0", hoje Felipe também ajuda advogados que desejam ter o conhecimento e a segurança necessários para <strong>aumentar as suas probabilidades de êxito - e, consequentemente, seus honorários - nas ações de Acidente de Trabalho e Doença Ocupacional.</strong></p>
            <BuyButton />
          </div>
        </div>
      </section>
      <Analytics />
    </div>
  )
}
