"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchIndex } from "./docs-content";

export function DocsSearch({ mobile = false }: Readonly<{ mobile?: boolean }>) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return searchIndex.slice(0, 6);
    }

    return searchIndex
      .map((item) => {
        const haystack = `${item.title} ${item.section} ${item.terms}`.toLowerCase();
        const titleMatch = item.title.toLowerCase().includes(value) ? 2 : 0;
        const bodyMatch = haystack.includes(value) ? 1 : 0;
        return { item, score: titleMatch + bodyMatch };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .slice(0, 8)
      .map(({ item }) => item);
  }, [query]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const isTyping = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable;

      if (event.key === "/" && !isTyping) {
        event.preventDefault();
        setOpen(true);
        inputRef.current?.focus();
      }

      if (event.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={`relative w-full ${mobile ? "block" : "ml-auto hidden max-w-md sm:block"}`}>
      <div className="flex items-center gap-2 rounded-md border border-slate-700/70 bg-slate-900/75 px-3 py-2 text-sm shadow-sm shadow-black/20 transition focus-within:border-blue-400/70 focus-within:bg-slate-900">
        <Search className="size-4 text-slate-500" />
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search documentation..."
          className="min-w-0 flex-1 bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
        />
        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            className="grid size-5 place-items-center rounded text-slate-500 transition hover:bg-slate-800 hover:text-slate-200"
          >
            <X className="size-3.5" />
          </button>
        ) : (
          <span className="rounded border border-slate-700 bg-slate-950 px-1.5 py-0.5 text-xs text-slate-500">/</span>
        )}
      </div>

      {open ? (
        <div className="absolute right-0 top-12 z-50 w-full overflow-hidden rounded-lg border border-slate-700 bg-slate-950/98 shadow-2xl shadow-black/50 backdrop-blur">
          <div className="border-b border-slate-800 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            {query ? "Search results" : "Popular docs"}
          </div>
          <div className="max-h-96 overflow-y-auto p-1.5">
            {results.length ? (
              results.map((result) => (
                <Link
                  key={result.href}
                  href={result.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 transition hover:bg-blue-500/10"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium text-slate-100">{result.title}</span>
                    <span className="shrink-0 rounded border border-slate-800 px-1.5 py-0.5 text-[11px] text-slate-500">
                      {result.section}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-1 text-xs text-slate-500">{result.terms}</p>
                </Link>
              ))
            ) : (
              <div className="px-3 py-8 text-center text-sm text-slate-500">
                No docs found for “{query}”.
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
