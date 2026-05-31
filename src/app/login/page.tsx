import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-mist px-5">
      <section className="w-full max-w-md rounded-lg border border-line bg-white p-7 shadow-soft">
        <Link href="/" className="flex items-center gap-3 text-2xl font-black text-navy">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald text-white">P</span>
          PlaceWiseMaster
        </Link>
        <h1 className="mt-8 text-3xl font-black text-navy">Welcome back</h1>
        <p className="mt-2 text-slate-500">Use the demo shortcuts or connect NextAuth with the Prisma schema.</p>
        <form className="mt-7 space-y-4">
          <input className="w-full rounded-lg border border-line px-4 py-3 outline-emerald" placeholder="Email address" />
          <input className="w-full rounded-lg border border-line px-4 py-3 outline-emerald" placeholder="Password" type="password" />
          <button className="w-full rounded-lg bg-navy px-4 py-3 font-bold text-white">Login</button>
        </form>
        <div className="mt-5 grid gap-2 text-sm">
          <Link href="/student" className="rounded-lg bg-emerald-50 px-4 py-3 font-bold text-emerald">Continue as Student</Link>
          <Link href="/recruiter" className="rounded-lg bg-slate-100 px-4 py-3 font-bold text-navy">Continue as Recruiter</Link>
          <Link href="/admin" className="rounded-lg bg-slate-100 px-4 py-3 font-bold text-navy">Continue as Admin</Link>
        </div>
      </section>
    </main>
  );
}
