// BaseNode.js
import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../../store';

export default function BaseNode({ id, data, selected }) {
  const { title, fields, handles, width, icon, description } = data.config;
  const deleteNode = useStore((state) => state.deleteNode);
  
  const [fieldValues, setFieldValues] = useState(() => {
    const initial = {};
    fields?.forEach(field => {
      initial[field.key] = data[field.key] ?? field.defaultValue;
    });
    return initial;
  });

  const handleFieldChange = (key, value) => {
    setFieldValues(prev => ({ ...prev, [key]: value }));
  };

  const handleDelete = () => {
    deleteNode(id);
  };

  return (
    <div
      style={{
        width: width || 280,
        backgroundColor: '#ffffff',
        border: selected ? '2px solid #6366f1' : '2px solid #e0e7ff',
        borderRadius: '12px',
        boxShadow: selected 
          ? '0 4px 12px rgba(99, 102, 241, 0.2)' 
          : '0 2px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      
      <div style={{
        backgroundColor: '#f0f4ff',
        padding: '12px 16px',
        borderBottom: '1px solid #e0e7ff',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        {icon && (
          <span style={{ fontSize: '18px' }}>{icon}</span>
        )}
        <div style={{ flex: 1 }}>
          <h3 style={{
            margin: 0,
            fontSize: '14px',
            fontWeight: '600',
            color: '#4338ca'
          }}>
            {title}
          </h3>
          {description && (
            <p style={{
              margin: '2px 0 0 0',
              fontSize: '11px',
              color: '#6b7280',
              lineHeight: '1.3'
            }}>
              {description}
            </p>
          )}
        </div>
        
        <button
          onClick={handleDelete}
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '4px',
            backgroundColor: 'transparent',
            color: '#6b7280',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 'normal',
            transition: 'all 0.2s',
            paddingTop: '4px',
            lineHeight: '1'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#e0e7ff';
            e.target.style.color = '#4338ca';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#6b7280';
          }}
        >
          ×
        </button>
      </div>

      
      {fields && fields.length > 0 && (
        <div style={{ padding: '16px' }}>
          {fields.map((field, index) => (
            <div key={field.key} style={{ marginBottom: index < fields.length - 1 ? '12px' : '0' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '6px'
              }}>
                <label style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#374151'
                }}>
                  {field.label}
                </label>
                {field.type === 'select' && (
                  <span style={{
                    backgroundColor: '#6366f1',
                    color: '#ffffff',
                    fontSize: '10px',
                    fontWeight: '600',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    Dropdown
                  </span>
                )}
              </div>

              {field.type === 'text' && (
                <input
                  type="text"
                  value={fieldValues[field.key]}
                  onChange={(e) => handleFieldChange(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    fontSize: '13px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    outline: 'none',
                    backgroundColor: '#f9fafb',
                    color: '#1f2937',
                    boxSizing: 'border-box',
                    transition: 'all 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#6366f1';
                    e.target.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.backgroundColor = '#f9fafb';
                  }}
                />
              )}

              {field.type === 'textarea' && (
                <textarea
                  value={fieldValues[field.key]}
                  onChange={(e) => handleFieldChange(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  rows={field.rows || 3}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    fontSize: '13px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    outline: 'none',
                    backgroundColor: '#f9fafb',
                    color: '#1f2937',
                    resize: 'vertical',
                    fontFamily: 'ui-monospace, monospace',
                    boxSizing: 'border-box',
                    transition: 'all 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#6366f1';
                    e.target.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.backgroundColor = '#f9fafb';
                  }}
                />
              )}

              {field.type === 'select' && (
                <select
                  value={fieldValues[field.key]}
                  onChange={(e) => handleFieldChange(field.key, e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    fontSize: '13px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    outline: 'none',
                    backgroundColor: '#ffffff',
                    color: '#1f2937',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    transition: 'all 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                >
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              )}

              {field.type === 'number' && (
                <input
                  type="number"
                  value={fieldValues[field.key]}
                  onChange={(e) => handleFieldChange(field.key, e.target.value)}
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    fontSize: '13px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    outline: 'none',
                    backgroundColor: '#f9fafb',
                    color: '#1f2937',
                    boxSizing: 'border-box',
                    transition: 'all 0.2s'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#6366f1';
                    e.target.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.backgroundColor = '#f9fafb';
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}

      
      {handles?.map((handle, index) => {
        const position = handle.side === 'left' ? Position.Left : Position.Right;
        let topStyle = {};
        if (handle.topPercent !== undefined) {
          topStyle = { top: `${handle.topPercent}%` };
        }

        return (
          <Handle
            key={`${handle.idSuffix}-${index}`}
            type={handle.type}
            position={position}
            id={`${id}-${handle.idSuffix}`}
            style={{
              width: '12px',
              height: '12px',
              marginRight: '-3px',
              backgroundColor: '#6366f1',
              border: '2px solid #ffffff',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              ...topStyle
            }}
          />
        );
      })}
    </div>
  );
}