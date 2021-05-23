import React from "react";

const Projects = (props) => {
  const projects = props.projects.entriesData;
  return (
    <div id="projects">
      <section class="bg-white dark:bg-gray-800 font-abril">
        <div class="container px-5 py-24 mx-auto">
          <div className="py-8">
            <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
              {props.title}
            </h2>
          </div>
          {projects.map((project) => {
            return (
              <div class="-my-8 divide-y-2 divide-gray-800">
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                  <div class="md:flex-grow">
                    <h2 class="text-2xl font-mulish mb-2 capitalize">
                      {project.name}
                    </h2>
                    {project.tags.map((tag) => {
                      return (
                        <div
                          style={{ backgroundColor: "#f9efe7" }}
                          class="mt-4 mb-4 mr-4 text-xs inline-flex items-center font-mulish leading-sm uppercase px-3 py-1 text-gray-800  uppercase rounded-full"
                        >
                          {tag}
                        </div>
                      );
                    })}

                    <p class="leading-relaxed font-mulish text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                    {project.preview_url && (
                      <a
                        href={project.preview_url}
                        target="_blank"
                        class="text-indigo-400 inline-flex items-center mt-4 font-mulish mr-3"
                      >
                       Live Preview
                       
                      </a>
                    )}
                    {project.repo_url && (
                      <a
                        href={project.repo_url}
                        target="_blank"
                        class="text-indigo-400 inline-flex items-center mt-4 font-mulish"
                      >
                       Source Code
                       
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
