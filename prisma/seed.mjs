import { PrismaClient, Role, ApplicationStatus, ApprovalStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.application.deleteMany();
  await prisma.resume.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.announcement.deleteMany();
  await prisma.studentProfile.deleteMany();
  await prisma.recruiterProfile.deleteMany();
  await prisma.job.deleteMany();
  await prisma.company.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await bcrypt.hash("password123", 10);

  const studentUser = await prisma.user.create({
    data: { name: "Ananya Sharma", email: "student@placewise.dev", passwordHash, role: Role.STUDENT }
  });
  const recruiterUser = await prisma.user.create({
    data: { name: "Rahul Menon", email: "recruiter@placewise.dev", passwordHash, role: Role.RECRUITER }
  });
  await prisma.user.create({
    data: { name: "Placement Admin", email: "admin@placewise.dev", passwordHash, role: Role.ADMIN }
  });

  const microsoft = await prisma.company.create({
    data: {
      name: "Microsoft",
      industry: "Cloud and Productivity",
      website: "https://microsoft.com",
      status: ApprovalStatus.APPROVED
    }
  });

  const student = await prisma.studentProfile.create({
    data: {
      userId: studentUser.id,
      rollNumber: "CSE22A041",
      branch: "CSE",
      cgpa: 8.7,
      skills: ["React", "Node.js", "SQL", "TypeScript", "Docker"],
      graduationYear: 2027,
      backlogCount: 0,
      phone: "+91 98765 43210",
      linkedIn: "https://linkedin.com/in/ananya",
      github: "https://github.com/ananya",
      verified: true,
      resume: { create: { fileName: "ananya-resume.pdf", fileUrl: "/demo/resume.pdf" } }
    }
  });

  await prisma.recruiterProfile.create({
    data: {
      userId: recruiterUser.id,
      companyId: microsoft.id,
      title: "University Recruiter",
      verified: true
    }
  });

  const job = await prisma.job.create({
    data: {
      companyId: microsoft.id,
      title: "Software Engineer Intern",
      role: "Internship",
      packageLpa: 18,
      location: "Hyderabad",
      requiredSkills: ["React", "TypeScript", "SQL", "Data Structures"],
      eligibleBranches: ["CSE", "IT", "ECE"],
      minCgpa: 8,
      maxBacklogs: 0,
      graduationYear: 2027,
      deadline: new Date("2026-09-15"),
      description: "Build reliable cloud product experiences with a strong engineering team.",
      status: ApprovalStatus.APPROVED
    }
  });

  await prisma.application.create({
    data: {
      studentId: student.id,
      jobId: job.id,
      status: ApplicationStatus.SHORTLISTED,
      matchScore: 88,
      matchReason: "Strong match because React, TypeScript, and SQL align with most requirements."
    }
  });

  await prisma.announcement.create({
    data: {
      title: "Microsoft coding round opens this week",
      message: "Eligible students should update resumes before the assessment window.",
      audience: Role.STUDENT
    }
  });
}

main().finally(async () => prisma.$disconnect());
