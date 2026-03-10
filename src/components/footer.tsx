import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container-max flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {site.name} · {site.role}
        </p>
        <p className="font-mono text-xs text-muted">{site.location}</p>
      </div>
    </footer>
  );
}
