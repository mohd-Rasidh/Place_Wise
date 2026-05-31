import { DashboardShell } from "@/components/dashboard-shell";
import { students } from "@/lib/demo-data";

export default function StudentProfilePage() {
  const student = students[0];
  return (
    <DashboardShell role="student" title="Student Profile Page">
      <section className="rounded-lg border border-line bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-emerald">{student.rollNumber}</p>
            <h2 className="mt-2 text-3xl font-black text-navy">{student.name}</h2>
            <p className="mt-2 text-slate-500">{student.branch} • {student.graduationYear} batch • CGPA {student.cgpa}</p>
          </div>
          <div className="rounded-lg bg-emerald-50 px-4 py-3 font-bold text-emerald">{student.profileCompletion}% complete</div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ["Phone", student.phone],
            ["LinkedIn", student.linkedIn],
            ["GitHub", student.github],
            ["Backlogs", String(student.backlogCount)]
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-mist p-4">
              <p className="text-sm font-semibold text-slate-500">{label}</p>
              <p className="mt-1 font-bold text-navy">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <p className="font-bold text-navy">Skills</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {student.skills.map((skill) => <span key={skill} className="rounded-md bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald">{skill}</span>)}
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
