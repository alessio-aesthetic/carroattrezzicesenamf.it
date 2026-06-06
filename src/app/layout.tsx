import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/lib/site";
import "@/styles/index.css";
import Providers from "./providers";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Carroattrezzi a Cesena 24H | Soccorso Stradale",
    template: "%s | Carroattrezzi Cesena MF",
  },
  description: "Carroattrezzi a Cesena per soccorso stradale, traino auto, recupero veicoli e assistenza urgente. Chiama 0547 040096.",
  openGraph: {
    title: "Carroattrezzi a Cesena 24H",
    description: "Soccorso stradale, traino auto e recupero veicoli a Cesena e provincia.",
    url: site.url,
    siteName: site.domain,
    images: ["/images/recovery/c-hero-main.webp"],
    locale: "it_IT",
    type: "website",
  },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="it"><body><Providers><Header />{children}<Footer /></Providers></body></html>;
}
