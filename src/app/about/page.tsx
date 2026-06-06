import { AboutPanel, Cta, Faq } from "@/components/Sections";

export const metadata = {
  title: "Chi siamo",
  description: "Carroattrezzi Cesena MF: assistenza stradale, traino auto e recupero veicoli a Cesena con gestione chiara e professionale.",
};

export default function AboutPage() {
  return <main className="pt-20"><section className="bg-[#10201d] py-20 text-white"><div className="container max-w-4xl"><p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-lime-200">chi siamo</p><h1 className="mb-6 text-4xl font-black lg:text-6xl">Carroattrezzi a Cesena con assistenza concreta e comunicazione chiara</h1><p className="text-lg leading-8 text-emerald-50/80">Un servizio locale per recuperare veicoli, organizzare traini e gestire imprevisti su strada con metodo.</p></div></section><AboutPanel /><Faq /><Cta /></main>;
}
