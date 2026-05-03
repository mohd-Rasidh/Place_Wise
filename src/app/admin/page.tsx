import { Building2, IndianRupee, TrendingUp, Users } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/ui/stat-card";
import { ActivityChart, BranchChart } from "@/components/charts";
import { TableShell } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { companies } from "@/lib/demo-data";

export default function AdminDashboard() {
  return (
    <DashboardShell role="admin" title="Placement Admin Dashboard">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Verified students" value="1,042" hint="86% profile completion average" icon={Users} />
        <StatCard label="Partner companies" value="85" hint="12 pending approvals" icon={Building2} />
        <StatCard label="Total offers" value="300" hint="48 offers this month" icon={TrendingUp} />
        <StatCard label="Highest package" value="12 LPA" hint="Average package 6.8 LPA" icon={IndianRupee} />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <ActivityChart />
        <BranchChart />
      </div>
      <div className="mt-6">
        <TableShell title="Company approvals">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-mist text-slate-500">
              <tr>
                {["Company", "Industry", "Offers", "Status"].map((head) => <th key={head} className="px-5 py-3 font-bold">{head}</th>)}
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => (
                <tr key={company.name} className="border-t border-line">
                  <td className="px-5 py-4 font-semibold text-navy">{company.name}</td>
                  <td className="px-5 py-4">{company.industry}</td>
                  <td className="px-5 py-4">{company.offers}</td>
                  <td className="px-5 py-4"><StatusBadge status={company.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableShell>
      </div>
    </DashboardShell>
  );
}
