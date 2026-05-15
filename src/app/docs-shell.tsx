import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Boxes,
  Coins,
  Cookie,
  Cpu,
  GitBranch,
  HelpCircle,
  Landmark,
  LucideIcon,
  Pickaxe,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { DocsPage, getPageNeighbors, navigation } from "./docs-content";
import { DocsSearch } from "./docs-search";
import { MobileDocsNav } from "./mobile-docs-nav";

const pageIcons: Record<string, LucideIcon> = {
  "/": Cookie,
  "/getting-started": Rocket,
  "/for-degens": Sparkles,
  "/wallets": Wallet,
  "/architecture": Cpu,
  "/cook": Coins,
  "/validators": ShieldCheck,
  "/bridge": GitBranch,
  "/bridge-mechanism": Zap,
  "/for-builders": Pickaxe,
  "/developer-guide": BookOpen,
  "/cookie-jar": Landmark,
  "/ecosystem": Boxes,
  "/governance": Users,
  "/faq": HelpCircle,
};

const sectionIcons: Record<string, LucideIcon> = {
  Overview: BookOpen,
  "The Chain": GitBranch,
  Building: Pickaxe,
  Community: Users,
};

export function DocsShell({ page }: Readonly<{ page: DocsPage }>) {
  const { previous, next } = getPageNeighbors(page);
  const PageIcon = pageIcons[page.href] ?? BookOpen;

  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-[#0b1324]/95 backdrop-blur">
        <div className="flex h-16 items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <Image
              src="/cookie.jpeg"
              alt="Cookie Chain logo"
              width={36}
              height={36}
              priority
              className="size-9 rounded-md border border-blue-500/20 object-cover shadow-sm shadow-blue-950/60"
            />
            <div className="flex flex-col -space-y-1">
              <span className="text-sm sm:text-base">Cookie Chain</span>
              <span className="text-xs sm:text-sm text-blue-400">Docs</span>
            </div>
          </Link>
          <DocsSearch />
          <Link
            href="/getting-started"
            className="ml-auto rounded-md bg-blue-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-400 sm:ml-0 sm:px-3.5"
          >
            Start
          </Link>
        </div>
      </header>

      <div className="mx-auto grid  grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] overflow-y-auto border-r border-slate-800 bg-[#0b1324]/80 px-6 py-8 lg:block">
          <nav className="space-y-8 pr-1 text-sm">
            {navigation.map((section) => {
              const SectionIcon = sectionIcons[section.title] ?? BookOpen;

              return (
                <div key={section.title}>
                  <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    <SectionIcon className="size-3.5 text-blue-400/80" />
                    {section.title}
                  </p>
                  <div className="space-y-1">
                    {section.links.map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        className={`block rounded-md px-3 py-2 transition hover:bg-slate-900 hover:text-slate-100 ${
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
              );
            })}
          </nav>
        </aside>

        <section className="min-w-0">
          <MobileDocsNav currentHref={page.href} />

          <article className="mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
            <div className="mb-8 rounded-xl border border-blue-400/25 bg-gradient-to-br from-slate-950 via-[#102044] to-[#12306a] p-4 shadow-2xl shadow-blue-950/30 sm:p-10">
              <div className="border-l-2 border-blue-400/70 pl-4 sm:border-l-0 sm:pl-0">
                <p className="mb-4 inline-flex items-center rounded-md border border-blue-400/30 bg-blue-500/10 px-2 py-2 text-xs font-medium text-blue-200 sm:px-2 sm:text-sm">
                  <Image
                    src="/cookie.jpeg"
                    alt=""
                    width={20}
                    height={20}
                    className="mr-2 size-4 rounded-sm object-cover sm:size-5"
                  />
                  {page.label}
                </p>
                <h1 className="flex max-w-5xl items-start gap-3 text-[2rem] font-bold leading-[1.08] tracking-tight text-blue-200 sm:gap-4 sm:text-6xl">
                  <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-lg border border-blue-400/25 bg-blue-500/10 text-blue-300 sm:mt-2 sm:size-14">
                    <PageIcon className="size-5 sm:size-8" />
                  </span>
                  <span>
                    <span className="mr-1 text-blue-400 sm:mr-2">/</span>
                    {page.title}
                  </span>
                </h1>
                <p className="mt-4 max-w-5xl text-[15px] leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
                  {page.description}
                </p>
              </div>
            </div>

            <div className="space-y-5 text-slate-300">{page.content}</div>

            <div className="mt-12 grid gap-3 border-t border-slate-800 pt-6 sm:grid-cols-2">
              {previous ? (
                <Link
                  href={previous.href}
                  className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 transition hover:border-blue-500/50"
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
                  className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-right transition hover:border-blue-500/50"
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
