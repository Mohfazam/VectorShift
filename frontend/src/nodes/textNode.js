// textNode.js
import React, { useState } from 'react';
import BaseNode from './BaseNode/BaseNode';
import { nodeConfig } from './BaseNode/NodeConfig';

export const TextNode = ({ id, data, selected }) => {
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

  
  const calculateHeight = (text) => {
    const lines = text.split('\n').length;
    const minLines = 3;
    const lineHeight = 24;
    const padding = 40;
    return Math.max(120, (Math.max(lines, minLines) * lineHeight) + padding);
  };

  const calculateWidth = (text) => {
    const lines = text.split('\n');
    const maxLineLength = Math.max(...lines.map(line => line.length), 20);
    const charWidth = 7.5;
    const padding = 60;
    return Math.max(280, Math.min(600, (maxLineLength * charWidth) + padding));
  };

  const textHeight = calculateHeight(textValue);
  const textWidth = calculateWidth(textValue);

  
  const renderHighlightedText = (text) => {
    const parts = [];
    let lastIndex = 0;
    const variableRegex = /\{\{\s*(\w+)\s*\}\}/g;
    let match;

    while ((match = variableRegex.exec(text)) !== null) {
      
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      
      parts.push(
        <span key={match.index} style={{
          backgroundColor: '#dbeafe',
          color: '#1e40af',
          padding: '2px 4px',
          borderRadius: '3px',
          fontWeight: '500'
        }}>
          {match[0]}
        </span>
      );
      lastIndex = match.index + match[0].length;
    }

    
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

 
  const enhancedConfig = {
    ...nodeConfig.text,
    width: textWidth,
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
        rows: Math.max(3, textValue.split('\n').length),
        customHeight: textHeight - 100,
        renderOverlay: true,
        overlayContent: renderHighlightedText(textValue)
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