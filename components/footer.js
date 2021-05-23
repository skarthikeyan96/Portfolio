import React from "react";

const Footer = () => {
  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span class="ml-3 text-xl">Karthikeyan</span>
        </a>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020
          <a
            href="https://twitter.com/karthik_coder"
            class="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @karthik_coder
          </a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            class="ml-3 text-gray-500 uppercase tracking-wide"
            href="https://twitter.com/karthik_coder"
          >
            Twitter
          </a>
          <a
            class="ml-3 text-gray-500 uppercase tracking-wide"
            href="https://www.instagram.com/karthi.codes"
          >
            Instagram
          </a>
          <a
            class="ml-3 text-gray-500 uppercase tracking-wide"
            href="https://github.com/skarthikeyan96"
          >
            Github
          </a>
          <a
            class="ml-3 text-gray-500 uppercase tracking-wide"
            href="https://www.linkedin.com/in/karthikeyan-s-4a13608a/"
          >
            linkedin
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
