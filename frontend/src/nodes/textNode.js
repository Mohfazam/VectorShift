// textNode.js
import React, { useState } from 'react';
import BaseNode from './BaseNode/BaseNode';
import { nodeConfig } from './BaseNode/NodeConfig';

const TextNodeComponent = ({ id, data, selected }) => {
  const initialText = data?.text || '{{input}}';
  const [textValue, setTextValue] = useState(initialText);

  const extractVariables = (text) => {
    const variableRegex = /\{\{\s*(\w+)\s*\}\}/g;
    const matches = [...text.matchAll(variableRegex)];
    const variables = [...new Set(matches.map(match => match[1]))];
    
    return variables.map((variable, index) => {
      const totalVars = variables.length;
      const spacing = 80 / (totalVars + 1);
      return {
        type: 'target',
        side: 'left',
        idSuffix: variable,
        topPercent: 10 + (spacing * (index + 1))
      };
    });
  };

  const dynamicHandles = extractVariables(textValue);

  const calculateDimensions = (text) => {
    const lines = text.split('\n').length;
    const lineHeight = 20;
    const minHeight = 100;
    const maxHeight = 300;
    const padding = 60;

    const height = Math.min(maxHeight, Math.max(minHeight, (lines * lineHeight) + padding));

    const lineArray = text.split('\n');
    const maxLineLength = Math.max(...lineArray.map(line => line.length), 20);
    const charWidth = 8.5;
    const minWidth = 280;
    const maxWidth = 500;
    const widthPadding = 60;

    const width = Math.min(maxWidth, Math.max(minWidth, (maxLineLength * charWidth) + widthPadding));

    return { height, width, rows: Math.max(3, lines) };
  };

  const { height, width, rows } = calculateDimensions(textValue);

  const enhancedConfig = {
    ...nodeConfig.text,
    width: width,
    customHeight: height,
    handles: [
      ...dynamicHandles,
      { type: 'source', side: 'right', idSuffix: 'output', topPercent: 50 }
    ],
    fields: [
      {
        type: 'textarea',
        key: 'text',
        label: 'Text',
        defaultValue: initialText,
        placeholder: 'Enter text with {{variables}}...',
        rows: rows,
        customHeight: height
      }
    ]
  };

  const enhancedData = {
    ...data,
    config: enhancedConfig,
    text: textValue,
    onTextChange: setTextValue
  };

  return <BaseNode id={id} data={enhancedData} selected={selected} />;
};

export const TextNode = TextNodeComponent;
export default TextNodeComponent;