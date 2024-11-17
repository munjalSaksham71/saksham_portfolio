import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

export const AboutMe = () => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          I am a Software engineer
          with expertise in building scalable and efficient web applications
          using modern technologies. I thrive on creating user-friendly
          solutions and have a strong background in leading impactful projects.
        </p>
      </CardContent>
    </Card>
  );
};
