import { cn } from "@/lib/utils";

export function MatchScore({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200">
        <div
          className={cn("h-full rounded-full", score >= 80 ? "bg-emerald" : score >= 60 ? "bg-amber-500" : "bg-red-500")}
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-sm font-bold text-navy">{score}%</span>
    </div>
  );
}
