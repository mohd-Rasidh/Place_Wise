import { Search } from "lucide-react";

export function TableShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-line bg-white shadow-soft">
      <div className="flex flex-col gap-3 border-b border-line p-5 md:flex-row md:items-center md:justify-between">
        <h2 className="text-lg font-bold text-navy">{title}</h2>
        <label className="flex min-w-64 items-center gap-2 rounded-lg border border-line bg-mist px-3 py-2 text-sm text-slate-500">
          <Search size={16} />
          <input className="w-full bg-transparent outline-none" placeholder="Search and filter" />
        </label>
      </div>
      <div className="overflow-x-auto">{children}</div>
    </section>
  );
}
