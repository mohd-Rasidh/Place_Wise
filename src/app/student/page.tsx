import { Bell, Briefcase, CalendarDays, CheckCircle2 } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/ui/stat-card";
import { MatchScore } from "@/components/ui/match-score";
import { StatusBadge } from "@/components/ui/status-badge";
import { ActivityChart } from "@/components/charts";
import { applications, jobs, students } from "@/lib/demo-data";
import { getMatch, isEligible } from "@/lib/matching";
import { formatLpa } from "@/lib/utils";

export default function StudentDashboard() {
  const student = students[0];
  const recommended = jobs.map((job) => ({ job, match: getMatch(student, job), eligible: isEligible(student, job) }));

  return (
    <DashboardShell role="student" title={`Welcome, ${student.name}`}>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Profile completion" value={`${student.profileCompletion}%`} hint="Resume and GitHub linked" icon={CheckCircle2} />
        <StatCard label="Eligible jobs" value="3" hint="Based on CGPA and branch" icon={Briefcase} />
        <StatCard label="Applications" value="2" hint="1 shortlisted this month" icon={Bell} />
        <StatCard label="Interviews" value="1" hint="Next round on 22 Sep" icon={CalendarDays} />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_.85fr]">
        <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
          <h2 className="text-lg font-bold text-navy">Recommended jobs</h2>
          <div className="mt-4 space-y-4">
            {recommended.map(({ job, match, eligible }) => (
              <div key={job.id} className="rounded-lg border border-line p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-bold text-navy">{job.title}</p>
                    <p className="text-sm text-slate-500">{job.company} • {job.location} • {formatLpa(job.packageLpa)}</p>
                  </div>
                  <StatusBadge status={eligible ? "Approved" : "Pending"} />
                </div>
                <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <MatchScore score={match.score} />
                  <p className="max-w-xl text-sm text-slate-600">{match.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="space-y-6">
          <ActivityChart />
          <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <h2 className="text-lg font-bold text-navy">My applications</h2>
            <div className="mt-4 space-y-3">
              {applications.filter((item) => item.student.id === student.id).map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-lg bg-mist p-3">
                  <div>
                    <p className="font-semibold text-navy">{item.job.company}</p>
                    <p className="text-sm text-slate-500">{item.job.title}</p>
                  </div>
                  <StatusBadge status={item.status} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </DashboardShell>
  );
}
