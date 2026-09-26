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
    <>
    <header className={`site-header fixed left-0 top-0 z-50 w-full transition ${sticky ? "is-sticky" : ""}`}>
      <div className="container flex h-[86px] items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/images/brand/logo-cesena.png" alt="Carroattrezzi Cesena" className="h-auto w-44 max-w-full" />
        </Link>
        <button aria-label={open ? "Chiudi menu" : "Apri menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="site-menu-toggle lg:hidden"><span /><span /></button>
        <nav className={`${open ? "block" : "hidden"} site-nav absolute left-4 right-4 top-24 rounded-3xl p-5 lg:static lg:block lg:p-0`}>
          <ul className="flex flex-col gap-3 font-bold lg:flex-row lg:items-center lg:gap-7">
            <li><Link href="/">Home</Link></li>
            <li className="group relative">
              <span className="site-nav__trigger block cursor-default py-2">Servizi</span>
              <div className="site-nav__dropdown grid gap-1 rounded-2xl p-2 lg:invisible lg:absolute lg:left-0 lg:top-full lg:w-80 lg:opacity-0 lg:transition lg:group-hover:visible lg:group-hover:opacity-100">
                <Link className="rounded-xl px-3 py-2" href="/servizi/">Tutti i servizi</Link>
                {services.map((s) => <Link className="rounded-xl px-3 py-2 text-sm" key={s.slug} href={`/servizi/${s.slug}/`}>{s.title.replace(" a Cesena", "")}</Link>)}
              </div>
            </li>
            <li className="group relative">
              <span className="site-nav__trigger block cursor-default py-2">Zone</span>
              <div className="site-nav__dropdown grid gap-1 rounded-2xl p-2 lg:invisible lg:absolute lg:left-0 lg:top-full lg:w-72 lg:opacity-0 lg:transition lg:group-hover:visible lg:group-hover:opacity-100">
                {zones.map((z) => <Link className="rounded-xl px-3 py-2 text-sm" key={z.slug} href={`/zone/${z.slug}/`}>{z.title}</Link>)}
              </div>
            </li>
            <li><Link href="/about/">Chi siamo</Link></li>
            <li><Link href="/contact/">Contatti</Link></li>
          </ul>
        </nav>
        <Link href={`tel:${site.tel}`} className="site-header__call hidden rounded-full px-5 py-3 font-black lg:inline-flex">Chiama {site.phone}</Link>
      </div>
    </header>
    <Link href={`tel:${site.tel}`} className="site-mobile-call fixed bottom-4 left-4 right-4 z-[80] px-5 py-4 text-center font-black lg:hidden"><span className="site-mobile-call__pulse" />Chiama {site.phone}<span aria-hidden="true">↗</span></Link>
    </>
  );
}
