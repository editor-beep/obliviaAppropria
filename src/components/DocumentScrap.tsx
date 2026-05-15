import type { DocumentScrap as Scrap } from "@/content/types";

export function DocumentScrap({ scrap, rotate = -1.2 }: { scrap: Scrap; rotate?: number }) {
  return (
    <div
      className="my-10 inline-block max-w-md rounded-sm bg-paper p-5 text-paper-ink shadow-[0_15px_40px_-15px_rgba(0,0,0,0.8)]"
      style={{ transform: `rotate(${rotate}deg)`, color: "var(--paper-ink)" }}
    >
      <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">
        {scrap.label}
      </div>
      <pre className="whitespace-pre-wrap font-mono text-[12px] leading-relaxed">{scrap.body}</pre>
    </div>
  );
}
