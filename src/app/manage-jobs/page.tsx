import { DashboardShell } from "@/components/dashboard-shell";
import { TableShell } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { jobs } from "@/lib/demo-data";

export default function ManageJobsPage() {
  return (
    <DashboardShell role="admin" title="Manage Jobs">
      <TableShell title="Job approvals">
        <table className="w-full min-w-[780px] text-left text-sm">
          <thead className="bg-mist text-slate-500">
            <tr>{["Company", "Title", "Branches", "CGPA", "Deadline", "Status"].map((head) => <th key={head} className="px-5 py-3 font-bold">{head}</th>)}</tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-t border-line">
                <td className="px-5 py-4 font-semibold text-navy">{job.company}</td>
                <td className="px-5 py-4">{job.title}</td>
                <td className="px-5 py-4">{job.eligibleBranches.join(", ")}</td>
                <td className="px-5 py-4">{job.minCgpa}+</td>
                <td className="px-5 py-4">{job.deadline}</td>
                <td className="px-5 py-4"><StatusBadge status={job.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableShell>
    </DashboardShell>
  );
}
