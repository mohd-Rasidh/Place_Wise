import Link from "next/link";
import { ArrowRight, BarChart3, Briefcase, CheckCircle2, GraduationCap, ShieldCheck, Users } from "lucide-react";

const metrics = [
  ["1200+", "Students"],
  ["85+", "Companies"],
  ["300+", "Offers"],
  ["12 LPA", "Highest Package"]
];

const features = [
  ["Eligibility Matching", "Automatically match students to jobs by branch, CGPA, backlogs, batch, and skills.", CheckCircle2],
  ["Recruiter Workflow", "Post jobs, review applicants, shortlist candidates, and track final selections.", Briefcase],
  ["Placement Analytics", "Track branch-wise placements, offers, packages, and application conversion.", BarChart3]
];

export default function Home() {
  return (
    <main className="bg-mist text-ink">
      <section
        className="relative min-h-[92vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(15,39,66,.92), rgba(15,39,66,.72), rgba(15,39,66,.22)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80')"
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-white">
          <Link href="/" className="flex items-center gap-3 text-2xl font-black">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald">P</span>
            PlaceWise
          </Link>
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/login" className="rounded-lg px-4 py-2 text-sm font-semibold hover:bg-white/10">
              Login
            </Link>
            <Link href="/register" className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-navy">
              Register
            </Link>
          </div>
        </nav>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-20 md:grid-cols-[1.05fr_.95fr] md:pt-28">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-200">Smart campus hiring system</p>
            <h1 className="mt-4 text-5xl font-black leading-tight tracking-normal md:text-7xl">PlaceWise</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">
              A polished placement portal for students, recruiters, and placement teams with eligibility matching,
              application tracking, and placement analytics built into one workflow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/student" className="inline-flex items-center gap-2 rounded-lg bg-emerald px-5 py-3 font-bold text-white">
                Student Login <ArrowRight size={18} />
              </Link>
              <Link href="/recruiter" className="rounded-lg bg-white px-5 py-3 font-bold text-navy">
                Recruiter Login
              </Link>
              <Link href="/admin" className="rounded-lg border border-white/40 px-5 py-3 font-bold text-white">
                Admin Login
              </Link>
            </div>
          </div>
          <div className="self-end rounded-lg border border-white/20 bg-white/95 p-5 shadow-soft backdrop-blur">
            <div className="grid grid-cols-2 gap-3">
              {metrics.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-line bg-mist p-4">
                  <p className="text-3xl font-black text-navy">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg bg-navy p-5 text-white">
              <p className="text-sm text-slate-300">Placement analytics preview</p>
              <div className="mt-4 flex items-end gap-3">
                {[46, 72, 58, 90, 64, 84].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-md bg-emerald" style={{ height }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {features.map(([title, copy, Icon]) => (
            <div key={title as string} className="rounded-lg border border-line bg-white p-6 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-50 text-emerald">
                <Icon size={22} />
              </div>
              <h2 className="mt-5 text-xl font-black text-navy">{title as string}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-3">
          {[
            ["Students", "Track eligible jobs, applications, interviews, profile strength, and skill match scores.", GraduationCap],
            ["Recruiters", "Publish roles, filter applicants, and move candidates through a clean hiring pipeline.", Users],
            ["Admins", "Approve jobs, verify students, export data, and monitor placement outcomes.", ShieldCheck]
          ].map(([title, copy, Icon]) => (
            <div key={title as string} className="flex gap-4">
              <Icon className="mt-1 text-emerald" size={26} />
              <div>
                <h3 className="font-black text-navy">{title as string}</h3>
                <p className="mt-2 leading-7 text-slate-600">{copy as string}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
