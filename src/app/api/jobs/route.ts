import { NextResponse } from "next/server";
import { jobs } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({ jobs });
}
