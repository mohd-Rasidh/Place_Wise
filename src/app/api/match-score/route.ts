import { NextResponse } from "next/server";
import { jobs, students } from "@/lib/demo-data";
import { getMatch } from "@/lib/matching";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const student = students.find((item) => item.id === searchParams.get("studentId")) ?? students[0];
  const job = jobs.find((item) => item.id === searchParams.get("jobId")) ?? jobs[0];
  return NextResponse.json(getMatch(student, job));
}
