import DatabaseTable from "@/components/DatabaseTable";
import ThemeToggle from "@/components/ThemeToggle";
import QuickLinks from "@/components/QuickLinks";

export default function App() {
  return (
    <div className="max-w-5xl mx-auto px-10 py-16 space-y-16">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <section>
        <h1 className="text-4xl font-bold mb-4">Projects & Experiments</h1>
        <p className="text-md">
          A dashboard for{" "}
          <a
            href="http://nischalthapa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline hover:text-orange-400"
          >
            Nischal's
          </a>{" "}
          frontend projects and experiments // A user-friendly version of my
          Github repo
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Quicklinks</h2>
        <p className="text-md leading-relaxed mb-6">
          Some helpful resources that I found useful during my learning journey
        </p>

        <QuickLinks />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Frontend Mentor Projects</h2>
        <div className=" mb-6">
          <p className="text-md leading-relaxed ">
            Practicing HTML, CSS & JavaScript by replicating the given design
            briefs in{" "}
            <a
              href="https://www.frontendmentor.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline hover:text-orange-400"
            >
              Frontend Mentor
            </a>
            .
          </p>
        </div>

        <DatabaseTable
          tableName="links"
          columnOrder={["title", "module", "source_url", "preview_url"]}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Odin Projects</h2>
        <div className="mb-6">
          <p className="text-md leading-relaxed">
            All the projects completed as part of{" "}
            <a
              href="https://www.theodinproject.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline hover:text-orange-400"
            >
              the Odin Project
            </a>{" "}
            curriculum. HTML/CSS, JavaScript and React
          </p>
        </div>
        <DatabaseTable
          tableName="odin"
          columnOrder={["title", "module", "source_url", "preview_url"]}
        />
      </section>

      <footer className="mt-16 border-t pt-6  text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© Designed and developed by Nischal</p>
        <p className="text-xs">Built with React, Supabase & shadcn/ui</p>
      </footer>
    </div>
  );
}
