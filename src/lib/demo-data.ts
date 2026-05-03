export type Status = "Applied" | "Shortlisted" | "Interview" | "Selected" | "Rejected" | "Pending" | "Approved";

export type Student = {
  id: string;
  name: string;
  rollNumber: string;
  branch: string;
  cgpa: number;
  skills: string[];
  graduationYear: number;
  backlogCount: number;
  phone: string;
  linkedIn: string;
  github: string;
  verified: boolean;
  profileCompletion: number;
};

export type Job = {
  id: string;
  title: string;
  company: string;
  role: string;
  packageLpa: number;
  location: string;
  requiredSkills: string[];
  eligibleBranches: string[];
  minCgpa: number;
  maxBacklogs: number;
  graduationYear: number;
  deadline: string;
  description: string;
  status: Status;
};

export const students: Student[] = [
  {
    id: "stu-1",
    name: "Ananya Sharma",
    rollNumber: "CSE22A041",
    branch: "CSE",
    cgpa: 8.7,
    skills: ["React", "Node.js", "SQL", "TypeScript", "Docker"],
    graduationYear: 2027,
    backlogCount: 0,
    phone: "+91 98765 43210",
    linkedIn: "linkedin.com/in/ananya",
    github: "github.com/ananya",
    verified: true,
    profileCompletion: 92
  },
  {
    id: "stu-2",
    name: "Karthik Rao",
    rollNumber: "IT22B018",
    branch: "IT",
    cgpa: 8.2,
    skills: ["Java", "Spring Boot", "MySQL", "AWS"],
    graduationYear: 2027,
    backlogCount: 0,
    phone: "+91 99887 76655",
    linkedIn: "linkedin.com/in/karthik",
    github: "github.com/karthik",
    verified: true,
    profileCompletion: 86
  },
  {
    id: "stu-3",
    name: "Meera Iyer",
    rollNumber: "ECE22C027",
    branch: "ECE",
    cgpa: 7.9,
    skills: ["Python", "Data Analysis", "SQL", "Power BI"],
    graduationYear: 2027,
    backlogCount: 0,
    phone: "+91 91234 56780",
    linkedIn: "linkedin.com/in/meera",
    github: "github.com/meera",
    verified: false,
    profileCompletion: 74
  },
  {
    id: "stu-4",
    name: "Nikhil Verma",
    rollNumber: "ME22D010",
    branch: "MECH",
    cgpa: 7.4,
    skills: ["Python", "Excel", "Tableau", "Statistics"],
    graduationYear: 2027,
    backlogCount: 1,
    phone: "+91 90000 11122",
    linkedIn: "linkedin.com/in/nikhil",
    github: "github.com/nikhil",
    verified: true,
    profileCompletion: 68
  }
];

export const jobs: Job[] = [
  {
    id: "job-1",
    title: "Software Engineer Intern",
    company: "Microsoft",
    role: "Internship",
    packageLpa: 18,
    location: "Hyderabad",
    requiredSkills: ["React", "TypeScript", "SQL", "Data Structures"],
    eligibleBranches: ["CSE", "IT", "ECE"],
    minCgpa: 8,
    maxBacklogs: 0,
    graduationYear: 2027,
    deadline: "15 Sep 2026",
    description: "Build reliable cloud product experiences with a strong engineering team.",
    status: "Approved"
  },
  {
    id: "job-2",
    title: "Full Stack Developer",
    company: "Zoho",
    role: "Full-time",
    packageLpa: 9.5,
    location: "Chennai",
    requiredSkills: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    eligibleBranches: ["CSE", "IT"],
    minCgpa: 7.5,
    maxBacklogs: 1,
    graduationYear: 2027,
    deadline: "30 Aug 2026",
    description: "Work on scalable SaaS features used by global business teams.",
    status: "Approved"
  },
  {
    id: "job-3",
    title: "Data Analyst",
    company: "Deloitte",
    role: "Full-time",
    packageLpa: 7.2,
    location: "Bengaluru",
    requiredSkills: ["SQL", "Python", "Power BI", "Statistics"],
    eligibleBranches: ["CSE", "IT", "ECE", "EEE", "MECH"],
    minCgpa: 7,
    maxBacklogs: 1,
    graduationYear: 2027,
    deadline: "12 Oct 2026",
    description: "Create analytics dashboards and insights for consulting clients.",
    status: "Pending"
  },
  {
    id: "job-4",
    title: "Cloud Engineer",
    company: "Amazon",
    role: "Internship",
    packageLpa: 14,
    location: "Pune",
    requiredSkills: ["AWS", "Docker", "Linux", "Networking"],
    eligibleBranches: ["CSE", "IT", "ECE"],
    minCgpa: 8,
    maxBacklogs: 0,
    graduationYear: 2027,
    deadline: "05 Nov 2026",
    description: "Support cloud infrastructure automation and monitoring workflows.",
    status: "Approved"
  }
];

export const applications = [
  { id: "app-1", student: students[0], job: jobs[0], status: "Shortlisted" as Status, interviewDate: "22 Sep 2026" },
  { id: "app-2", student: students[0], job: jobs[1], status: "Applied" as Status, interviewDate: "" },
  { id: "app-3", student: students[1], job: jobs[3], status: "Interview" as Status, interviewDate: "11 Nov 2026" },
  { id: "app-4", student: students[2], job: jobs[2], status: "Selected" as Status, interviewDate: "18 Oct 2026" },
  { id: "app-5", student: students[3], job: jobs[2], status: "Rejected" as Status, interviewDate: "" }
];

export const companies = [
  { name: "Microsoft", industry: "Cloud", status: "Approved", offers: 18 },
  { name: "TCS", industry: "IT Services", status: "Approved", offers: 42 },
  { name: "Zoho", industry: "SaaS", status: "Approved", offers: 21 },
  { name: "Amazon", industry: "Cloud and Commerce", status: "Approved", offers: 11 },
  { name: "Deloitte", industry: "Consulting", status: "Pending", offers: 8 }
];

export const monthlyActivity = [
  { month: "Jun", applications: 44, offers: 8 },
  { month: "Jul", applications: 82, offers: 18 },
  { month: "Aug", applications: 128, offers: 31 },
  { month: "Sep", applications: 156, offers: 48 },
  { month: "Oct", applications: 112, offers: 36 }
];

export const branchStats = [
  { branch: "CSE", placed: 72, eligible: 180 },
  { branch: "IT", placed: 58, eligible: 140 },
  { branch: "ECE", placed: 44, eligible: 132 },
  { branch: "EEE", placed: 21, eligible: 90 },
  { branch: "MECH", placed: 18, eligible: 96 }
];

export const announcements = [
  "Microsoft coding round opens this week",
  "Resume verification closes on Friday",
  "Zoho interview schedule published"
];
