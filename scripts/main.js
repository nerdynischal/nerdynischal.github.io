import { loadProjects } from "./projects.js";

loadProjects({
  tableName: "odin",
  containerId: "links-odin",
  fields: {
    title: "title",
    sourceCode: "source_url",
    preview: "preview_url",
  },
});

loadProjects({
  tableName: "links",
  containerId: "links",
  fields: {
    title: "title",
    sourceCode: "source_code_url",
    preview: "preview_url",
  },
});
