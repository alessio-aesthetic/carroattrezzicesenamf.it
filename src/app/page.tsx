import Schema from "@/components/Schema";
import { AboutPanel, Cta, Faq, Hero, Intro, ServicesGrid, ZonesGrid } from "@/components/Sections";

export const metadata = {
  title: "Carroattrezzi a Cesena 24H | Soccorso Stradale",
  description: "Carroattrezzi a Cesena per guasti, incidenti, traino auto, recupero veicoli e trasporto verso officina. Chiama 0547 040096.",
};

export default function Home() {
  return <main><Schema /><Hero /><Intro /><ServicesGrid /><AboutPanel /><ZonesGrid /><Faq /><Cta /></main>;
}
