import Link from "next/link";
import Image from "next/image";
import { DocsPage, getPageNeighbors, navigation } from "./docs-content";

export function DocsShell({ page }: Readonly<{ page: DocsPage }>) {
  const { previous, next } = getPageNeighbors(page);

  return (
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-900 bg-[#050816]/95 backdrop-blur">
        <div className=" flex h-16  items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <Image
              src="/cookie.jpeg"
              alt="Cookie Chain logo"
              width={36}
              height={36}
              priority
              className="size-9 rounded-lg border border-blue-500/20 object-cover shadow-sm shadow-blue-950/60"
            />
            <span>Cookie Chain</span>
          </Link>
          <div className="ml-auto hidden w-full max-w-sm items-center rounded-lg border border-slate-800 bg-black/50 px-3 py-2 text-sm text-slate-400 sm:flex">
            Search docs...
            <span className="ml-auto rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 text-xs text-slate-500">
              /
            </span>
          </div>
          <Link
            href="/getting-started"
            className="ml-auto rounded-lg bg-blue-500 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-blue-400 sm:ml-0"
          >
            Start
          </Link>
        </div>
      </header>

      <div className="mx-auto grid  grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden border-r border-slate-900 bg-[#050816]/80 px-6 py-8 lg:block">
          <nav className="sticky top-24 space-y-8 text-sm">
            {navigation.map((section) => (
              <div key={section.title}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {section.title}
                </p>
                <div className="space-y-1">
                  {section.links.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className={`block rounded-lg px-3 py-2 transition hover:bg-slate-900 hover:text-slate-100 ${
                        href === page.href
                          ? "bg-blue-500/10 font-medium text-blue-300"
                          : "text-slate-400"
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <section className="min-w-0">
          <div className="border-b border-slate-900 bg-[#050816] px-4 py-3 lg:hidden">
            <div className="flex gap-2 overflow-x-auto text-sm">
              {navigation
                .flatMap((section) => section.links)
                .map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className={`shrink-0 rounded-full border px-3 py-1.5 ${href === page.href ? "border-blue-500/40 bg-blue-500/10 text-blue-200" : "border-slate-800 text-slate-300"}`}
                  >
                    {label}
                  </Link>
                ))}
            </div>
          </div>

          <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
            <div className="mb-8 rounded-3xl border border-blue-500/15 bg-gradient-to-br from-black via-[#061124] to-[#081632] p-6 shadow-2xl shadow-black/40 sm:p-10">
              <p className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200">
                <Image
                  src="/cookie.jpeg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2 size-5 rounded-full object-cover"
                />
                {page.label}
              </p>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl">
                <span className="text-blue-400">/</span> {page.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                {page.description}
              </p>
            </div>

            <div className="space-y-5 text-slate-300">{page.content}</div>

            <div className="mt-12 grid gap-3 border-t border-slate-800 pt-6 sm:grid-cols-2">
              {previous ? (
                <Link
                  href={previous.href}
                  className="rounded-2xl border border-slate-900 bg-black/35 p-4 transition hover:border-blue-500/50"
                >
                  <p className="text-sm text-slate-500">Previous</p>
                  <p className="mt-1 font-semibold text-blue-200">
                    {previous.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={next.href}
                  className="rounded-2xl border border-slate-900 bg-black/35 p-4 text-right transition hover:border-blue-500/50"
                >
                  <p className="text-sm text-slate-500">Next</p>
                  <p className="mt-1 font-semibold text-blue-200">
                    {next.title}
                  </p>
                </Link>
              ) : null}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
