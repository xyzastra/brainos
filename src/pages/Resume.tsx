import { Header } from "@/components/Header";
import { SectionHeader } from "@/components/SectionHeader";
import { Briefcase, GraduationCap, Award, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-8 py-24 max-w-4xl">
        <SectionHeader
          title="Resume"
          description="Professional experience, technical skills, and achievements in software development."
        />

        {/* Contact Info */}
        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>your.email@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Your Location</span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">Professional Summary</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Passionate developer with expertise in building modern web applications. Focused on creating 
            clean, maintainable code and delivering exceptional user experiences. Strong advocate for 
            continuous learning and knowledge sharing.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
            <Briefcase className="h-7 w-7" />
            Experience
          </h2>
          <CardContent className="space-y-6">
            <div className="border-b border-border pb-8">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-serif font-semibold text-xl">Software Developer</h3>
                  <p className="text-muted-foreground">Company Name</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground">2022 - Present</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><span>•</span><span>Developed and maintained full-stack web applications</span></li>
                <li className="flex gap-2"><span>•</span><span>Collaborated with cross-functional teams to deliver features</span></li>
                <li className="flex gap-2"><span>•</span><span>Improved application performance by 40%</span></li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-serif font-semibold text-xl">Junior Developer</h3>
                  <p className="text-muted-foreground">Previous Company</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground">2020 - 2022</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><span>•</span><span>Built responsive user interfaces with React</span></li>
                <li className="flex gap-2"><span>•</span><span>Integrated RESTful APIs and third-party services</span></li>
                <li className="flex gap-2"><span>•</span><span>Participated in code reviews and agile ceremonies</span></li>
              </ul>
            </div>
          </CardContent>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="h-7 w-7" />
            Education
          </h2>
          <div className="flex justify-between items-start border-b border-border pb-8">
            <div>
              <h3 className="font-serif font-semibold text-xl">Bachelor of Science in Computer Science</h3>
              <p className="text-muted-foreground">University Name</p>
            </div>
            <span className="text-sm font-mono text-muted-foreground">2016 - 2020</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
            <Award className="h-7 w-7" />
            Technical Skills
          </h2>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif font-semibold text-lg mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "Python", "HTML", "CSS"].map((skill) => (
                    <Badge key={skill} variant="outline" className="font-mono">{skill}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-serif font-semibold text-lg mb-3">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Express", "Tailwind CSS", "Next.js"].map((skill) => (
                    <Badge key={skill} variant="outline" className="font-mono">{skill}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-serif font-semibold text-lg mb-3">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS", "PostgreSQL", "MongoDB"].map((skill) => (
                    <Badge key={skill} variant="outline" className="font-mono">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </main>
    </div>
  );
};

export default Resume;
