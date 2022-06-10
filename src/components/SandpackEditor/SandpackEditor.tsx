import { Sandpack } from "@codesandbox/sandpack-react";
import React from "react";
import { createFileMap } from "./createFileMap";

const SandpackEditor = ({
  children,
  dependencies = {},
}: {
  children: JSX.Element;
  dependencies: { [key: string]: string };
}) => {
  const files = createFileMap(children);

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

export default SandpackEditor;
