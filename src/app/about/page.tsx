import { AboutPanel, Cta, Faq, PageIntro } from "@/components/Sections";

export const metadata = {
  title: "Chi siamo",
  description: "Carroattrezzi Cesena MF: assistenza stradale, traino auto e recupero veicoli a Cesena con gestione chiara e professionale.",
};

export default function AboutPage() {
  return <main className="pt-20"><PageIntro eyebrow="Chi siamo" title="Un aiuto concreto, quando la giornata prende una brutta piega." text="Un servizio locale per recuperare veicoli, organizzare traini e gestire imprevisti su strada con metodo." image="/images/recovery/c-about-main.webp" /><AboutPanel /><Faq /><Cta /></main>;
}
