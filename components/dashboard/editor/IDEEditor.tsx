"use client";
import React, { useState, useEffect } from "react";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "font-awesome/css/font-awesome.css";
import "froala-editor/js/plugins.pkgd.min.js";
// Import Froala Editor CSS files
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/themes/dark.min.css";
import "froala-editor/css/themes/royal.min.css";
import "froala-editor/css/themes/gray.min.css";
// Import Froala Editor JS file
import "froala-editor/js/froala_editor.pkgd.min.js";
import FroalaEditor from "react-froala-wysiwyg";
import useIDEEditor from "./useIDEEditor";
import { useTheme } from "next-themes";

const IDEEditor = () => {
  const { content, setContent, placeholder } = useIDEEditor();
  const [isClient, setIsClient] = useState(false);
  const editortheme = useTheme();

  useEffect(() => {
    // This code will run only on the client side
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient ? (
        <React.Suspense fallback={<div>Loading...</div>}>
          <FroalaEditor
            key={editortheme.theme}
            tag="textarea"
            model={content}
            config={{
              theme: editortheme.theme === "dark" ? "dark" : "gray",
              charCounterMax: "140",
              placeholderText: placeholder,
            }}
            onModelChange={(content: string) => setContent(content)}
          />
        </React.Suspense>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default IDEEditor;
