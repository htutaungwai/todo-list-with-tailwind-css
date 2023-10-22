// src/Tiptap.jsx
import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";

// define your extension array
const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

const Tiptap = () => {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={content}
    ></EditorProvider>
  );
};

export default Tiptap;
