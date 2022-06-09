import {
  Sandpack,
  SandpackProvider,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackTranspiledCode,
  SandpackLayout,
  SandpackFile,
} from "@codesandbox/sandpack-react";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import * as RR from "react-router-dom";
import { createFileMap } from "./createFileMap";

export default ({
  children,
  dependencies = {},
}: {
  children: JSX.Element;
  dependencies: { [key: string]: string };
}) => {
  let codeSnippets = React.Children.toArray(children) as React.ReactElement[];
  const files = createFileMap(codeSnippets);

  return (
    <Sandpack
      template="react-ts"
      files={files}
      options={{
        showNavigator: true,
      }}
      customSetup={{
        dependencies,
      }}
    />
  );
};
