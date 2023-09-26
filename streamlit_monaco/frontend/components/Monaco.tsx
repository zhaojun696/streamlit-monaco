import { useRef } from "react";
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";

import Editor from "@monaco-editor/react";

const Monaco = ({ args, theme }: ComponentProps) => {
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

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
    updateStreamlit(args.value);
  };

  const handleEditorWillMount = (monaco: any) => {
    monaco.editor.defineTheme("streamlit", {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.foreground": theme?.textColor,
        "editor.background": theme?.backgroundColor,
        "editorCursor.foreground": theme?.primaryColor,
      },
    });
  };

  return (
    <div ref={observeElement} style={{ width: "100%", height: args.height }}>
      <Editor
        theme={args.theme}
        value={args.value}
        language={args.language}
        onMount={handleEditorDidMount}
        beforeMount={handleEditorWillMount}
        onChange={handleChange}
        options={{
          lineNumbers: args.lineNumbers ? "on" : "off",
          minimap: { enabled: args.minimap },
        }}
      />
    </div>
  );
};

export default withStreamlitConnection(Monaco);
