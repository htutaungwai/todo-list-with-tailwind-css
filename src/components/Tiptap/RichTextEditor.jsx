import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./RichTextEditor.css";

// ICONS
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaCode,
  FaBan,
  FaParagraph,
  FaListUl,
  FaListOl,
  FaTerminal,
  FaQuoteRight,
  FaRuler,
  FaUndoAlt,
  FaRedoAlt,
  FaArrowDown,
} from "react-icons/fa";

import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
} from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../../features/todosSlice/todosSlice";
import { revealEditPage } from "../../features/showPagesSlice/revealSlice";

const RichTextEditor = () => {
  const content = useSelector((state) => state.todo.selectedTodo.content);
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-row rounded-md border w-fit items-center basis-0 sticky top-0 bg-zinc-100 z-50 my-4">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : "editor"}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : "editor"}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : "editor"}
      >
        <FaStrikethrough />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : "editor"}
      >
        <FaCode />
      </button>

      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : "editor"}
      >
        <FaParagraph />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 }) ? "is-active" : "editor"
        }
      >
        <LuHeading1 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 }) ? "is-active" : "editor"
        }
      >
        <LuHeading2 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 }) ? "is-active" : "editor"
        }
      >
        <LuHeading3 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          editor.isActive("heading", { level: 4 }) ? "is-active" : "editor"
        }
      >
        <LuHeading4 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          editor.isActive("heading", { level: 5 }) ? "is-active" : "editor"
        }
      >
        <LuHeading5 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={
          editor.isActive("heading", { level: 6 }) ? "is-active" : "editor"
        }
      >
        <LuHeading6 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : "editor"}
      >
        <FaListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : "editor"}
      >
        <FaListOl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : "editor"}
      >
        <FaTerminal />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : "editor"}
      >
        <FaQuoteRight />
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="editor"
      >
        <FaRuler />
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="editor"
      >
        <FaArrowDown />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="editor"
      >
        <FaUndoAlt />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="editor"
      >
        <FaRedoAlt />
      </button>

      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="editor"
      >
        <FaBan />
      </button>

      <input
        className="inputColor"
        type="color"
        onInput={(event) =>
          editor.chain().focus().setColor(event.target.value).run()
        }
        value={editor.getAttributes("textStyle").color}
        data-testid="setColor"
      />

      {/* 
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button> */}
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

export default () => {
  const { description, id, content } = useSelector(
    (state) => state.todo.selectedTodo
  );

  const dispatch = useDispatch();

  const updateHandler = (text, html) => {
    dispatch(
      updateTodo({
        id: id,
        name: "DESCRIPTION",
        value: text,
      })
    );

    dispatch(
      updateTodo({
        id: id,
        name: "CONTENT",
        value: html,
      })
    );
  };

  return (
    <EditorProvider
      slotBefore={<RichTextEditor />}
      extensions={extensions}
      content={content}
      onUpdate={({ editor }) => {
        updateHandler(editor.getText(), editor.getHTML());
      }}
    ></EditorProvider>
  );
};
