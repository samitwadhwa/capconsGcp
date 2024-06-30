"use client";

import IDE from "@/components/dashboard/editor/IDE";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <IDE placeholder="Type/choose a block">
        <h2 className="scroll-m-20 text-accent pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          Add Blog
        </h2>
        <IDE.Editor />
        <div className="mt-4 bg-card">
          <IDE.DropZOne />
        </div>
      </IDE>
    </div>
  );
};

export default BlogPage;
