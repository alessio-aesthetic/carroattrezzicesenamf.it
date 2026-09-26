import { Cta, ServicesGrid, PageIntro } from "@/components/Sections";

export const metadata = {
  title: "Servizi carroattrezzi a Cesena",
  description: "Servizi di carroattrezzi a Cesena: soccorso stradale, traino auto, recupero veicoli, assistenza batteria, cambio gomma e trasporto auto.",
};

export default function ServicesPage() {
  return <main className="pt-20"><PageIntro eyebrow="Cosa facciamo" title="Dalla ruota bloccata al viaggio da riprendere." text="Traino, recupero e assistenza stradale per auto ferme, incidenti e trasporti programmati." image="/images/recovery/c-service-01-soccorso-stradale-24h.webp" /><ServicesGrid /><Cta /></main>;
}
