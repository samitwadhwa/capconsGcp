"use client";
import React, { useState, ReactNode } from "react";
import IDEEditorContext from "./context";
import dynamic from "next/dynamic";
import IDEDropZone from "./IDEDropZone";
const IDEEditor = dynamic(() => import("./IDEEditor"), { ssr: false });

export type editorTheme = "dark" | "gray";

interface IDEEditorProviderProps {
  children: ReactNode;
  placeholder: string;
}

interface IDEComponent
  extends React.ForwardRefExoticComponent<
    IDEEditorProviderProps & React.RefAttributes<HTMLDivElement>
  > {
  Editor: typeof IDEEditor;
  DropZOne: typeof IDEDropZone;
}

const IDE = React.forwardRef<HTMLDivElement, IDEEditorProviderProps>(
  ({ children, placeholder }, ref) => {
    const [content, setContent] = useState<string>("");

    return (
      <IDEEditorContext.Provider value={{ content, setContent, placeholder }}>
        <div ref={ref}>{children}</div>
      </IDEEditorContext.Provider>
    );
  }
) as IDEComponent;

IDE.Editor = IDEEditor;
IDE.DropZOne = IDEDropZone;
IDE.displayName = "editor";

export default IDE;
