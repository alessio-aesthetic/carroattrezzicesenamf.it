import { Cta } from "@/components/Sections";
import { site, zones } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() { return zones.map((zone) => ({ slug: zone.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const zone = zones.find((item) => item.slug === slug);
  if (!zone) return {};
  return { title: zone.title, description: `${zone.title}: soccorso stradale, traino auto e recupero veicoli. Chiama ${site.phone}.`, alternates: { canonical: `${site.url}/zone/${zone.slug}/` } };
}

export default async function ZonePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const zone = zones.find((item) => item.slug === slug);
  if (!zone) notFound();
  const paragraphs = zone.body;
  return <main className="pt-20"><section className="relative overflow-hidden bg-[#10201d] py-20 text-white"><Image src={zone.image} alt={zone.title} fill priority className="object-cover opacity-25" /><div className="absolute inset-0 bg-[#10201d]/80" /><div className="container relative max-w-4xl"><p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-lime-200">zona servita</p><h1 className="mb-6 text-4xl font-black lg:text-6xl">{zone.title}</h1><p className="text-lg leading-8 text-emerald-50/80">Assistenza stradale, traino auto e recupero veicoli nella zona di {zone.name}.</p></div></section><section className="py-20"><div className="container grid gap-12 lg:grid-cols-[0.7fr_0.3fr]"><article className="space-y-7 text-lg leading-8 text-slate-700">{paragraphs.map((p,i)=><p key={i}>{p}</p>)}<h2 className="text-3xl font-black text-[#10201d]">Aree coperte a {zone.name}</h2><p>Interveniamo in centro, zone residenziali, aree artigianali, parcheggi, strade provinciali e collegamenti verso Cesena. Una posizione precisa aiuta a organizzare il recupero in modo più rapido.</p></article><aside className="h-fit rounded-[2rem] bg-emerald-50 p-7"><h2 className="mb-4 text-2xl font-black">Chiama da {zone.name}</h2><p className="mb-6 text-slate-600">Comunica posizione e problema del veicolo.</p><Link href={`tel:${site.tel}`} className="block rounded-full bg-[#0f766e] px-6 py-4 text-center font-black text-white">{site.phone}</Link></aside></div></section><Cta /></main>;
}
