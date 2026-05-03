import { DashboardShell } from "@/components/dashboard-shell";

export default function CompanyPage() {
  return (
    <DashboardShell role="recruiter" title="Company Profile">
      <section className="rounded-lg border border-line bg-white p-6 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald">Approved partner</p>
        <h2 className="mt-2 text-3xl font-black text-navy">Microsoft</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Cloud and productivity company hiring for software engineering, cloud infrastructure, and product roles.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["18 active applicants", "4 open jobs", "12 selected students"].map((item) => (
            <div key={item} className="rounded-lg bg-mist p-4 font-bold text-navy">{item}</div>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
