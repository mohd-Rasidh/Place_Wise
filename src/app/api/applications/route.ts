import { NextResponse } from "next/server";
import { applications } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({ applications });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    message: "Application created in demo mode",
    application: {
      id: `app-${Date.now()}`,
      status: "Applied",
      ...body
    }
  }, { status: 201 });
}
