"use client";
import { createContext } from "react";

export interface IDEState {
  content: string;
  setContent: (content: string) => void;

  placeholder: "Write your message" | string;
}

const IDEEditorContext = createContext<IDEState | undefined>(undefined);

export default IDEEditorContext;
