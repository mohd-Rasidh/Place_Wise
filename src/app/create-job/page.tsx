import { DashboardShell } from "@/components/dashboard-shell";

export default function CreateJobPage() {
  return (
    <DashboardShell role="recruiter" title="Create Job Posting">
      <form className="grid gap-4 rounded-lg border border-line bg-white p-6 shadow-soft md:grid-cols-2">
        {["Job title", "Role", "Package LPA", "Location", "Minimum CGPA", "Maximum backlogs", "Eligible branches", "Required skills"].map((label) => (
          <label key={label} className="grid gap-2 text-sm font-semibold text-navy">
            {label}
            <input className="rounded-lg border border-line px-4 py-3 font-normal outline-emerald" placeholder={label} />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-semibold text-navy md:col-span-2">
          Description
          <textarea className="min-h-32 rounded-lg border border-line px-4 py-3 font-normal outline-emerald" placeholder="Describe responsibilities and selection process" />
        </label>
        <button className="rounded-lg bg-navy px-5 py-3 font-bold text-white md:w-fit">Submit for approval</button>
      </form>
    </DashboardShell>
  );
}
