import supabase from "./supabaseClient.js";

export async function loadProjects({ tableName, containerId, fields }) {
  const { data: projects, error } = await supabase.from(tableName).select("*");

  if (error) {
    console.error(`Error loading data from ${tableName}:`, error);
    return;
  }

  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container element with id '${containerId}' not found`);
    return;
  }
  console.log("Loaded projects from", tableName, projects);

  container.innerHTML = "";

  projects.forEach((project) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("row");

    if (fields.title && project[fields.title]) {
      const title = document.createElement("h3");
      title.textContent = project[fields.title];
      wrapper.appendChild(title);
    }
    const linksWrapper = document.createElement("div");
    linksWrapper.classList.add("links-wrapper");

    if (fields.sourceCode && project[fields.sourceCode]) {
      const sourceLink = document.createElement("a");
      sourceLink.href = project[fields.sourceCode];
      sourceLink.textContent = "Source Code";
      sourceLink.target = "_blank";
      sourceLink.rel = "noopener noreferrer";
      sourceLink.classList.add("link");

      const githubIcon = document.createElement("img");
      githubIcon.src = "./imgs/github-logo-fill.svg";
      githubIcon.alt = "Github Logo";
      sourceLink.insertBefore(githubIcon, sourceLink.firstChild);
      linksWrapper.appendChild(sourceLink);
    }

    if (fields.preview && project[fields.preview]) {
      const previewLink = document.createElement("a");
      previewLink.href = project[fields.preview];
      previewLink.textContent = "Live Preview";
      previewLink.target = "_blank";
      previewLink.rel = "noopener noreferrer";
      previewLink.classList.add("link");

      const webIcon = document.createElement("img");
      webIcon.src = "./imgs/globe-simple-fill.svg";
      webIcon.alt = "Globe icon";
      previewLink.insertBefore(webIcon, previewLink.firstChild);
      linksWrapper.appendChild(previewLink);
    }
    wrapper.appendChild(linksWrapper);
    container.appendChild(wrapper);
  });
}
