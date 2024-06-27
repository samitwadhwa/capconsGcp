"use client";
import React, { useState, useEffect } from "react";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";

// Dynamically import FroalaEditor with no SSR
import FroalaEditor from "react-froala-wysiwyg";

type Props = {};

const IDEEditor = (props: Props) => {
  const [content, setContent] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This code will run only on the client side
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient ? (
        <React.Suspense fallback={<div>Loading...</div>}>
          <FroalaEditor
            tag="textarea"
            model={content}
            config={{
              theme: "dark",
              charCounterMax: "140",
            }}
            onModelChange={(e: React.SetStateAction<string>) => {
              setContent(e);
              console.log(e);
            }}
          />
        </React.Suspense>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default IDEEditor;
