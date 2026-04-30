import { DocsShell } from "./docs-shell";
import { getDocsPage } from "./docs-content";

export default function Home() {
  return <DocsShell page={getDocsPage("introduction")!} />;
}
