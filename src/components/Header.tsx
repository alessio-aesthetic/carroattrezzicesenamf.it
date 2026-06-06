"use client";

import { services, site, zones } from "@/lib/site";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition ${sticky ? "border-b border-emerald-900/10 bg-white/95 shadow-sm backdrop-blur" : "bg-white/80 backdrop-blur"}`}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-12 w-12 rotate-45 items-center justify-center rounded-[18px] bg-[#0f766e] shadow-lg shadow-emerald-800/20">
            <span className="-rotate-45 text-lg font-black text-lime-200">MF</span>
          </span>
          <span>
            <span className="block text-lg font-black tracking-tight text-[#10201d]">Carroattrezzi Cesena</span>
            <span className="block text-xs font-extrabold uppercase tracking-[0.22em] text-[#0f766e]">mobile fast</span>
          </span>
        </Link>
        <button onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 px-4 py-2 font-bold lg:hidden">Menu</button>
        <nav className={`${open ? "block" : "hidden"} absolute left-4 right-4 top-24 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
          <ul className="flex flex-col gap-3 font-bold text-slate-800 lg:flex-row lg:items-center lg:gap-7">
            <li><Link href="/">Home</Link></li>
            <li className="group relative">
              <span>Servizi</span>
              <div className="mt-2 grid gap-1 rounded-2xl bg-white p-2 lg:invisible lg:absolute lg:left-0 lg:top-full lg:w-80 lg:border lg:border-slate-100 lg:opacity-0 lg:shadow-xl lg:group-hover:visible lg:group-hover:opacity-100">
                <Link className="rounded-xl px-3 py-2 hover:bg-emerald-50" href="/servizi/">Tutti i servizi</Link>
                {services.map((s) => <Link className="rounded-xl px-3 py-2 text-sm hover:bg-emerald-50" key={s.slug} href={`/servizi/${s.slug}/`}>{s.title.replace(" a Cesena", "")}</Link>)}
              </div>
            </li>
            <li className="group relative">
              <span>Zone</span>
              <div className="mt-2 grid gap-1 rounded-2xl bg-white p-2 lg:invisible lg:absolute lg:left-0 lg:top-full lg:w-72 lg:border lg:border-slate-100 lg:opacity-0 lg:shadow-xl lg:group-hover:visible lg:group-hover:opacity-100">
                {zones.map((z) => <Link className="rounded-xl px-3 py-2 text-sm hover:bg-emerald-50" key={z.slug} href={`/zone/${z.slug}/`}>{z.title}</Link>)}
              </div>
            </li>
            <li><Link href="/about/">Chi siamo</Link></li>
            <li><Link href="/contact/">Contatti</Link></li>
          </ul>
        </nav>
        <Link href={`tel:${site.tel}`} className="hidden rounded-full bg-[#0f766e] px-5 py-3 font-black text-white shadow-lg shadow-emerald-800/20 lg:inline-flex">{site.phone}</Link>
      </div>
      <Link href={`tel:${site.tel}`} className="fixed bottom-4 left-4 right-4 z-[80] rounded-full bg-[#0f766e] px-5 py-4 text-center font-black text-white shadow-2xl lg:hidden">Chiama {site.phone}</Link>
    </header>
  );
}
