import React from "react";
import Button from "./Button";
import { blogs } from "../assets/assets";

const Blogs = () => {
  return (
    <section id="blog">
      <div className="mx-10 md:mx-24 my-16 flex items-center justify-between customResponsive">
        <h1 className="text-4xl">Our Blogs</h1>
        <Button bgColor={true} border={true}>
          More blog
        </Button>
      </div>

      {/* Blogs */}
      <div className="flex flex-col lg:flex-row gap-7 items-center">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6 border border-light-black"
          >
            {/* Image Portion */}

            <img
              className="w-full block h-[380px] md:h-full"
              src={blog.image}
              alt=""
            />

            {/* Blog Content */}
            <div className="py-5 px-7 md:pr-10">
              <h3 className="text-2xl text-primary-color font-semibold leading-tight">
                {blog.blogTitle}
              </h3>
              <p className="text-lg my-3 leading-tight">{blog.blogContent}</p>

              <p className="text-primary-color cursor-pointer underline underline-offset-8 ">
                Learn More
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
