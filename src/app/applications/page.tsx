import { DashboardShell } from "@/components/dashboard-shell";
import { TableShell } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { applications } from "@/lib/demo-data";

export default function ApplicationsPage() {
  return (
    <DashboardShell role="student" title="My Applications">
      <TableShell title="Application tracker">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-mist text-slate-500">
            <tr>{["Company", "Role", "Package", "Interview", "Status"].map((head) => <th key={head} className="px-5 py-3 font-bold">{head}</th>)}</tr>
          </thead>
          <tbody>
            {applications.filter((app) => app.student.id === "stu-1").map((application) => (
              <tr key={application.id} className="border-t border-line">
                <td className="px-5 py-4 font-semibold text-navy">{application.job.company}</td>
                <td className="px-5 py-4">{application.job.title}</td>
                <td className="px-5 py-4">{application.job.packageLpa} LPA</td>
                <td className="px-5 py-4">{application.interviewDate || "Not scheduled"}</td>
                <td className="px-5 py-4"><StatusBadge status={application.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableShell>
    </DashboardShell>
  );
}
