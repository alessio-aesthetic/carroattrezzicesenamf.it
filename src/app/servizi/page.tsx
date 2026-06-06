import { Cta, ServicesGrid } from "@/components/Sections";

export const metadata = {
  title: "Servizi carroattrezzi a Cesena",
  description: "Servizi di carroattrezzi a Cesena: soccorso stradale, traino auto, recupero veicoli, assistenza batteria, cambio gomma e trasporto auto.",
};

export default function ServicesPage() {
  return <main className="pt-20"><section className="bg-[#10201d] py-20 text-white"><div className="container max-w-4xl"><p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-lime-200">servizi</p><h1 className="mb-6 text-4xl font-black lg:text-6xl">Servizi carroattrezzi a Cesena</h1><p className="text-lg leading-8 text-emerald-50/80">Traino, recupero e assistenza stradale per auto ferme, incidenti e trasporti programmati.</p></div></section><ServicesGrid /><Cta /></main>;
}
