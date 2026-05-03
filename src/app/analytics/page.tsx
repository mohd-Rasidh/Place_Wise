import { DashboardShell } from "@/components/dashboard-shell";
import { ActivityChart, BranchChart } from "@/components/charts";

export default function AnalyticsPage() {
  return (
    <DashboardShell role="admin" title="Placement Analytics">
      <div className="grid gap-6 xl:grid-cols-2">
        <ActivityChart />
        <BranchChart />
      </div>
    </DashboardShell>
  );
}
