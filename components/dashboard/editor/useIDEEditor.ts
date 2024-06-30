import { useContext } from "react";
import IDEEditorContext from "./context";

export default function useIDEEditor() {
  const ide = useContext(IDEEditorContext);
  if (!ide) throw new Error("No editor backend found");
  return ide;
}
