import DatabaseTable from "@/components/DatabaseTable";

export default function App() {
  return (
    <div className="max-w-5xl mx-auto py-20 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-4">Projects & Experiments</h1>
        <p className="text-md text-gray-700">
          A dashboard for{" "}
          <a
            href="http://nischalthapa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline hover:text-blue-600"
          >
            Nischal's
          </a>{" "}
          frontend projects and experiments // A user-friendly version of my
          Github repo
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Frontend Mentor Projects</h2>
        <div className=" mb-2">
          <p className="text-md text-gray-700 leading-relaxed ">
            Practicing HTML, CSS & JavaScript by replicating the given design
            briefs in{" "}
            <a
              href="https://www.frontendmentor.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline hover:text-blue-600"
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
        <div className="mb-2">
          <p className="text-md text-gray-700 leading-relaxed">
            All the projects completed as part of{" "}
            <a
              href="https://www.theodinproject.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline hover:text-blue-600"
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
