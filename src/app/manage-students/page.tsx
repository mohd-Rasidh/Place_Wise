import { DashboardShell } from "@/components/dashboard-shell";
import { TableShell } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { students } from "@/lib/demo-data";

export default function ManageStudentsPage() {
  return (
    <DashboardShell role="admin" title="Manage Students">
      <TableShell title="Student verification">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-mist text-slate-500">
            <tr>{["Name", "Roll No", "Branch", "CGPA", "Profile", "Status"].map((head) => <th key={head} className="px-5 py-3 font-bold">{head}</th>)}</tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t border-line">
                <td className="px-5 py-4 font-semibold text-navy">{student.name}</td>
                <td className="px-5 py-4">{student.rollNumber}</td>
                <td className="px-5 py-4">{student.branch}</td>
                <td className="px-5 py-4">{student.cgpa}</td>
                <td className="px-5 py-4">{student.profileCompletion}%</td>
                <td className="px-5 py-4"><StatusBadge status={student.verified ? "Approved" : "Pending"} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableShell>
    </DashboardShell>
  );
}
