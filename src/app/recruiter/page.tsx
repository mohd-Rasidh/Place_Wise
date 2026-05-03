import { Briefcase, CheckCircle2, UserCheck, Users } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/ui/stat-card";
import { TableShell } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { MatchScore } from "@/components/ui/match-score";
import { applications, jobs, students } from "@/lib/demo-data";
import { getMatch } from "@/lib/matching";

export default function RecruiterDashboard() {
  return (
    <DashboardShell role="recruiter" title="Recruiter Dashboard">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active jobs" value="4" hint="3 approved, 1 pending" icon={Briefcase} />
        <StatCard label="Applicants" value="156" hint="Across all open roles" icon={Users} />
        <StatCard label="Shortlisted" value="38" hint="Ready for interviews" icon={UserCheck} />
        <StatCard label="Selected" value="12" hint="Final offers released" icon={CheckCircle2} />
      </div>
      <div className="mt-6">
        <TableShell title="Applicant pipeline">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="bg-mist text-slate-500">
              <tr>
                {["Student", "Branch", "CGPA", "Job", "Match", "Status"].map((head) => (
                  <th key={head} className="px-5 py-3 font-bold">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={application.id} className="border-t border-line">
                  <td className="px-5 py-4 font-semibold text-navy">{application.student.name}</td>
                  <td className="px-5 py-4">{application.student.branch}</td>
                  <td className="px-5 py-4">{application.student.cgpa}</td>
                  <td className="px-5 py-4">{application.job.title}</td>
                  <td className="px-5 py-4"><MatchScore score={getMatch(application.student, application.job).score} /></td>
                  <td className="px-5 py-4"><StatusBadge status={application.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableShell>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {jobs.slice(0, 2).map((job) => (
          <div key={job.id} className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <p className="text-sm font-semibold text-emerald">{job.company}</p>
            <h2 className="mt-2 text-xl font-black text-navy">{job.title}</h2>
            <p className="mt-3 text-slate-600">{job.description}</p>
            <p className="mt-4 text-sm text-slate-500">Potential applicants: {students.length * 24}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
