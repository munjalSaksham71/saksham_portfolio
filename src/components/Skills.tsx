import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "SQL",
  "HTML",
  "CSS",
  "TailwindCSS",
  "ReactJS",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Linux",
  "Windows",
  "MacOS",
];

export const Skills = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <Badge key={i} variant="secondary">
              {s}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
