import { DashboardShell } from "@/components/dashboard-shell";
import { MatchScore } from "@/components/ui/match-score";
import { StatusBadge } from "@/components/ui/status-badge";
import { jobs, students } from "@/lib/demo-data";
import { getMatch, isEligible } from "@/lib/matching";
import { formatLpa } from "@/lib/utils";

export default function JobsPage() {
  const student = students[0];
  return (
    <DashboardShell role="student" title="Eligible Jobs">
      <div className="grid gap-5 xl:grid-cols-2">
        {jobs.map((job) => {
          const match = getMatch(student, job);
          return (
            <article key={job.id} className="rounded-lg border border-line bg-white p-5 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-emerald">{job.company}</p>
                  <h2 className="mt-1 text-xl font-black text-navy">{job.title}</h2>
                  <p className="mt-2 text-sm text-slate-500">{job.location} • {formatLpa(job.packageLpa)} • Deadline {job.deadline}</p>
                </div>
                <StatusBadge status={isEligible(student, job) ? "Approved" : "Pending"} />
              </div>
              <p className="mt-4 leading-7 text-slate-600">{job.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.requiredSkills.map((skill) => <span key={skill} className="rounded-md bg-mist px-2.5 py-1 text-xs font-semibold text-navy">{skill}</span>)}
              </div>
              <div className="mt-5 border-t border-line pt-4">
                <MatchScore score={match.score} />
                <p className="mt-3 text-sm text-slate-600">{match.reason}</p>
              </div>
            </article>
          );
        })}
      </div>
    </DashboardShell>
  );
}
