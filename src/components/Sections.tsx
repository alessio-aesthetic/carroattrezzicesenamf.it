import { services, site, zones } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="dispatch-hero relative isolate overflow-hidden">
      <div className="dispatch-hero__masthead" aria-hidden="true"><span>MF / SERVIZIO STRADALE</span><span>CESENA · 24 ORE</span></div>
      <div className="container dispatch-hero__inner relative z-10">
        <div className="dispatch-hero__headline" data-reveal>
          <p className="dispatch-hero__eyebrow"><span className="dispatch-hero__marker" /> Se ti fermi, arriviamo noi</p>
          <h1>La strada<br />non aspetta.<br /><em>Noi nemmeno.</em></h1>
          <p className="dispatch-hero__lead">Carroattrezzi a Cesena, con una persona pronta ad ascoltarti e a capire subito di cosa hai bisogno.</p>
        </div>
        <div className="dispatch-hero__callout" data-reveal data-reveal-delay="2">
          <span className="dispatch-hero__callout-label">Una chiamata diretta</span>
          <Link href={`tel:${site.tel}`} aria-label={`Chiama il carroattrezzi al ${site.phone}`} className="dispatch-hero__phone">{site.phone}<span aria-hidden="true">↗</span></Link>
          <p>Raccontaci dove sei. Ti aiutiamo a capire il passo successivo.</p>
          <div className="dispatch-hero__hours"><span>24</span><span>Disponibilità per urgenze<br />giorno e notte</span></div>
        </div>
        <div className="dispatch-hero__scene" data-reveal data-reveal-delay="1">
          <Image src="/images/recovery/c-hero-main.webp" alt="Carroattrezzi impegnato in un intervento stradale" fill priority sizes="(max-width: 1024px) 100vw, 94vw" className="object-cover" />
          <div className="dispatch-hero__scene-caption"><span>CESENA / ROMAGNA</span><span>RECUPERO · TRAINO · TRASPORTO</span></div>
          <svg className="dispatch-hero__route" viewBox="0 0 800 200" fill="none" aria-hidden="true"><path d="M-20 153C90 153 93 61 203 61S327 161 425 161 566 40 645 40 746 110 820 110" stroke="currentColor" strokeWidth="5" strokeDasharray="8 12"/><circle cx="203" cy="61" r="9" fill="currentColor"/><circle cx="645" cy="40" r="9" fill="currentColor"/></svg>
          <div className="dispatch-hero__badge"><span>MF</span><small>Qui per<br />aiutarti</small></div>
        </div>
      </div>
      <div className="dispatch-hero__ticker" aria-hidden="true"><span>SOCCORSO STRADALE</span><b>✳</b><span>CESENA E DINTORNI</span><b>✳</b><span>UNA VOCE, POI LA STRADA</span><b>✳</b></div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="rescue-intro section-pad">
      <div className="container rescue-intro__grid">
        <div data-reveal>
          <p className="rescue-kicker"><span>01</span> Prima di tutto, chiarezza</p>
          <h2>Nel momento difficile, <em>una voce umana</em> fa la differenza.</h2>
        </div>
        <div className="rescue-intro__detail" data-reveal data-reveal-delay="2">
          <p>Quando l’auto si ferma, non dovresti perdere tempo tra dubbi e passaggi inutili. Raccontaci dove sei, che veicolo hai e cosa è successo: così possiamo valutare insieme la soluzione più adatta.</p>
          <p>A Cesena e nei comuni vicini ci occupiamo di recupero, traino e trasporto. Ti spieghiamo i passaggi con parole semplici e concordiamo con te la destinazione del mezzo.</p>
          <div className="rescue-intro__tags"><span>Auto</span><span>Moto</span><span>Furgoni leggeri</span><span>Trasporto veicoli</span></div>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section className="rescue-services section-pad">
      <div className="container">
        <div className="rescue-section-heading" data-reveal>
          <div><p className="rescue-kicker rescue-kicker--light"><span>02</span> Interventi su misura</p><h2>Ogni imprevisto<br /><em>ha la sua strada.</em></h2></div>
          <p>Dal guasto al trasporto programmato: raccontaci la situazione e scegliamo insieme come intervenire.</p>
        </div>
        <div className="rescue-services__grid">
          {services.map((s, index) => <Link href={`/servizi/${s.slug}/`} key={s.slug} className="rescue-service-card" data-reveal data-reveal-delay={String(index % 3)}>
            <div className="rescue-service-card__image"><Image src={s.image} alt={s.title} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" className="object-cover" /><span className="rescue-service-card__number">{String(index + 1).padStart(2, "0")}</span><span className="rescue-service-card__arrow" aria-hidden="true">↗</span></div>
            <div className="rescue-service-card__body"><h3>{s.title}</h3><p>{s.short}</p></div>
          </Link>)}
        </div>
      </div>
    </section>
  );
}

export function AboutPanel() {
  return (
    <section className="rescue-about section-pad">
      <div className="container rescue-about__grid">
        <div className="rescue-about__visual" data-reveal>
          <Image src="/images/recovery/c-about-main.webp" alt="Squadra di soccorso stradale al lavoro" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
          <div className="rescue-about__stamp"><span>MF</span><small>Cesena<br />Soccorso stradale</small></div>
        </div>
        <div data-reveal data-reveal-delay="2">
          <p className="rescue-kicker"><span>03</span> Un riferimento vicino</p>
          <h2>Un recupero fatto bene comincia <em>dall’ascolto.</em></h2>
          <div className="rescue-about__copy"><p>Carroattrezzi Cesena MF è un punto di contatto per chi ha un veicolo fermo e ha bisogno di capire come muoversi. Ascoltiamo la situazione prima di organizzare il recupero.</p><p>Ogni intervento parte da posizione, tipo di mezzo e problema. In questo modo possiamo valutare attrezzatura, modalità di carico e destinazione con maggiore attenzione.</p></div>
          <Link href="/about/" className="rescue-text-link">Conosci il nostro approccio <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}

export function ZonesGrid() {
  return (
    <section className="rescue-zones section-pad">
      <div className="container">
        <div className="rescue-section-heading" data-reveal>
          <div><p className="rescue-kicker rescue-kicker--light"><span>04</span> La rete sul territorio</p><h2>Vicino a Cesena,<br /><em>pronti a raggiungerti.</em></h2></div>
          <p>Consulta le località coperte e trova il riferimento per il tuo comune.</p>
        </div>
        <div className="rescue-zones__grid">{zones.map((z, index) => <Link href={`/zone/${z.slug}/`} key={z.slug} className="rescue-zone-link" data-reveal data-reveal-delay={String(index % 4)}><span>{String(index + 1).padStart(2, "0")}</span><strong>{z.title}</strong><i aria-hidden="true">↗</i></Link>)}</div>
      </div>
    </section>
  );
}

export function Faq() {
  const items = [
    ["Quando è il momento di chiamare il carroattrezzi?", "Quando l’auto non può ripartire in sicurezza, dopo un incidente, con batteria scarica, una gomma danneggiata o un guasto improvviso."],
    ["Dove può essere portato il veicolo?", "In officina, in deposito o verso un’altra destinazione concordata insieme, in base alle condizioni del mezzo."],
    ["Quali informazioni devo avere pronte?", "Indica la tua posizione, il tipo di veicolo e cosa è successo. Se puoi, aggiungi un riferimento visibile vicino al punto in cui ti trovi."],
    ["Effettuate anche trasporti programmati?", "Sì, oltre al soccorso urgente puoi contattarci per organizzare il trasporto di auto e veicoli non marcianti."],
  ];
  return <section className="rescue-faq section-pad"><div className="container"><div className="rescue-faq__heading" data-reveal><p className="rescue-kicker"><span>05</span> Risposte veloci</p><h2>Prima di chiamare,<br /><em>ecco cosa sapere.</em></h2></div><div className="rescue-faq__grid">{items.map(([q, a], index) => <article key={q} className="rescue-faq__item" data-reveal data-reveal-delay={String(index % 2)}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{q}</h3><p>{a}</p></div><i aria-hidden="true">+</i></article>)}</div></div></section>;
}

export function Cta() {
  return <section className="rescue-final-cta"><div className="container rescue-final-cta__inner" data-reveal><div><p>Fermo in strada?</p><h2>Parliamone.<br /><em>Ti aiutiamo a ripartire.</em></h2></div><Link href={`tel:${site.tel}`} className="rescue-button rescue-button--dark"><span className="rescue-button__icon" aria-hidden="true">↗</span><span><small>Chiama ora</small><strong>{site.phone}</strong></span></Link><div className="rescue-final-cta__ring" aria-hidden="true" /></div></section>;
}

export function PageIntro({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image?: string }) {
  return <section className="dispatch-page-intro">
    {image && <div className="dispatch-page-intro__image"><Image src={image} alt="" fill priority sizes="(max-width: 900px) 100vw, 40vw" className="object-cover" /></div>}
    <div className="container dispatch-page-intro__content" data-reveal>
      <p className="dispatch-page-intro__eyebrow"><span />{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
    <div className="dispatch-page-intro__index" aria-hidden="true">MF<span> / CESENA</span></div>
  </section>;
}
