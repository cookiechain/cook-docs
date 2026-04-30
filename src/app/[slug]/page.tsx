import { notFound } from "next/navigation";
import { DocsShell } from "../docs-shell";
import { docsPages, getDocsPage } from "../docs-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return docsPages.filter((page) => page.href !== "/").map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getDocsPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | Cookie Chain Docs`,
    description: page.description,
  };
}

export default async function DocsTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getDocsPage(slug);

  if (!page || page.href === "/") {
    notFound();
  }

  return <DocsShell page={page} />;
}
