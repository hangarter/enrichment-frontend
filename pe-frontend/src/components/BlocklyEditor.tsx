// For example, RuleManagement.tsx
import React, { useEffect } from "react";
import Blockly from "blockly";

const BlocklyEditor: React.FC = () => {
  const toolbox = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "210",
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
            type: "variables_get_dynamic",
          },
        ],
      },
      {
        kind: "sep",
      },
      {
        kind: "category",
        name: "Values",
        colour: "120",
        contents: [
          {
            kind: "block",
            type: "logic_boolean",
          },
          {
            kind: "block",
            type: "text_join",
          },
          {
            kind: "block",
            type: "variables_set",
          },
          {
            kind: "block",
            type: "variables_get",
          },
        ],
      },

      //   {
      //     kind: "category",
      //     name: "Variables",
      //     custom: "VARIABLE",
      //     colour: "320",
      //   },
      //   {
      //     kind: "category",
      //     name: "Functions",
      //     custom: "PROCEDURE",
      //   },
    ],
  };

  let workspace: Blockly.Workspace | null = null;

  useEffect(() => {
    if (workspace === null) {
      //   Blockly.defineBlocksWithJsonArray([
      //     {
      //       type: "variables_set",
      //       message0: "%{BKY_VARIABLES_SET}",
      //       args0: [
      //         {
      //           type: "field_variable",
      //           name: "VAR",
      //           variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
      //         },
      //         {
      //           type: "input_value", // This expects an input of any type
      //           name: "VALUE",
      //         },
      //       ],
      //     },
      //     {
      //       type: "string_length",
      //       message0: "length of %1",
      //       args0: [
      //         {
      //           type: "input_value",
      //           name: "VALUE",
      //           check: "String",
      //         },
      //       ],
      //       output: "Number",
      //       colour: 160,
      //       tooltip: "Returns number of letters in the provided text.",
      //       helpUrl: "http://www.w3schools.com/jsref/jsref_length_string.asp",
      //     },
      //   ]);
      workspace = Blockly.inject("blocklyDiv", {
        toolbox: toolbox,
        horizontalLayout: false,
        grid: { spacing: 20, length: 3, colour: "#ccc", snap: true },
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true,
        },
        move: {
          scrollbars: {
            horizontal: true,
            vertical: true,
          },
          drag: true,
          wheel: false,
        },
      });
      workspace.createVariable("GL_MANUFACTURER");
    }
  }, []);

  return <div id="blocklyDiv" style={{ height: "480px", width: "100%" }} />;
};

export default BlocklyEditor;
