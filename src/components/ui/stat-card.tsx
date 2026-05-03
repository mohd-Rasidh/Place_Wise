import type { LucideIcon } from "lucide-react";

export function StatCard({
  label,
  value,
  hint,
  icon: Icon
}: {
  label: string;
  value: string;
  hint: string;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-lg border border-line bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-normal text-navy">{value}</p>
        </div>
        <div className="rounded-lg bg-emerald-50 p-3 text-emerald">
          <Icon size={20} />
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-500">{hint}</p>
    </div>
  );
}
