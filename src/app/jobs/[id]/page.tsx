import { notFound } from "next/navigation";
import { DashboardShell } from "@/components/dashboard-shell";
import { MatchScore } from "@/components/ui/match-score";
import { StatusBadge } from "@/components/ui/status-badge";
import { jobs, students } from "@/lib/demo-data";
import { getMatch, isEligible } from "@/lib/matching";

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const job = jobs.find((item) => item.id === params.id);
  if (!job) notFound();
  const student = students[0];
  const match = getMatch(student, job);
  return (
    <DashboardShell role="student" title="Job Details">
      <article className="rounded-lg border border-line bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-emerald">{job.company}</p>
            <h2 className="mt-2 text-3xl font-black text-navy">{job.title}</h2>
            <p className="mt-2 text-slate-500">{job.location} • {job.role} • {job.packageLpa} LPA</p>
          </div>
          <StatusBadge status={isEligible(student, job) ? "Approved" : "Pending"} />
        </div>
        <p className="mt-6 max-w-4xl leading-8 text-slate-600">{job.description}</p>
        <div className="mt-6 rounded-lg bg-mist p-5">
          <p className="mb-3 font-bold text-navy">Your match score</p>
          <MatchScore score={match.score} />
          <p className="mt-3 text-sm text-slate-600">{match.reason}</p>
        </div>
      </article>
    </DashboardShell>
  );
}
