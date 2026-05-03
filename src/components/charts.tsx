"use client";

import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { branchStats, monthlyActivity } from "@/lib/demo-data";

export function ActivityChart() {
  return (
    <div className="h-72 rounded-lg border border-line bg-white p-5 shadow-soft">
      <h2 className="mb-4 text-lg font-bold text-navy">Monthly Placement Activity</h2>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={monthlyActivity}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e6ebf2" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="applications" stroke="#0f2742" strokeWidth={3} />
          <Line type="monotone" dataKey="offers" stroke="#0f9f6e" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BranchChart() {
  return (
    <div className="h-72 rounded-lg border border-line bg-white p-5 shadow-soft">
      <h2 className="mb-4 text-lg font-bold text-navy">Branch-wise Placements</h2>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={branchStats}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e6ebf2" />
          <XAxis dataKey="branch" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="placed" fill="#0f9f6e" radius={[6, 6, 0, 0]} />
          <Bar dataKey="eligible" fill="#dbe5ef" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
