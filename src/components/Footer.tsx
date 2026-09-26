import { services, site, zones } from "@/lib/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer py-14 text-white">
      <div className="container grid gap-10 lg:grid-cols-4">
        <div>
          <img src="/images/brand/logo-cesena.png" alt="Carroattrezzi Cesena" className="mb-4 h-auto w-60 max-w-full" />
          <p className="text-emerald-50/75">Soccorso stradale, traino auto e recupero veicoli a Cesena e provincia.</p>
          <div className="mt-5 space-y-2 text-sm text-emerald-50/75">
            <p>{site.address}</p>
            <p><a href={`tel:${site.tel}`}>{site.phone}</a></p>
            <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-black">Servizi</h3>
          <ul className="space-y-2 text-sm text-emerald-50/75">{services.slice(0, 8).map((s) => <li key={s.slug}><Link href={`/servizi/${s.slug}/`}>{s.title.replace(" a Cesena", "")}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="mb-4 font-black">Zone</h3>
          <ul className="space-y-2 text-sm text-emerald-50/75">{zones.slice(0, 8).map((z) => <li key={z.slug}><Link href={`/zone/${z.slug}/`}>{z.name}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="mb-4 font-black">Emergenza?</h3>
          <p className="mb-5 text-sm text-emerald-50/75">Chiama e comunica posizione, veicolo e problema. Ti aiutiamo a scegliere la soluzione corretta.</p>
          <Link className="site-footer__button inline-flex rounded-full px-5 py-3 font-black" href={`tel:${site.tel}`}>Chiama ora</Link>
        </div>
      </div>
    </footer>
  );
}
