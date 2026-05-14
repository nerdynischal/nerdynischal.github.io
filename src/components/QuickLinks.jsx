import {Card, CardContent} from "@/components/ui/card";

import {
  Globe,
  MonitorPlay,
  GraduationCap,
  Gamepad2,
  Blocks,
} from "lucide-react";

const links = [
  {
    title: "The Odin Project",
    description: "Full stack curriculum with hands-on projects",
    href: "https://www.theodinproject.com/",
    icon: GraduationCap,
  },
  {
    title: "Frontend Mentor",
    description: "Practice by replicating design briefs",
    href: "https://www.frontendmentor.io/",
    icon: Blocks,
  },
  {
    title: "roadmap.sh",
    description: "Comprehensive roadmap to learn web development",
    href: "https://roadmap.sh",
    icon: Globe,
  },
  {
    title: "SuperSimpleDev",
    description: "Excellent YouTube channel to supplement learning",
    href: "https://www.youtube.com/c/SuperSimpleDev",
    icon: MonitorPlay,
  },
  {
    title: "Coder Coder",
    description: "Picked up a lot of tips and best practices from this channel",
    href: "https://www.youtube.com/@TheCoderCoder",
    icon: MonitorPlay,
  },
  {
    title: "CSSBattle",
    description:
      "Fun challenges to improve CSS skills and learn new techniques",
    href: "https://cssbattle.dev",
    icon: Gamepad2,
  },
];

export default function QuickLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.title}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            <Card
              className="
                h-full
                rounded-2xl
                border
                bg-card
                hover:bg-muted/40
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-md
              "
            >
              <CardContent className="p-5 flex flex-col gap-4">
                <div
                  className="
                    h-10 w-10
                    rounded-2xl
                    bg-muted
                    flex items-center justify-center
                  "
                >
                  <Icon className="h-5 w-5 text-foreground" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-semibold text-sm">{link.title}</h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {link.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </a>
        );
      })}
    </div>
  );
}
