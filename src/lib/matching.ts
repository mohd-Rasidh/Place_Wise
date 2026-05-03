import type { Job, Student } from "@/lib/demo-data";

export function isEligible(student: Student, job: Job) {
  return (
    student.cgpa >= job.minCgpa &&
    job.eligibleBranches.includes(student.branch) &&
    student.graduationYear === job.graduationYear &&
    student.backlogCount <= job.maxBacklogs
  );
}

export function getMatch(student: Student, job: Job) {
  const matchedSkills = job.requiredSkills.filter((skill) =>
    student.skills.some((studentSkill) => studentSkill.toLowerCase() === skill.toLowerCase())
  );
  const skillScore = (matchedSkills.length / job.requiredSkills.length) * 55;
  const cgpaScore = student.cgpa >= job.minCgpa ? 18 : Math.max(0, (student.cgpa / job.minCgpa) * 12);
  const branchScore = job.eligibleBranches.includes(student.branch) ? 12 : 0;
  const backlogScore = student.backlogCount <= job.maxBacklogs ? 8 : 0;
  const profileScore = Math.min(7, Math.round(student.profileCompletion / 15));
  const score = Math.round(skillScore + cgpaScore + branchScore + backlogScore + profileScore);
  const reason =
    matchedSkills.length > 0
      ? `Strong match because your ${matchedSkills.join(", ")} skills match ${Math.round(
          (matchedSkills.length / job.requiredSkills.length) * 100
        )}% of the job requirements.`
      : "Improve this match by adding more required skills to your profile.";

  return { score: Math.min(score, 100), reason, matchedSkills };
}
