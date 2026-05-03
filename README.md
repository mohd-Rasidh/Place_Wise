# PlaceWise

PlaceWise is a full-stack Smart Campus Placement Portal for students, recruiters, and placement admins. It includes role-based dashboards, eligibility matching, job-student match scores, placement analytics, demo data, and a polished SaaS-style interface.

## Tech Stack

- Next.js + TypeScript
- Tailwind CSS
- PostgreSQL + Prisma
- NextAuth-ready project structure
- Lucide React icons
- Recharts analytics

## Quick Start

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

Open `http://localhost:3000`.

## Demo Accounts

- Student: `student@placewise.dev`
- Recruiter: `recruiter@placewise.dev`
- Admin: `admin@placewise.dev`
- Password for seeded accounts: `password123`

The current UI uses seeded mock data from `src/lib/demo-data.ts` so it looks complete immediately. The Prisma schema and seed file are ready for connecting the interface to real API routes.

## Deployment

1. Create a PostgreSQL database on Supabase, Neon, Railway, or Render.
2. Add `DATABASE_URL`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL` to your hosting provider.
3. Run Prisma migrations during deployment.
4. Deploy the Next.js app to Vercel or Render.
