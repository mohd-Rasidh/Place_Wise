import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  Applied: "bg-blue-50 text-blue-700 ring-blue-200",
  Shortlisted: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Interview: "bg-amber-50 text-amber-700 ring-amber-200",
  Selected: "bg-emerald-100 text-emerald-800 ring-emerald-300",
  Rejected: "bg-red-50 text-red-700 ring-red-200",
  Pending: "bg-amber-50 text-amber-700 ring-amber-200",
  Approved: "bg-emerald-50 text-emerald-700 ring-emerald-200"
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold ring-1", styles[status])}>
      {status}
    </span>
  );
}
