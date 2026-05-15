import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:grid-cols-3">
        <div>
          <div className="boeing-wordmark mb-3 text-lg text-signal-glow">Privileged Eye</div>
          <p className="font-sans text-xs normal-case tracking-normal text-muted-foreground/90">
            A short story collection following Detective Oblivia Appropria across twelve flights,
            twelve cover stories, and one system she will not see.
          </p>
        </div>
        <nav className="flex flex-col gap-2">
          <div className="text-foreground/80">Cabin</div>
          <Link to="/stories" className="transition-colors hover:text-signal-glow">
            Manifest
          </Link>
          <Link to="/system-map" className="transition-colors hover:text-signal-glow">
            System Map
          </Link>
          <Link to="/safety-card" className="transition-colors hover:text-signal-glow">
            Safety Card
          </Link>
          <Link to="/green" className="transition-colors hover:text-signal-glow">
            The Green
          </Link>
          <Link to="/about" className="transition-colors hover:text-signal-glow">
            About
          </Link>
          <Link to="/subscribe" className="transition-colors hover:text-signal-glow">
            Subscribe
          </Link>
        </nav>
        <div className="font-sans text-xs normal-case tracking-normal text-muted-foreground/80">
          <div className="mb-2 font-mono uppercase tracking-[0.18em] text-foreground/80">
            Below you
          </div>
          The fields, the workers, the supply chain ascending into the hold. She does not look down.
          She is watching the light.
        </div>
      </div>
      <div className="border-t border-border/40 px-4 py-4 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60">
        Copyright The Means of Production 2026 ·{" "}
        <a href="https://www.themeansofproduction.press" className="hover:text-signal-glow">
          themeansofproduction.press
        </a>
      </div>
    </footer>
  );
}
