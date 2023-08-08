// For example, RuleManagement.tsx
import React, { useEffect } from "react";
import Blockly from "blockly";

const BlocklyEditor: React.FC = () => {
  const toolbox = {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "controls_if",
      },
      {
        kind: "block",
        type: "controls_repeat_ext",
      },
      {
        kind: "block",
        type: "logic_compare",
      },
      {
        kind: "block",
        type: "math_number",
      },
      {
        kind: "block",
        type: "math_arithmetic",
      },
      {
        kind: "block",
        type: "text",
      },
      {
        kind: "block",
        type: "text_print",
      },
    ],
  };

  let workspace: Blockly.Workspace;

  useEffect(() => {
    workspace = Blockly.inject("blocklyDiv", {
      toolbox: toolbox,
    });
  }, []);

  return <div id="blocklyDiv" style={{ height: "480px", width: "600px" }} />;
};

export default BlocklyEditor;
