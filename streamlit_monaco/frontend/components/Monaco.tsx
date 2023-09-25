import { useRef } from "react";
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";

import Editor from "@monaco-editor/react";

const Monaco = ({ args }: ComponentProps) => {
  const editorRef = useRef<typeof Editor | null>(null);

  let timeout: NodeJS.Timeout;

  // Send editor content to streamlit
  const updateStreamlit = (value: string) => {
    Streamlit.setComponentValue(value);
  };

  // Called on editor update
  const handleChange = (value: string | undefined) => {
    if (value) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        updateStreamlit(value);
      }, 200);
    }
  };

  const resizeObserver = new ResizeObserver((entries: any) => {
    const height = entries[0].contentRect.height + 15;
    Streamlit.setFrameHeight(height);
  });

  const observeElement = (element: HTMLDivElement | null) => {
    if (element !== null) resizeObserver.observe(element);
    else resizeObserver.disconnect();
  };

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }

  return (
    <div ref={observeElement} style={{ width: "100%", height: args.height }}>
      <Editor
        value={args.value}
        language={args.language}
        onMount={handleEditorDidMount}
        onChange={handleChange}
      />
    </div>
  );
};

export default withStreamlitConnection(Monaco);
