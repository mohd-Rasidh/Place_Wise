import Link from "next/link";
import {
  BarChart3,
  Bell,
  Briefcase,
  Building2,
  FileText,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = [label: string, href: string, icon: LucideIcon];

const nav: Record<"student" | "recruiter" | "admin", NavItem[]> = {
  student: [
    ["Dashboard", "/student", LayoutDashboard],
    ["Profile", "/student-profile", Users],
    ["Jobs", "/jobs", Briefcase],
    ["Applications", "/applications", FileText],
    ["Notifications", "/notifications", Bell]
  ],
  recruiter: [
    ["Dashboard", "/recruiter", LayoutDashboard],
    ["Company", "/company", Building2],
    ["Create Job", "/create-job", Briefcase],
    ["Applicants", "/applicants", Users]
  ],
  admin: [
    ["Dashboard", "/admin", LayoutDashboard],
    ["Students", "/manage-students", Users],
    ["Companies", "/manage-companies", Building2],
    ["Jobs", "/manage-jobs", Briefcase],
    ["Analytics", "/analytics", BarChart3]
  ]
};

export function DashboardShell({
  role,
  title,
  children
}: {
  role: keyof typeof nav;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-mist">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-line bg-navy p-5 text-white lg:block">
        <Link href="/" className="flex items-center gap-3 text-2xl font-black">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald">P</span>
          PlaceWise
        </Link>
        <nav className="mt-10 space-y-1">
          {nav[role].map(([label, href, Icon], index) => (
            <Link
              key={href}
              href={href as string}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10",
                index === 0 && "bg-white/12 text-white"
              )}
            >
              <Icon size={18} />
              {label as string}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/10 p-4">
          <p className="text-sm font-semibold">Demo mode</p>
          <p className="mt-1 text-xs text-slate-300">Seeded placement data is loaded for portfolio presentation.</p>
        </div>
      </aside>
      <main className="lg:pl-72">
        <header className="sticky top-0 z-10 border-b border-line bg-white/90 px-5 py-4 backdrop-blur md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald">{role} workspace</p>
              <h1 className="text-2xl font-black text-navy">{title}</h1>
            </div>
            <div className="flex items-center gap-3">
              <label className="hidden items-center gap-2 rounded-lg border border-line bg-mist px-3 py-2 text-sm text-slate-500 md:flex">
                <Search size={16} />
                <input className="w-56 bg-transparent outline-none" placeholder="Search PlaceWise" />
              </label>
              <button className="rounded-lg border border-line bg-white p-2 text-navy">
                <Bell size={18} />
              </button>
              <button className="rounded-lg border border-line bg-white p-2 text-navy">
                <Settings size={18} />
              </button>
              <Link href="/login" className="rounded-lg bg-navy p-2 text-white">
                <LogOut size={18} />
              </Link>
            </div>
          </div>
        </header>
        <div className="p-5 md:p-8">{children}</div>
      </main>
    </div>
  );
}
