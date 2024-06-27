"use client";

import dynamic from "next/dynamic";
const IDEEditor = dynamic(
  () => import("@/components/dashboard/editor/IDEEditor"),
  { ssr: false }
);
import React from "react";

const BlogPage = () => {
  return (
    <div className="border ">
      <h2 className="scroll-m-20 text-accent border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Add Blog
      </h2>
      <IDEEditor />
    </div>
  );
};

export default BlogPage;
