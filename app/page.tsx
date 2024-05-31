import React from "react";
import Feed from '../components/Feed'
const page = () => {
  return (
    <body className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and share</h1>
      <br className="max-md:hidden" />
      <h1 className="text-2xl">
        <span className="orange_gradient text-center"> AI-powered Prompts</span>
      </h1>{" "}
      <p className="desc text-center">
        Promptoia is an open-source AI prompting tool for modern worl do
        discover, creaet and share creative Prompts.
      </p>
      <Feed/>
    </body>
  );
};

export default page;
