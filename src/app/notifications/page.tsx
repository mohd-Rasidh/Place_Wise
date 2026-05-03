import { DashboardShell } from "@/components/dashboard-shell";
import { announcements } from "@/lib/demo-data";

export default function NotificationsPage() {
  return (
    <DashboardShell role="student" title="Notifications">
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement} className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <p className="font-bold text-navy">{announcement}</p>
            <p className="mt-2 text-sm text-slate-500">Published by Placement Admin</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
