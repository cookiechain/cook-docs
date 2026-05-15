"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { navigation } from "./docs-content";
import { DocsSearch } from "./docs-search";

export function MobileDocsNav({ currentHref }: Readonly<{ currentHref: string }>) {
  const [open, setOpen] = useState(false);
  const current = navigation.flatMap((section) => section.links).find(([, href]) => href === currentHref)?.[0] ?? "Docs";

  return (
    <div className="relative space-y-3 border-b border-slate-800 bg-[#0b1324] px-4 py-3 lg:hidden">
      <DocsSearch mobile />
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between rounded-md border border-slate-700/70 bg-slate-900/80 px-3 py-2.5 text-left text-sm font-medium text-slate-100 shadow-sm shadow-black/20"
      >
        <span className="min-w-0 truncate">{current}</span>
        <ChevronDown className={`size-4 shrink-0 text-slate-400 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div className="absolute left-4 right-4 top-[62px] z-40 overflow-hidden rounded-lg border border-slate-700 bg-slate-950 shadow-2xl shadow-black/50">
          <div className="max-h-[70vh] overflow-y-auto p-2">
            {navigation.map((section) => (
              <div key={section.title} className="py-1.5">
                <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {section.title}
                </p>
                <div className="space-y-1">
                  {section.links.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md px-2.5 py-2 text-sm transition ${
                        href === currentHref
                          ? "bg-blue-500/10 font-medium text-blue-200"
                          : "text-slate-300 hover:bg-slate-900 hover:text-white"
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
