import React from "react";

const Blog = (props) => {
  const blogs = props.blogs;
  return (
    <>
      <section class="bg-white dark:bg-gray-800 font-abril">
        <div class="container px-5 py-24 mx-auto">
          <div className="py-8">
            <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Latest Blogs
            </h2>
          </div>
          {blogs.map((blog) => {
            return (
              <div class="-my-8 divide-y-2 divide-gray-800">
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                  <div class="md:flex-grow">
                    <h2 class="text-2xl font-mulish mb-2">{blog.title}</h2>
                    {blog.tag_list.map((tag) => {
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
                      {blog.description}
                    </p>
                    <a
                      href={blog.url}
                      target="_blank"
                      class="text-indigo-400 inline-flex items-center mt-4 font-mulish"
                    >
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blog;
