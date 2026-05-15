"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyableCode({ children }: Readonly<{ children: string }>) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={copyCode}
        aria-label="Copy code"
        className="absolute right-3 top-3 grid size-8 place-items-center rounded-md border border-blue-400/20 bg-slate-950/80 text-blue-200 transition hover:border-blue-300 hover:text-white"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
      {copied ? (
        <div className="fixed right-4 top-20 z-50 flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/95 px-4 py-3 text-sm font-medium text-slate-100 shadow-2xl shadow-black/50 backdrop-blur sm:right-6">
          <span className="grid size-6 place-items-center rounded-md bg-blue-500/15 text-blue-300">
            <Check className="size-3.5" />
          </span>
          Copied to clipboard
        </div>
      ) : null}
      <pre className="overflow-x-auto rounded-lg border border-blue-500/20 bg-black/50 p-5 pr-20 text-sm leading-7 text-blue-100">
        <code>{children}</code>
      </pre>
    </div>
  );
}
