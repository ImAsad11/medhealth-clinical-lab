"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site-data";

function isLinkActive(pathname: string, href: string) {
  const clean = href.split("#")[0] || "/";
  if (clean === "/") return pathname === "/";
  return pathname === clean || pathname.startsWith(`${clean}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-base/98 backdrop-blur-sm border-b border-line">
      <div className="hidden md:flex bg-teal-700 text-sm">
        <div className="container-content flex items-center justify-between gap-10 py-2 text-[#E3EEF7]">
          <div className="flex items-center gap-6 whitespace-nowrap">
            <a href={SITE.phoneHref} className="hover:text-white transition-colors">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
              {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-6 whitespace-nowrap text-[#C9DCEC]">
            <Link href="/locations" className="hover:text-white transition-colors">
              6 collection points across Pakistan
            </Link>
            <a
              href={SITE.reportPortalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Online Reports ↗
            </a>
          </div>
        </div>
      </div>

      <div className="container-content flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-icon.png"
            alt="Med Health Clinical Lab"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-coral-500">
              Med Health
            </span>
            <span className="eyebrow text-teal-500">Clinical Lab</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(pathname, link.href);
            return (
              <div key={link.label} className="group relative">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:origin-left after:scale-x-0 after:bg-teal-500 after:transition-transform after:duration-150 hover:text-teal-500 ${
                    active ? "text-teal-500 after:scale-x-100" : "text-ink/80"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" className="mt-0.5">
                      <path d="M1 1L4.5 4.5L8 1" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  )}
                </Link>

                {link.children && (
                  <div className="absolute left-0 top-full w-64 -translate-y-1 border border-line bg-white py-2 opacity-0 shadow-lg shadow-black/5 transition-[opacity,transform] duration-150 ease-out pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-ink/70 transition-colors duration-150 hover:bg-panel hover:text-coral-500"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex btn-coral">
            Book Appointment
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex h-10 w-10 items-center justify-center border border-line"
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M0 1H18" stroke="#0B2540" strokeWidth="1.5" />
              <path d="M0 6H18" stroke="#0B2540" strokeWidth="1.5" />
              <path d="M0 11H18" stroke="#0B2540" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-base max-h-[80vh] overflow-y-auto">
          <nav className="container-content flex flex-col py-4">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(pathname, link.href);
              return (
                <div key={link.label} className="border-b border-line">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex-1 py-3 text-sm font-medium transition-colors ${
                        active ? "text-teal-500" : "text-ink/80"
                      }`}
                    >
                      {link.label}
                      {active && <span className="ml-2 text-xs text-coral-500">●</span>}
                    </Link>
                    {link.children && (
                      <button
                        aria-label={`Toggle ${link.label} submenu`}
                        onClick={() =>
                          setOpenMobileMenu(openMobileMenu === link.label ? null : link.label)
                        }
                        className="p-3 text-ink/50"
                      >
                        {openMobileMenu === link.label ? "−" : "+"}
                      </button>
                    )}
                  </div>
                  {link.children && openMobileMenu === link.label && (
                    <div className="pb-2 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-ink/60"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-coral mt-4 justify-center">
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
