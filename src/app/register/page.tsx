import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-mist px-5 py-10">
      <section className="w-full max-w-2xl rounded-lg border border-line bg-white p-7 shadow-soft">
        <Link href="/" className="text-2xl font-black text-navy">PlaceWise</Link>
        <h1 className="mt-6 text-3xl font-black text-navy">Create your account</h1>
        <form className="mt-7 grid gap-4 md:grid-cols-2">
          <input className="rounded-lg border border-line px-4 py-3 outline-emerald" placeholder="Full name" />
          <input className="rounded-lg border border-line px-4 py-3 outline-emerald" placeholder="Email address" />
          <select className="rounded-lg border border-line px-4 py-3 outline-emerald">
            <option>Student</option>
            <option>Recruiter</option>
            <option>Placement Admin</option>
          </select>
          <input className="rounded-lg border border-line px-4 py-3 outline-emerald" placeholder="Password" type="password" />
          <button className="rounded-lg bg-navy px-4 py-3 font-bold text-white md:col-span-2">Register</button>
        </form>
      </section>
    </main>
  );
}
