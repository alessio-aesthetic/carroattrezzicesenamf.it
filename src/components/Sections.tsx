import { services, site, zones } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#ecfdf5] pt-32 lg:pt-40">
      <div className="container grid gap-12 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-lime-200 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#10201d]">soccorso stradale Cesena</p>
          <h1 className="mb-6 text-4xl font-black leading-tight text-[#10201d] sm:text-5xl lg:text-7xl">Carroattrezzi a Cesena per guasti, incidenti e traino auto</h1>
          <p className="mb-8 text-lg leading-8 text-slate-700">Assistenza rapida per veicoli fermi, recupero auto, trasporto verso officina e interventi su strada. Una risposta chiara quando serve capire subito cosa fare.</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href={`tel:${site.tel}`} className="rounded-full bg-[#0f766e] px-8 py-4 text-center font-black text-white">Chiama {site.phone}</Link>
            <Link href="/servizi/" className="rounded-full border border-[#0f766e] px-8 py-4 text-center font-black text-[#0f766e]">Vedi servizi</Link>
          </div>
        </div>
        <div className="relative h-[520px] overflow-hidden rounded-[3rem] border-[10px] border-white shadow-2xl">
          <Image src="/images/recovery/hero-recovery.jpg" alt="Carroattrezzi a Cesena" fill priority className="object-cover" />
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="py-20">
      <div className="container grid gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#0f766e]">metodo pratico</p>
          <h2 className="text-3xl font-black text-[#10201d] lg:text-5xl">Un servizio di carroattrezzi deve togliere incertezza, non aggiungerla.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-700">
          <p>Quando l auto non riparte, il cliente ha bisogno di poche cose fatte bene: risposta chiara, indicazioni semplici e un intervento proporzionato al problema. Per questo chiediamo subito posizione, modello del mezzo, sintomi e destinazione preferita.</p>
          <p>Il carroattrezzi a Cesena viene organizzato in base alla situazione reale: guasto, incidente, gomma danneggiata, batteria scarica o trasporto programmato. L obiettivo e ridurre tempi, stress e rischi per il veicolo.</p>
          <p>Lavoriamo con attenzione al caricamento, al fissaggio e alla comunicazione. Ogni passaggio viene spiegato con parole semplici, cosi sai dove andra il mezzo e cosa aspettarti dopo il recupero.</p>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#0f766e]">servizi</p>
          <h2 className="text-3xl font-black text-[#10201d] lg:text-5xl">Servizi di soccorso stradale e traino</h2>
        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <Link href={`/servizi/${s.slug}/`} key={s.slug} className="group overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[#f8faf7] shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-52"><Image src={s.image} alt={s.title} fill className="object-cover transition duration-500 group-hover:scale-105" /></div>
            <div className="p-6"><h3 className="mb-3 text-xl font-black text-[#10201d]">{s.title}</h3><p className="leading-7 text-slate-600">{s.short}</p></div>
          </Link>)}
        </div>
      </div>
    </section>
  );
}

export function AboutPanel() {
  return (
    <section className="py-20">
      <div className="container grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="relative h-[500px] overflow-hidden rounded-[3rem]"><Image src="/images/recovery/workshop-car.jpg" alt="Assistenza carroattrezzi Cesena" fill className="object-cover" /></div>
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#0f766e]">chi siamo</p>
          <h2 className="mb-6 text-3xl font-black text-[#10201d] lg:text-5xl">Una squadra locale per recuperi, traini e trasporti gestiti con ordine.</h2>
          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>Carroattrezzi Cesena MF nasce per dare un riferimento diretto a chi si trova con un veicolo fermo. Non vendiamo promesse generiche: ascoltiamo il problema e organizziamo la soluzione piu sensata.</p>
            <p>Il servizio copre emergenze stradali, trasporti programmati, recupero dopo incidente e assistenza per auto, moto e mezzi leggeri. La priorita e sempre proteggere persone e veicolo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ZonesGrid() {
  return (
    <section className="bg-[#10201d] py-20 text-white">
      <div className="container">
        <div className="mb-10 max-w-3xl"><p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-lime-200">zone</p><h2 className="text-3xl font-black lg:text-5xl">Carroattrezzi a Cesena e comuni vicini</h2></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{zones.map((z) => <Link href={`/zone/${z.slug}/`} key={z.slug} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-black hover:bg-lime-200 hover:text-[#10201d]">{z.title}</Link>)}</div>
      </div>
    </section>
  );
}

export function Faq() {
  const items = [
    ["Quando devo chiamare?", "Quando il veicolo non puo ripartire in sicurezza, dopo un incidente, con batteria scarica, gomma rotta o guasto improvviso."],
    ["Dove portate il mezzo?", "In officina, in deposito o verso una destinazione concordata con il proprietario."],
    ["Serve una posizione precisa?", "Si, indicare via, incrocio o punto visibile permette di organizzare meglio l intervento."],
    ["Fate anche trasporti programmati?", "Si, oltre alle urgenze gestiamo spostamenti concordati di auto e veicoli non marcianti."],
  ];
  return <section className="py-20"><div className="container"><h2 className="mb-10 text-3xl font-black text-[#10201d] lg:text-5xl">Domande frequenti</h2><div className="grid gap-5 lg:grid-cols-2">{items.map(([q,a]) => <div key={q} className="rounded-[2rem] border border-emerald-900/10 bg-white p-7 shadow-sm"><h3 className="mb-3 text-xl font-black">{q}</h3><p className="leading-7 text-slate-600">{a}</p></div>)}</div></div></section>;
}

export function Cta() {
  return <section className="bg-lime-200 py-16"><div className="container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="text-3xl font-black text-[#10201d] lg:text-5xl">Veicolo fermo a Cesena?</h2><p className="mt-3 text-slate-700">Chiama e comunica posizione, veicolo e problema.</p></div><Link href={`tel:${site.tel}`} className="rounded-full bg-[#0f766e] px-8 py-4 text-center font-black text-white">{site.phone}</Link></div></section>;
}
