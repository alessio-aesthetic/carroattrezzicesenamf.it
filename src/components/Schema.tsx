import { site } from "@/lib/site";

export default function Schema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: site.tel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Cerchia di Sant'Egidio, 95",
      postalCode: "47521",
      addressLocality: "Cesena",
      addressRegion: "FC",
      addressCountry: "IT",
    },
    areaServed: ["Cesena", "Cesenatico", "Forli", "Gambettola", "Savignano sul Rubicone"],
    openingHours: "Mo-Su 00:00-23:59",
    image: `${site.url}/images/recovery/hero-recovery.jpg`,
    priceRange: "$$",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
