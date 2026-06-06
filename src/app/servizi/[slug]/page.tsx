import { Cta } from "@/components/Sections";
import { services, site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return { title: service.title, description: `${service.title}: soccorso stradale, traino e recupero veicoli. Chiama ${site.phone}.`, alternates: { canonical: `${site.url}/servizi/${service.slug}/` } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const paragraphs = service.body;
  return <main className="pt-20"><section className="relative overflow-hidden bg-[#10201d] py-24 text-white"><Image src={service.image} alt={service.title} fill priority className="object-cover opacity-25" /><div className="absolute inset-0 bg-[#10201d]/75" /><div className="container relative max-w-4xl"><p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-lime-200">servizio</p><h1 className="mb-6 text-4xl font-black lg:text-6xl">{service.title}</h1><p className="text-lg leading-8 text-emerald-50/80">{service.short}</p><Link href={`tel:${site.tel}`} className="mt-8 inline-flex rounded-full bg-lime-200 px-8 py-4 font-black text-[#10201d]">Chiama {site.phone}</Link></div></section><section className="py-20"><div className="container grid gap-12 lg:grid-cols-[0.7fr_0.3fr]"><article className="space-y-7 text-lg leading-8 text-slate-700">{paragraphs.map((p,i)=><p key={i}>{p}</p>)}<h2 className="text-3xl font-black text-[#10201d]">Domande frequenti</h2>{service.faq.map(([q,a])=><div key={q} className="rounded-[2rem] bg-white p-6 shadow-sm"><h3 className="mb-2 text-xl font-black">{q}</h3><p>{a}</p></div>)}</article><aside className="h-fit rounded-[2rem] bg-emerald-50 p-7"><h2 className="mb-4 text-2xl font-black">Serve assistenza?</h2><p className="mb-6 text-slate-600">Chiama e descrivi posizione, veicolo e problema.</p><Link href={`tel:${site.tel}`} className="block rounded-full bg-[#0f766e] px-6 py-4 text-center font-black text-white">{site.phone}</Link></aside></div></section><Cta /></main>;
}
