import Link from "next/link";

export const navigation = [
  { title: "Overview", links: [["Introduction", "/"], ["Getting Started", "/getting-started"], ["For Degens", "/for-degens"], ["Wallets", "/wallets"]] },
  { title: "The Chain", links: [["Architecture & Consensus", "/architecture"], ["COOK (Native Token)", "/gcash"], ["Validators", "/validators"], ["Multi-sig Bridge", "/bridge"], ["Bridge Mechanism", "/bridge-mechanism"]] },
  { title: "Building", links: [["For Builders", "/for-builders"], ["Developer Guide", "/developer-guide"], ["Ecosystem Programs", "/ecosystem"]] },
  { title: "Community", links: [["Governance", "/governance"], ["FAQ", "/faq"]] },
];

export const pageOrder = navigation.flatMap((section) => section.links).map(([title, href]) => ({ title, href }));

function H3({ children }: Readonly<{ children: React.ReactNode }>) {
  return <h3 className="pt-2 text-xl font-semibold text-blue-100"><span className="text-blue-400">#</span> {children}</h3>;
}

function P({ children }: Readonly<{ children: React.ReactNode }>) {
  return <p className="leading-8 text-slate-300">{children}</p>;
}

function List({ children }: Readonly<{ children: React.ReactNode }>) {
  return <ul className="ml-6 list-disc space-y-2 leading-7 marker:text-blue-400">{children}</ul>;
}

function Code({ children }: Readonly<{ children: string }>) {
  return <pre className="overflow-x-auto rounded-2xl border border-blue-500/20 bg-black/50 p-5 text-sm leading-7 text-blue-100"><code>{children}</code></pre>;
}

function InlineCode({ children }: Readonly<{ children: React.ReactNode }>) {
  return <code className="rounded-md border border-blue-400/20 bg-blue-500/10 px-1.5 py-0.5 font-mono text-sm text-blue-200">{children}</code>;
}

function Callout({ children, tone = "info" }: Readonly<{ children: React.ReactNode; tone?: "info" | "warn" }>) {
  const toneClass = tone === "warn" ? "border-orange-400/30 bg-orange-500/10 text-orange-100" : "border-blue-400/30 bg-blue-500/10 text-blue-100";
  return <div className={`rounded-2xl border p-4 leading-7 ${toneClass}`}>{children}</div>;
}

function ExternalLink({ href, children }: Readonly<{ href: string; children: React.ReactNode }>) {
  return <a href={href} target="_blank" rel="noreferrer" className="font-medium text-blue-300 underline underline-offset-4">{children}</a>;
}

const linkClass = "text-blue-300 underline underline-offset-4";

export const docsPages = [
  {
    slug: "introduction",
    href: "/",
    label: "Overview",
    title: "Welcome to Cookie Chain",
    description: "A community-run Solana fork with COOK as the native asset, multi-validator operation, and community governance.",
    content: <>
      <P>Cookie Chain is a community-run Solana fork. It began from a Solana fork whose early community developers built a working chain and ecosystem. When the core team vision no longer aligned with the community, the community forked the fork and kept shipping.</P>
      <P>Today, Cookie Chain is operated by an expanding multi-validator set, uses <InlineCode>COOK</InlineCode> as its native asset, and is centered on real validators, real governance, and active development.</P>
      <H3>What makes Cookie Chain different</H3>
      <List>
        <li><strong>Solana compatible:</strong> SPL tokens, programs, and tooling work out of the box.</li>
        <li><strong>Community operated:</strong> no foundation gate and no single operator.</li>
        <li><strong>Multi-sig bridge:</strong> COOK moves between Solana and Cookie Chain through an m-of-n community multi-sig, so no single key controls the vault.</li>
        <li><strong>Sub-second finality:</strong> around 1 second block times with Solana-style consensus.</li>
        <li><strong>Minimal fees:</strong> fees are paid in COOK and priced for builders and users.</li>
        <li><strong>Dirt-cheap program deploys:</strong> program deployment is inexpensive compared with Solana mainnet, making iteration and redeploys practical.</li>
      </List>
      <Callout>New here? Start with <Link href="/getting-started" className="underline">Getting Started</Link> to connect a wallet and send your first transaction.</Callout>
    </>,
  },
  {
    slug: "getting-started",
    href: "/getting-started",
    label: "Overview",
    title: "Getting Started",
    description: "Connect to Cookie Chain in minutes with the Solana CLI, Nightly wallet, and the community RPC.",
    content: <>
      <P>You can connect to Cookie Chain in minutes if you already have the Solana toolchain installed.</P>
      <H3>1. Point the Solana CLI at Cookie Chain</H3><Code>{"solana config set --url https://community-rpc.trashscan.io/"}</Code>
      <H3>2. Check the connection</H3><Code>{"solana cluster-version"}</Code>
      <H3>3. Create or import a wallet</H3><Code>{"solana-keygen new --outfile ~/.config/solana/id.json\nsolana address\nsolana balance"}</Code>
      <P>Wallet support includes <strong>Nightly</strong>. Install it from <ExternalLink href="https://nightly.app/">nightly.app</ExternalLink> and connect to Cookie Chain with the community RPC endpoint.</P>
      <H3>4. Get COOK</H3><P>Bridge COOK from Solana through the community multi-sig bridge at <ExternalLink href="https://bridge.trashscan.io">bridge.trashscan.io</ExternalLink>. Deposits and withdrawals are authorized by an m-of-n community signer set.</P>
      <H3>5. Explore</H3><List><li>Block explorer: <ExternalLink href="https://trashscan.io">trashscan.io</ExternalLink></li><li>Deployed programs: <ExternalLink href="https://trashscan.io/programs">/programs</ExternalLink></li><li>Validator set: <ExternalLink href="https://trashscan.io/validators">/validators</ExternalLink></li></List>
    </>,
  },
  {
    slug: "for-degens",
    href: "/for-degens",
    label: "Overview",
    title: "For Degens",
    description: "A fast, safer path for trading, bridging, exploring apps, and moving through the ecosystem.",
    content: <>
      <P>If you are here to trade, bridge, hunt early apps, or move fast through the ecosystem, start with the shortest safe path: wallet, RPC, COOK, bridge, explorer, then live programs.</P>
      <H3>Degen quick path</H3><List><li>Install <ExternalLink href="https://nightly.app/">Nightly</ExternalLink> and add the Cookie Chain RPC.</li><li>Bridge COOK through <ExternalLink href="https://bridge.trashscan.io">bridge.trashscan.io</ExternalLink>.</li><li>Track balances, transactions, blocks, and validators on <ExternalLink href="https://trashscan.io">trashscan.io</ExternalLink>.</li><li>Explore live programs and ecosystem dApps from the <ExternalLink href="https://trashscan.io/programs">Programs</ExternalLink> page.</li></List>
      <H3>Before you ape</H3><List><li>Verify bridge, RPC, and app URLs before signing.</li><li>Use a hot wallet for daily dApp activity and a separate wallet for storage.</li><li>Keep enough COOK for fees before interacting with programs.</li><li>Check explorer activity and program pages before trusting a new app.</li></List>
      <Callout>Fast path: <Link href="/wallets" className="underline">Wallets</Link> → <Link href="/gcash" className="underline">COOK</Link> → <Link href="/bridge" className="underline">Bridge</Link> → <Link href="/ecosystem" className="underline">Ecosystem Programs</Link>.</Callout>
    </>,
  },
  {
    slug: "wallets",
    href: "/wallets",
    label: "Overview",
    title: "Wallets",
    description: "Use Solana-compatible wallets on Cookie Chain, including Nightly.",
    content: <>
      <P>Cookie Chain supports standard Solana-compatible wallets, including browser wallets, mobile wallets, and hardware-backed flows depending on your setup.</P>
      <div className="inline-flex items-center gap-3 rounded-xl border border-slate-900 bg-black/35 px-4 py-3"><span className="grid size-9 place-items-center rounded-lg bg-blue-500/10 text-blue-200">N</span><div><p className="font-semibold text-blue-100">Nightly Wallet</p><ExternalLink href="https://nightly.app/">Official site: nightly.app</ExternalLink></div></div>
      <H3>Recommended</H3><List><li><strong>Nightly:</strong> fully supported on Cookie Chain. Install from <ExternalLink href="https://nightly.app/">nightly.app</ExternalLink>.</li></List>
      <H3>Connect to Cookie Chain</H3><List><li>RPC: <InlineCode>https://community-rpc.trashscan.io/</InlineCode></li><li>WebSocket: <InlineCode>https://community-wss.trashscan.io</InlineCode></li><li>Bridge: <ExternalLink href="https://bridge.trashscan.io">bridge.trashscan.io</ExternalLink></li></List>
      <H3>Quick checklist</H3><List><li>Back up your seed phrase offline.</li><li>Verify URLs before signing transactions.</li><li>Use separate wallets for high-value storage and daily dApp use.</li></List>
    </>,
  },
  {
    slug: "architecture",
    href: "/architecture",
    label: "The Chain",
    title: "Architecture & Consensus",
    description: "Cookie Chain inherits SVM architecture with PoH, Tower BFT, Turbine, Gulf Stream, Sealevel, and pipelining.",
    content: <>
      <P>Cookie Chain inherits the Solana Virtual Machine architecture. Core Solana primitives are available for developers on Cookie Chain.</P>
      <H3>Proof of History (PoH)</H3><P>A verifiable delay function acts as a cryptographic clock and orders events before consensus runs.</P>
      <H3>Tower BFT</H3><P>A PoH-optimized PBFT variant lets validators vote on the PoH sequence, reducing messaging overhead and supporting sub-second finality.</P>
      <H3>Turbine, Gulf Stream, Sealevel, Pipelining</H3><List><li><strong>Turbine:</strong> block propagation via randomized shredding.</li><li><strong>Gulf Stream:</strong> mempool-less transaction forwarding directly to the upcoming leader.</li><li><strong>Sealevel:</strong> parallel program execution across CPU cores.</li><li><strong>Pipelining:</strong> staged transaction validation for steady throughput.</li></List>
      <H3>Block time & finality</H3><List><li>Target block time: <InlineCode>~1 second</InlineCode></li><li>Finality is sub-second under normal conditions.</li><li>Consensus is produced by an expanding set of independent validators.</li></List>
    </>,
  },
  {
    slug: "gcash",
    href: "/gcash",
    label: "The Chain",
    title: "COOK (Native Token)",
    description: "COOK is the native asset for fees, validator stake, and ecosystem activity.",
    content: <>
      <P><InlineCode>COOK</InlineCode> is the native asset of Cookie Chain. It pays network fees, secures the chain through validator stake, and serves as the primary unit of account across the ecosystem.</P>
      <H3>Key facts</H3><List><li><strong>Symbol:</strong> COOK</li><li><strong>Decimals:</strong> 9, using SPL and lamports-style precision.</li><li><strong>Fee currency:</strong> all network fees are paid in COOK.</li><li><strong>Bridge model:</strong> COOK is bridged 1:1 to its Solana counterpart through the community multi-sig.</li></List>
      <H3>How to get COOK</H3><List><li>Bridge from Solana via <ExternalLink href="https://bridge.trashscan.io">bridge.trashscan.io</ExternalLink>.</li><li>Swap for COOK on ecosystem DEXs.</li><li>Receive COOK directly from any Cookie Chain wallet.</li></List>
      <Callout tone="warn">Only use bridges and RPC endpoints linked from official community channels. There is no centralized foundation, so verify endpoints before signing.</Callout>
    </>,
  },
  {
    slug: "validators",
    href: "/validators",
    label: "The Chain",
    title: "Validators",
    description: "Cookie Chain consensus is moving toward an expanding set of independent validator operators.",
    content: <>
      <P>Cookie Chain is transitioning from a single-validator launch into a distributed multi-validator chain. Consensus is produced by an expanding set of independent operators.</P>
      <H3>Who can run a validator</H3><P>Anyone who meets the hardware and stake requirements can apply to join the validator set. The operator set is intentionally open, with progressive decentralization driven by the community rather than a foundation.</P>
      <H3>Minimum requirements guideline</H3><List><li>8+ CPU cores, modern x86_64.</li><li>64 GB+ RAM.</li><li>NVMe SSD storage, with 1 TB+ recommended.</li><li>300 Mbps+ symmetric network.</li><li>Static IP and basic uptime monitoring.</li></List>
      <H3>Live validator set</H3><P>See the live validator set on the <ExternalLink href="https://trashscan.io/validators">/validators</ExternalLink> page.</P>
    </>,
  },
  {
    slug: "bridge",
    href: "/bridge",
    label: "The Chain",
    title: "Community Multi-sig Bridge",
    description: "COOK moves between Solana and Cookie Chain through a community-operated lock/unlock multi-sig bridge.",
    content: <>
      <P>COOK moves between Solana and Cookie Chain through a community-operated multi-sig. It is a lock/unlock bridge, not a mint/burn bridge, and no single party can move bridge funds unilaterally.</P>
      <H3>Flow: Solana to Cookie Chain</H3><List><li><strong>Lock on Solana:</strong> the user deposits COOK or a supported SPL asset into the multi-sig vault on Solana mainnet.</li><li><strong>Signers co-sign:</strong> an m-of-n threshold of community signers authorizes the transfer off-chain.</li><li><strong>Unlock on Cookie Chain:</strong> once the threshold is met, the multi-sig authorizes the corresponding asset to unlock on Cookie Chain to the user wallet.</li></List>
      <H3>Flow: Cookie Chain to Solana</H3><P>In the reverse direction, the same signer set controls the corresponding unlock back on Solana. The community multi-sig coordinates bridge locks and unlocks on both sides.</P>
      <Callout>Bridge frontend: <ExternalLink href="https://bridge.trashscan.io">bridge.trashscan.io</ExternalLink></Callout>
    </>,
  },
  {
    slug: "bridge-mechanism",
    href: "/bridge-mechanism",
    label: "The Chain",
    title: "Bridge Mechanism",
    description: "How locked COOK holders, sCOOK, cCOOK, relayers, creator fees, and community multisigs fit together.",
    content: <>
      <P>
        The bridge mechanism is designed to give locked COOK holders a clean path out, then establish a 1:1 relayer bridge between Solana COOK and Cookie Chain COOK.
      </P>
      <H3>Token roles</H3>
      <List>
        <li><strong>pFUN token:</strong> a new token created on Solana to bootstrap the unlock and bridge-out process.</li>
        <li><strong>sCOOK:</strong> Solana-side COOK.</li>
        <li><strong>cCOOK:</strong> Cookie Chain-side COOK.</li>
        <li><strong>Locked COOK:</strong> the acquired locked allocation representing 27% of the supply.</li>
      </List>
      <H3>Locked holder bridge-out</H3>
      <P>
        The plan is to create the pFUN token on Solana and acquire locked COOK tokens, equal to 27% of the supply. That acquired allocation is used to let locked holders bridge out freely instead of being trapped by the original lock structure.
      </P>
      <H3>1:1 conversion bridge</H3>
      <P>
        After the locked-holder path is live, the next phase is a 1:1 conversion relayer bridge between Solana COOK and Cookie Chain COOK. Users will be able to move between <InlineCode>sCOOK</InlineCode> and <InlineCode>cCOOK</InlineCode> through the relayer bridge at parity.
      </P>
      <H3>Fee usage</H3>
      <P>
        Pump.fun creator fees from the Solana-side token launch will be routed back into the ecosystem. The intended uses are upcoming validator incentives, infrastructure, and hackathons.
      </P>
      <H3>Bridge custody</H3>
      <P>
        Bridge funds are maintained by community-led multisigs across both chains. The custody layer uses Squads multisig vaults so bridge funds are not controlled by a single party.
      </P>
      <H3>Operating principles</H3>
      <List>
        <li><strong>Locked holders first:</strong> the mechanism prioritizes a free bridge-out path for locked participants.</li>
        <li><strong>Parity between chains:</strong> sCOOK and cCOOK conversion is designed around 1:1 movement.</li>
        <li><strong>Community custody:</strong> multisig vaults on both chains maintain bridge funds.</li>
        <li><strong>Ecosystem reinvestment:</strong> creator fees support validators, infrastructure, and builder events.</li>
      </List>
      <Callout>
        Summary path: create pFUN on Solana, acquire the locked 27% COOK allocation, unlock bridge-out for locked holders, then operate the 1:1 sCOOK ↔ cCOOK relayer bridge under community multisig custody.
      </Callout>
    </>,
  },
  {
    slug: "for-builders",
    href: "/for-builders",
    label: "Building",
    title: "For Builders",
    description: "A practical path for deploying Solana-compatible apps and programs on Cookie Chain.",
    content: <>
      <P>Builders can treat Cookie Chain like a Solana-compatible deployment target. Point your tools at the community RPC, use familiar SVM workflows, deploy cheaply, and ship against live chain data.</P>
      <H3>Builder quick path</H3><List><li>Set your CLI and SDK connection to <InlineCode>https://community-rpc.trashscan.io/</InlineCode>.</li><li>Use Anchor, native Rust, or standard Solana client SDKs without changing your app architecture.</li><li>Deploy programs with the Solana CLI and validate transactions on Trashscan.</li><li>Submit ecosystem programs through <ExternalLink href="https://trashscan.io/submit-project">/submit-project</ExternalLink> when they are ready for discovery.</li></List>
      <H3>What to build first</H3><List><li>Wallet-connected apps that read balances, slots, and transaction history.</li><li>SPL Token or Token-2022 flows using canonical program IDs.</li><li>Apps that use <InlineCode>.gor</InlineCode> names, Squads multisig, or existing Meteora and Jupiter ecosystem primitives.</li><li>High-iteration experiments that benefit from low deployment costs and minimal fees.</li></List>
      <Callout>Builder path: <Link href="/architecture" className="underline">Architecture</Link> → <Link href="/developer-guide" className="underline">Developer Guide</Link> → <Link href="/ecosystem" className="underline">Ecosystem Programs</Link>.</Callout>
    </>,
  },
  {
    slug: "developer-guide",
    href: "/developer-guide",
    label: "Building",
    title: "Developer Guide",
    description: "Use standard Solana SDKs, Anchor, and CLI workflows against the Cookie Chain RPC.",
    content: <>
      <P>Cookie Chain is SVM-compatible. Anchor, native Rust, and standard Solana client SDKs work with no changes beyond pointing at the Cookie Chain RPC.</P>
      <H3>Endpoints</H3><List><li><strong>HTTP RPC:</strong> <InlineCode>https://community-rpc.trashscan.io/</InlineCode></li><li><strong>WebSocket:</strong> <InlineCode>https://community-wss.trashscan.io</InlineCode></li></List>
      <H3>JavaScript / TypeScript</H3><Code>{`import { Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection(
  "https://community-rpc.trashscan.io/",
  "confirmed"
);

const slot = await connection.getSlot();
console.log("current slot:", slot);`}</Code>
      <H3>Anchor</H3><Code>{`# Anchor.toml
[provider]
cluster = "https://community-rpc.trashscan.io/"
wallet  = "~/.config/solana/id.json"`}</Code>
      <H3>Deploy a program</H3><Code>{"solana program deploy ./target/deploy/my_program.so"}</Code>
      <P>See also: <ExternalLink href="https://trashscan.io/developer-tools">Developer Tools</ExternalLink>.</P>
    </>,
  },
  {
    slug: "ecosystem",
    href: "/ecosystem",
    label: "Building",
    title: "Ecosystem Programs",
    description: "SPL, Token-2022, ATA, Memo, Meteora, Jupiter, .gor names, and Squads multisig on Cookie Chain.",
    content: <>
      <P>A curated set of Solana-compatible programs is available on Cookie Chain. The live authoritative list is on the <ExternalLink href="https://trashscan.io/programs">Programs</ExternalLink> page.</P>
      <H3>Highlights</H3><List><li><strong>SPL Token & Token-2022:</strong> baked into genesis at canonical IDs, including extension support.</li><li><strong>Associated Token Account (ATA)</strong> and <strong>Memo</strong> programs.</li><li><strong>Meteora / Jupiter ecosystem:</strong> alpha_vault, locker, dynamic_fee_sharing, cp_amm, and DAMM v2.</li><li><strong>SPL Name Service:</strong> <InlineCode>.gor</InlineCode> domain registration and resolution.</li><li><strong>Squads multisig:</strong> shared treasury tooling.</li></List>
      <Callout>Want your program listed? Submit it through <ExternalLink href="https://trashscan.io/submit-project">/submit-project</ExternalLink>.</Callout>
    </>,
  },
  {
    slug: "governance",
    href: "/governance",
    label: "Community",
    title: "Governance",
    description: "Cookie Chain governance is off-chain-first, community-led, and ratified through multi-sig and validator coordination.",
    content: <>
      <P>Cookie Chain governance is off-chain-first and community-led. Major decisions, including bridge signer rotation, validator set policy, treasury spend, and protocol-level upgrades, are discussed openly and ratified by the multi-sig and validator operator set.</P>
      <H3>Principles</H3><List><li><strong>No single point of control.</strong> The bridge vault, core infrastructure, and treasury all sit behind m-of-n signer sets.</li><li><strong>Open participation.</strong> Validator onboarding and program listings are open to qualified community members.</li><li><strong>Progressive decentralization.</strong> Operator and signer sets expand over time toward broader distribution.</li></List>
      <H3>Where decisions happen</H3><List><li>Community channels such as Discord and X for proposals, discussion, and RFCs.</li><li>Multi-sig signer ceremonies for on-chain ratification.</li><li>Validator operator coordination for upgrade timing and consensus changes.</li></List>
    </>,
  },
  {
    slug: "faq",
    href: "/faq",
    label: "Community",
    title: "FAQ",
    description: "Common answers about Cookie Chain, COOK, validators, wallets, bridge flows, and Solana compatibility.",
    content: <>
      <H3>Is Cookie Chain Solana?</H3><P>Cookie Chain is a Solana fork. It is SVM-compatible and tool-compatible, but it is its own chain with its own validator set, native token COOK, and community governance.</P>
      <H3>Who runs the chain?</H3><P>The community. Validators are independent operators, the bridge is controlled by an m-of-n community multi-sig, and there is no single foundation with a kill switch.</P>
      <H3>How do I move assets in and out?</H3><P>Use the community multi-sig bridge at <ExternalLink href="https://bridge.trashscan.io">bridge.trashscan.io</ExternalLink>. Deposits and withdrawals are handled through community-controlled locks and unlocks. See the <Link href="/bridge" className={linkClass}>Multi-sig Bridge</Link> section.</P>
      <H3>Do my Solana programs work here?</H3><P>Yes. Standard Solana programs and SPL tokens deploy unchanged. Point your RPC at Cookie Chain.</P>
      <H3>Which wallets are supported?</H3><P>Standard Solana-compatible wallets are supported, including <ExternalLink href="https://nightly.app/">Nightly</ExternalLink>.</P>
      <H3>Is there a changelog?</H3><P>Yes. See the full <ExternalLink href="https://trashscan.io/changelog">Changelog</ExternalLink>.</P>
      <H3>How do I run a validator?</H3><P>See <Link href="/validators" className={linkClass}>Validators</Link> for hardware guidance, then reach out through community channels for operator onboarding.</P>
    </>,
  },
];

export type DocsPage = (typeof docsPages)[number];

export function getDocsPage(slug: string) {
  return docsPages.find((page) => page.slug === slug);
}

export function getPageNeighbors(page: DocsPage) {
  const index = docsPages.findIndex((item) => item.slug === page.slug);
  return { previous: index > 0 ? docsPages[index - 1] : null, next: index < docsPages.length - 1 ? docsPages[index + 1] : null };
}
